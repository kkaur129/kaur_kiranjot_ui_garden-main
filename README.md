# Assignment13_Kaur_Kiranjot_README.md

**Student:** Kaur Kiranjot
**Course:** Full-Stack Web Development – RRC Polytech

---

## Overview

This assignment was about improving my **UI Garden project** from Assignment 12 by adding proper **code quality tools** and an automated **build validation system**.
The goal was to make sure that every piece of code that gets committed or pushed to GitHub is clean, formatted, and tested before it’s allowed to go through.

---

## What I Set Up

### 🔹 Local Checks

I connected **Husky** to run automatic checks before every commit.
Whenever I try to commit code, the following commands run automatically:

```bash
npm run format:check
npm run lint
npm test
```

If any of these fail, the commit doesn’t go through until the issues are fixed.
This helps catch formatting or linting errors early.

### 🔹 GitHub Workflow

I created a GitHub Actions workflow file named **ci.yml**.
Every time I push to the main branch, GitHub automatically installs dependencies, checks code formatting, lints, runs tests, and builds the project.
If any step fails, the workflow stops and shows a red X in the Actions tab.

That means even if someone skips the local Husky checks, the same rules will still run in the GitHub repository.

---

## Tools and Technologies

**Prettier** : Formats code automatically
**ESLint**: Detects and flags bad code patterns
**Husky** :Runs pre-commit checks
**GitHub Actions**: Automates CI/CD on push

---

## Docker Setup

I containerized the Storybook build so it can run in a browser through Docker.
Below is the Dockerfile I used:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /kaur_kiranjot_ui_garden
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npx storybook build

FROM nginx:alpine
COPY --from=builder /kaur_kiranjot_ui_garden/storybook-static /usr/share/nginx/html
EXPOSE 8018
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3   CMD wget --quiet --tries=1 --spider http://localhost:8018/ || exit 1
CMD ["nginx", "-g", "daemon off;"]


To run locally:

docker build -t kaur_kiranjot_ui_garden .
docker run -d -p 8018:80 kaur_kiranjot_ui_garden

Then open **http://localhost:8018** in a browser to view the Storybook.

---

## Testing
Each component has a test file that checks:
- if the component renders properly, and
- if it reacts correctly when disabled or clicked.

Run tests with:

npm test -- --watchAll=false


---

## Reflection
This project helped me understand how automated quality control works in real software teams.
I learned how to set up tools that enforce clean code, run tests automatically, and prevent bad commits from going through.
It also gave me confidence using **GitHub Actions** and **Docker** as part of a real-world development workflow.

```
