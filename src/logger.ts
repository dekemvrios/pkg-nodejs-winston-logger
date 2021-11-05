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

class LoggerProvider {
  private logger: winston.Logger;

  public override: string;

  public constructor() {
    this.logger = winston.createLogger({
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
  }

  public label(override: string): void {
    this.override = override;
  }

  public info(message = "", label = "logger"): void {
    this.logger.log({
      label: `${this.override || label}`,
      message,
      level: "info",
    });
  }

  public warn(message = "", label = "logger"): void {
    this.logger.log({
      label: `${this.override || label}`,
      message,
      level: "warn",
    });
  }

  public error(message = "", label = "logger"): void {
    this.logger.log({
      label: `${this.override || label}`,
      message,
      level: "error",
    });
  }
}

export default LoggerProvider;
