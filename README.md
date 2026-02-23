# JSR Netsol Website

**Live Website:** [https://badmaash10.github.io/jsr_website_demo](https://badmaash10.github.io/jsr_website_demo)

## Local Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx` or other components. The page auto-updates as you edit the file.

---

## Deployment Instructions

This website is configured to deploy automatically via **GitHub Actions** to GitHub Pages. **You do not need to manually trigger anything in the GitHub Actions tab or run the build command yourself.**

Deployment is fully automated whenever you push your code to the `main` branch.

### How to push and deploy:

Run the following standard Git commands in your terminal to deploy your latest changes:

```bash
# 1. Stage all your changes
git add .

# 2. Commit the changes with a descriptive message
git commit -m "Update homepage"

# 3. Push the changes to the main branch on GitHub
git push origin main
```

**What happens next?**
Once the `git push` command finishes, GitHub automatically starts a workflow (as defined in `.github/workflows/deploy.yml`). It will build the Next.js project and deploy it to the live URL. It usually takes 1-2 minutes for the changes to reflect on [https://badmaash10.github.io/jsr\_website\_demo](https://badmaash10.github.io/jsr_website_demo).
