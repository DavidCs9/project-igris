# Personalized Job Vacancy Monitor

## Objective

This project aims to automate the process of monitoring specific company career websites for new job vacancies that align with my professional profile (Software Engineer, JS Stack, AWS Certified). The system will periodically scrape target websites, identify newly posted positions, filter them based on predefined criteria (keywords, location, etc.), and send an email notification with relevant opportunities.

## Target Audience

This is a personal tool designed for my own use to streamline the job search/monitoring process for specific high-interest companies.

## Core Features

- **Scheduled Execution:** Automatically runs the monitoring process on a regular schedule (e.g., daily).
- **Targeted Scraping:** Fetches job listing data from a predefined list of company career pages.
- **New Vacancy Detection:** Identifies job postings that have appeared since the last successful check.
- **Personalized Filtering:** Filters new vacancies based on configurable criteria such as:
  - Keywords (e.g., "Software Engineer", "Node.js", "AWS", "React")
  - Location (e.g., "GDL", "CDMX", "Remote")
  - Job Title patterns
  - Other relevant skills or requirements.
- **Email Notifications:** Sends a formatted email summarizing the newly found, relevant job opportunities, including links to the original postings.

## Target Companies

The system is designed to monitor vacancies across a curated list of companies, categorized into tiers based on strategic interest. The initial list includes companies like:

- **Tier 1:** Google, Oracle, Intel, Wizeline, Microsoft, Amazon
- **Tier 2:** EPAM, Globant, Thoughtworks, SAP, IBM
- **Tier 3:** Nubank, Kavak, Bitso, Konfio, Clara, Stori

_(The specific list and target URLs will be maintained in the system's configuration)._

## Planned Technology Stack

- **Language:** Node.js (JavaScript / Potentially TypeScript)
- **Cloud Provider:** Amazon Web Services (AWS)
- **Core AWS Services:**
  - **Amazon EventBridge:** For scheduling the scraping tasks.
  - **AWS Lambda / AWS Fargate:** For executing the scraping and processing logic (Choice depends on complexity and runtime needs per site).
  - **Amazon DynamoDB:** For storing configuration (company list, URLs, selectors) and state (previously seen job IDs).
  - **Amazon Simple Email Service (SES):** For sending email notifications.
  - **Amazon CloudWatch:** For logging, monitoring, and potential error alarming.
- **Key Libraries (Anticipated):**
  - `axios` / `node-fetch`: For making HTTP requests.
  - `puppeteer` / `playwright`: For interacting with JavaScript-heavy sites or those requiring browser automation.
  - `aws-sdk` (v3 for JavaScript): For interacting with AWS services.
  - HTML parsing libraries (e.g., `cheerio`).

## High-Level Architecture

1.  **Trigger:** An EventBridge rule triggers the process on a defined schedule.
2.  **Execute:** A Lambda function or Fargate task is invoked.
3.  **Configure:** The function reads the target company list and scraping parameters from DynamoDB.
4.  **Scrape:** The function iterates through targets, fetching and parsing job data from their career pages.
5.  **Compare:** Current job listings are compared against the previously stored list (from DynamoDB) to identify _new_ postings.
6.  **Filter:** New postings are filtered against user-defined criteria (keywords, location, etc.).
7.  **Notify:** If relevant new postings are found, an email is composed and sent via SES.
8.  **Update State:** The list of currently seen jobs is saved back to DynamoDB for the next run.
9.  **Log:** Actions and errors are logged to CloudWatch.

## Key Challenges & Considerations

- **Website Structure Changes:** Career page layouts change, requiring updates to scraping logic (selectors, XPaths).
- **Anti-Scraping Mechanisms:** Target sites may implement measures (CAPTCHAs, rate limits, JS challenges) that complicate scraping.
- **Dynamic Content:** Sites relying heavily on JavaScript for rendering job lists may require headless browser automation (Puppeteer/Playwright).
- **Configuration Management:** Maintaining the list of targets, URLs, and scraping/filtering rules effectively.

---

This README provides a good overview for anyone (including your future self!) looking at the project. Let me know if you'd like any adjustments!
