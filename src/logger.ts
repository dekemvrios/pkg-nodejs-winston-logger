import winston from "winston";
import createLogger from "./winston";

enum LogLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

class LoggerProvider {
  private logger: winston.Logger;

  public override: string;

  public constructor() {
    this.logger = createLogger();
  }

  public label(override: string): void {
    this.override = override;
  }

  public info(message: string, label = "logger"): void {
    this.log(message, this.override || label, LogLevel.INFO);
  }

  public warn(message: string, label = "logger"): void {
    this.log(message, this.override || label, LogLevel.WARN);
  }

  public error(message: string, label = "logger"): void {
    this.log(message, this.override || label, LogLevel.ERROR);
  }

  private log(message: string, label: string, level: LogLevel) {
    this.logger.log({ label: `${this.override || label}`, message, level });
  }
}

export default LoggerProvider;
