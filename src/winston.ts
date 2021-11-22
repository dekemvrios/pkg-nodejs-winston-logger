import winston from "winston";

import format from "./format";

const createConsoleTransport =
  (): winston.transports.ConsoleTransportInstance => {
    const f = winston.format.combine(winston.format.printf(format));
    return new winston.transports.Console({ format: f });
  };

const createLogger = (transports: string[] = ["console"]): winston.Logger => {
  const transportInstances = [];

  if (transports.includes("console")) {
    transportInstances.push(createConsoleTransport());
  }

  if (!transportInstances.length) {
    throw new Error("you must have at least one transport format defined");
  }

  return winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(format)
    ),
    transports: transportInstances,
  });
};

export default createLogger;
