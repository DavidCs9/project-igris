import { ScheduledEvent } from "aws-lambda";
/**
 * A Lambda function that logs the payload received from a CloudWatch scheduled event.
 */
export declare const scheduledEventLoggerHandler: (event: ScheduledEvent, context: any) => Promise<void>;
