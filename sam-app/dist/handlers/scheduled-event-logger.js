"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduledEventLoggerHandler = void 0;
/**
 * A Lambda function that logs the payload received from a CloudWatch scheduled event.
 */
const scheduledEventLoggerHandler = async (event, context) => {
    // All log statements are written to CloudWatch by default. For more information, see
    // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
    console.info(JSON.stringify(event));
};
exports.scheduledEventLoggerHandler = scheduledEventLoggerHandler;
//# sourceMappingURL=scheduled-event-logger.js.map