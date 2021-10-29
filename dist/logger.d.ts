import winston from "winston";
export declare const logger: winston.Logger;
export declare const override: (override: string) => void;
export declare const info: (message?: string, label?: string) => void;
export declare const warn: (message?: string, label?: string) => void;
export declare const error: (message?: string, label?: string) => void;
