declare class LoggerProvider {
    private logger;
    private override;
    constructor();
    label(override: string): void;
    info(message?: string, label?: string): void;
    warn(message?: string, label?: string): void;
    error(message?: string, label?: string): void;
}
export default LoggerProvider;
