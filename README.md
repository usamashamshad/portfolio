# Usama Shamshad — Portfolio

Modern portfolio website for **Usama Shamshad**, AI Engineer & Machine Learning Specialist.

## Tech Stack

- **Next.js 15** — React framework with App Router
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth scroll animations
- **TypeScript** — Type-safe development

## Run Locally

```bash
cd portfolio
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

## Build for Production

```bash
npm run build
```

The static site is exported to the `out/` folder.

## Deploy Live on GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it **`portfolio`** (or `usamashamshad.github.io` for a cleaner URL)
3. Leave it **Public**, do **not** add README/gitignore (you already have them)
4. Click **Create repository**

### Step 2 — Push your code

Run these in PowerShell from the portfolio folder:

```bash
cd "c:\Users\Abdul Rehman\Desktop\portfolio"
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/usamashamshad/portfolio.git
git push -u origin main
```

> Replace `portfolio` in the URL if you used a different repo name.

### Step 3 — Enable GitHub Pages

1. Open your repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, select **GitHub Actions**
3. The workflow runs automatically on every push to `main`
4. Wait ~2 minutes — your site will be live at:
   - **`https://usamashamshad.github.io/portfolio/`** (if repo is named `portfolio`)
   - **`https://usamashamshad.github.io/`** (if repo is named `usamashamshad.github.io`)

### Repo name = `usamashamshad.github.io`?

Edit `.github/workflows/deploy.yml` and change:

```yaml
GITHUB_REPOSITORY_NAME: ""
```

Then redeploy by pushing any change to `main`.

## Sections

- Hero with social links (GitHub, LinkedIn, Email)
- About & MS Thesis research
- Work Experience (5 roles)
- Projects (15+ with GitHub links)
- Technical Skills (8 categories)
- Education
- Certifications
- Contact

## Links

- GitHub: [github.com/usamashamshad](https://github.com/usamashamshad)
- LinkedIn: [linkedin.com/in/usama-shamshad-383023143](https://www.linkedin.com/in/usama-shamshad-383023143/)
