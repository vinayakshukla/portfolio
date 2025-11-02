# Portfolio Angular Application

This is a single-component Angular application converted from a static HTML/CSS/JS portfolio website.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200/`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to GitHub Pages

The repository is configured with GitHub Actions to automatically deploy to GitHub Pages when you push to the `main` or `master` branch.

**To enable GitHub Pages:**

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. The site will automatically deploy on the next push to `main` or `master`

Your site will be available at: `https://[your-username].github.io/[repository-name]/`

**Manual deployment:**

If you want to build manually for GitHub Pages:
```bash
npm run build:gh-pages
```

**Note:** If your repository name is different from "portfolio", you may need to update the `base-href` in `.github/workflows/deploy.yml` or the `build:gh-pages` script in `package.json`.

## Project Structure

- `src/app/` - Contains the main AppComponent (single component)
- `src/assets/` - Static assets (images, etc.)
- `src/styles.css` - Global styles
- `angular.json` - Angular CLI configuration
- `package.json` - Dependencies and scripts

## Features

- Single component Angular application
- Responsive design
- Skills tag cloud visualization
- Projects carousel
- Social media links
- Resume download functionality

