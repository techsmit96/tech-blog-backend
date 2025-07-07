import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

// Function to get the log file path based on the current date
const getLogFilePath = (): string => {
    const currentDate = new Date().toISOString().split('T')[0]; // Get the current date (YYYY-MM-DD)
    return path.join(__dirname, `../logs/${currentDate}.log`);
};

// Ensure the log directory exists
const ensureLogDirectory = () => {
    const logDir = path.join(__dirname, '../logs');
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }
};

// Write logs to the daily log file
const writeLogToFile = (log: string) => {
    ensureLogDirectory();
    const logFilePath = getLogFilePath(); // Generate log file name for the current date
    console.log("🚀 ~ writeLogToFile ~ logFilePath:", logFilePath)
    fs.appendFileSync(logFilePath, log, { encoding: 'utf8' });
};

// Logger Middleware
const logger = (req: Request, res: Response, next: NextFunction): void => {
    const start = Date.now();
    const { method, url, body: reqBody } = req; // Capture request method, URL, and body

    // Capture original send method
    const originalSend = res.send;

    // Temporarily capture the response body
    let responseBody: any;

    // Override the res.send method to log response body
    res.send = function (body?: any): Response {
        responseBody = body; // Capture the response body
        return originalSend.call(this, body); // Call the original send method
    };

    res.on('finish', () => {
        const elapsed = Date.now() - start;
        const log = `${new Date().toISOString()} - ${method} ${url} ${res.statusCode} - ${elapsed}ms\n` +
                    `Request Body: ${JSON.stringify(reqBody)}\n` +
                    `Response Body: ${JSON.stringify(responseBody)}\n`;

        // Log to console
        // console.log(log.trim());

        // Write log to daily log file
        writeLogToFile(log);
    });

    next();
};

export default logger;
