import winston from "winston";

const format = ({
  level,
  message,
  label,
  timestamp,
}: {
  [key: string]: unknown;
}): string => {
  return `[${timestamp}] (${level}) [${label}] ${message}`;
};

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(format)
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.printf(format)),
    }),
  ],
});

let labelOverride = "";
export const override = (override: string): void => {
  labelOverride = override;
};

export const info = (message = "", label = "logger"): void => {
  logger.log({ label: `${labelOverride || label}`, message, level: "info" });
};

export const warn = (message = "", label = "logger"): void => {
  logger.log({ label: `${labelOverride || label}`, message, level: "warn" });
};

export const error = (message = "", label = "logger"): void => {
  logger.log({ label: `${labelOverride || label}`, message, level: "error" });
};
