import { ScheduledEvent } from "aws-lambda";

/**
 * A Lambda function that logs the payload received from a CloudWatch scheduled event.
 */
export const scheduledEventLoggerHandler = async (
  event: ScheduledEvent,
  context: any
): Promise<string> => {
  // All log statements are written to CloudWatch by default. For more information, see
  // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
  return "hello world";
};
