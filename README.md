
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/5b45b457-cf5e-446b-98e7-955fd0202302

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5b45b457-cf5e-446b-98e7-955fd0202302) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Deploy with Lovable

Simply open [Lovable](https://lovable.dev/projects/5b45b457-cf5e-446b-98e7-955fd0202302) and click on Share -> Publish.

### Option 2: Deploy with GitHub Pages

To make your site appear when using GitHub Pages:

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "GitHub Actions"
5. Create a new file in your repository at `.github/workflows/deploy.yml` with the following content:

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: './dist'
          
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

6. Make sure to update the `vite.config.ts` file to set the correct base path for GitHub Pages:

```typescript
export default defineConfig(({ mode }) => ({
  base: './',  // Add this line for GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  // ... rest of your config
}))
```

7. Commit these changes and push to your repository
8. Wait for the GitHub Action to complete (can be checked in the "Actions" tab)
9. Your site should now be available at https://[your-username].github.io/[repository-name]/

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

