# Abin Joseph — Developer Portfolio

A responsive React + Vite portfolio with a dark visual system, project showcase, skills, experience, education and contact section.

## Run locally

1. Install Node.js 20 or newer.
2. Open this folder in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (normally `http://localhost:5173`).

## Build and preview

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy with GitHub Pages

This project is configured for the user site repository `Abinjoseph06.github.io` and includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a GitHub repository named exactly `Abinjoseph06.github.io` (or use the existing repository if that is its name).
2. Push this project to the repository's `main` branch.
3. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source.
4. Open the **Actions** tab and wait for the workflow named **Deploy portfolio to GitHub Pages** to complete.
5. The user-site URL should be `https://abinjoseph06.github.io/` after GitHub Pages is enabled and deployment succeeds.

If you use a normal project repository instead of the user-site repository, change `base` in `vite.config.js` to `'/REPOSITORY_NAME/'` and update the favicon path in `index.html` if needed.

## Personalize before publishing

- [ ] Confirm the display name and degree/college wording.
- [ ] Confirm the Camerinfolks internship title and description.
- [ ] Replace `YOUR_EMAIL@example.com` in `src/App.jsx` with a real contact email.
- [ ] Verify the LinkedIn URL in `src/App.jsx` before publishing.
- [ ] Add a real resume PDF under `public/` and replace the disabled “Resume PDF · coming soon” button with a download link.
- [ ] Verify each project repository URL. AIcare currently points to `Abinjoseph06/AIcare`; the other project cards point to the profile until exact repositories are confirmed.
- [ ] Review all project descriptions for current implementation status; no unverified performance metrics are claimed.
- [ ] Add screenshots/demo links only for projects that are ready to show publicly.

## Stack

React 18, Vite 6, Lucide React, plain CSS.
