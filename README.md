# Refactoring

One of the main issues I noticed was duplicated code. Each button (increment, decrement, and reset) repeated the same few lines that updated the counter display, the page title, and the background color. To fix this, I created a single helper function called updateUI() that handles all those updates in one place. This made the code much shorter and easier to change later if I ever want to tweak how the display works.

Another problem was the use of unclear variable names like c, a, and b. I renamed them to be more descriptive names such as count, INCREMENT_ID, and COUNTER_ID so it’s immediately clear what they represent. Now the code makes more sense just by reading it, without needing extra comments.

There were also magic strings in the original version—IDs like "increment", "dec", and "reset" were written directly into the code multiple times. I fixed this by creating constants for all the IDs. This makes it easier to change an element’s ID in one place without needing to hunt through the code.

# Section 5 – Refactoring Code Smells in Practice

This activity is designed to help you practice identifying code smells and applying refactoring patterns to a real codebase in CMPM 121, Game Development Patterns.

## Assignment Instructions

For this assignment, your task is to **analyze and improve the code in `src/main.ts`**:

1. **Identify code smells**: Review the code and look for patterns that may cause maintenance issues, reduce readability, or introduce potential bugs.
2. **Refactor**: Apply **refactoring patterns** as described in Fowler’s _Refactoring_ book to improve the code.
3. **Document your work**: Once you have completed your refactoring:
   - Rewrite this README.md
   - List the **code smells** you identified
   - Describe the **refactoring patterns** you applied and how they improved the code

## Getting Started

With Codespaces (or another environment supporting devcontainers):

1. Run `deno task dev` to start the development server

Without Codespaces (local VS Code):

1. Install the [Deno](https://docs.deno.com/runtime/getting_started/installation/) runtime.
2. Install the Deno VS Code extension (must be done only after installing Deno runtime).
3. Run `./setup-hooks.sh` to enable pre-commit quality checks
4. Run `deno task dev` to start the development server

The setup script configures Git hooks to automatically run formatting, linting, and type checking before commits.

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages Deployment

1. Go to your repository's Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow will automatically deploy on pushes to the `main` branch
4. Your site will be published at `https://<your-github-username>.github.io/<repository-name>/`
