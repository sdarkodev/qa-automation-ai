# Automation and AI

Playwright/TypeScript test automation suite with GitHub Actions CI/CD and AI-assisted testing workflows.

![Playwright Tests](https://github.com/sdarkodev/qa-automation-ai/actions/workflows/playwright.yml/badge.svg)

## What's in here
- **UI tests** (`tests/ui/`) — Page Object Model, functional + negative-case coverage against saucedemo.com
- **API tests** (`tests/api/`) — Playwright APIRequestContext, JSON schema validation (zod), positive/negative/404 coverage against a public REST API
- **CI/CD** — GitHub Actions pipeline with tag-based execution: `@smoke` runs on every push to main, `@regression` runs on every pull request

## Tech stack
Playwright, TypeScript, zod, GitHub Actions

## Running locally
\`\`\`bash
npm install
npx playwright test
\`\`\`

## Why this exists
Built to demonstrate hands-on CI/CD ownership, API contract testing, and tag-based test strategy — skills I applied directly from production experience automating a React content platform at Digital Turbine.
\`\`\`