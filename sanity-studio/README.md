# Sanity Studio for Portfolio

This is the Sanity Studio for managing your portfolio content.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Log in to Sanity:
   ```bash
   npx sanity login
   ```

3. Initialize your project (first time only):
   ```bash
   npx sanity init --create-project "Portfolio" --dataset production
   ```

4. Start the studio:
   ```bash
   npm run dev
   ```

## Deploying the Studio

Deploy to Sanity's hosted studio:
```bash
npx sanity deploy
```

## Project Structure

- `schemas/` - Content type definitions
- `sanity.config.js` - Studio configuration
- `sanity.cli.js` - CLI configuration
