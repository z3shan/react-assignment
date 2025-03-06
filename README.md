# NY Times Most Popular Articles App

This is a React + TypeScript + Vite application using Vite to fetch and display NY Times popular articles.

## Prerequisites
- Node.js
- NY Times API Key
- SonarQube (optional)

## Installation
```bash
# Clone repo
git clone https://github.com/z3shan/react-assignment.git
cd react-assignment

# Install dependencies
npm install
```

## Replace API Key
Update `API_KEY` in `constants/index.tsx` with your API key.

## Run App
```bash
npm run dev
```

## Tests
### Unit Tests
```bash
npm test
```
### UI Tests
```bash
npx cypress open
```

## Linting
```bash
npm run lint
```

## Pre-Commit Hooks
Husky is used to run linting and unit tests before every commit.

## Code Quality
SonarQube is integrated to generate code quality reports.

## Build
```bash
npm run build
```

## License
MIT
```
