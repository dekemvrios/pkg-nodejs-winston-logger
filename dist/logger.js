"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const format = ({ level, message, label, timestamp, }) => {
    return `[${timestamp}] (${level}) [${label}] ${message}`;
};
class LoggerProvider {
    constructor() {
        this.logger = winston_1.default.createLogger({
            level: "info",
            format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.printf(format)),
            transports: [
                new winston_1.default.transports.Console({
                    format: winston_1.default.format.combine(winston_1.default.format.printf(format)),
                }),
            ],
        });
    }
    label(override) {
        this.override = override;
    }
    info(message = "", label = "logger") {
        this.logger.log({
            label: `${this.override || label}`,
            message,
            level: "info",
        });
    }
    warn(message = "", label = "logger") {
        this.logger.log({
            label: `${this.override || label}`,
            message,
            level: "warn",
        });
    }
    error(message = "", label = "logger") {
        this.logger.log({
            label: `${this.override || label}`,
            message,
            level: "error",
        });
    }
}
exports.default = LoggerProvider;
//# sourceMappingURL=logger.js.map