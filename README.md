# Automation and AI

Playwright/TypeScript test automation suite with GitHub Actions CI/CD and AI-assisted testing workflows.

## Features
- 🎭 Playwright + TypeScript E2E tests
- 🔁 GitHub Actions CI/CD pipeline
- 🔌 API contract testing (Playwright APIRequestContext + zod/ajv schema validation)
- 🤖 AI-assisted flaky-test debugging & coverage analysis
- 🏷️ Tag-based execution (@Smoke / @Regression / @Accessibility)

## Getting Started
\`\`\`bash
npm install
npx playwright test
\`\`\`

## CI/CD
Tests run automatically on push/PR via GitHub Actions — see `.github/workflows/`.

## Project Structure
\`\`\`
/tests        - test specs
/pages        - Page Object Models
/api          - API test suite
/.github      - CI workflows
\`\`\`
