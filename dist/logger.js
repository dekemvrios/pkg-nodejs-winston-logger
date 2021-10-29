"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.warn = exports.info = exports.override = exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const format = ({ level, message, label, timestamp, }) => {
    return `[${timestamp}] (${level}) [${label}] ${message}`;
};
exports.logger = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.printf(format)),
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.printf(format)),
        }),
    ],
});
let labelOverride = "";
const override = (override) => {
    labelOverride = override;
};
exports.override = override;
const info = (message = "", label = "logger") => {
    exports.logger.log({ label: `${labelOverride || label}`, message, level: "info" });
};
exports.info = info;
const warn = (message = "", label = "logger") => {
    exports.logger.log({ label: `${labelOverride || label}`, message, level: "warn" });
};
exports.warn = warn;
const error = (message = "", label = "logger") => {
    exports.logger.log({ label: `${labelOverride || label}`, message, level: "error" });
};
exports.error = error;
//# sourceMappingURL=logger.js.map