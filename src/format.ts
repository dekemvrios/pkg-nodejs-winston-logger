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

export default format;
