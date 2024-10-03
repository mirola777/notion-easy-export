import { createLogger, format, transports } from "winston";

const devLogger = createLogger({
	level: "debug",
	format: format.json(),
	transports: [new transports.Console({ format: format.simple() })],
});

export default devLogger;
