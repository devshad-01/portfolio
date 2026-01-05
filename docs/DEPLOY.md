# 🚀 Portfolio Deployment Guide

## Complete Setup Instructions

### Step 1: Create Sanity Project (5 minutes)

1. **Go to [sanity.io](https://sanity.io) and sign up/login**

2. **Create a new project:**
   ```bash
   cd sanity-studio
   npm install
   npx sanity login
   npx sanity init --create-project "My Portfolio" --dataset production
   ```
   
3. **Copy your Project ID** (it will be shown after init, looks like: `abc123xy`)

4. **Add CORS origin:**
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Select your project → API → CORS Origins
   - Add: `http://localhost:5173` (for dev)
   - Add: `https://your-domain.vercel.app` (for production)

---

### Step 2: Configure Environment Variables

**For Portfolio Site (`portfolio-site/.env`):**
```env
VITE_SANITY_PROJECT_ID=your-project-id-here
VITE_SANITY_DATASET=production
```

**For Sanity Studio (`sanity-studio/.env`):**
```env
SANITY_STUDIO_PROJECT_ID=your-project-id-here
SANITY_STUDIO_DATASET=production
```

---

### Step 3: Create GitHub Repository

```bash
# Make initial commit
cd /home/shad/Projects/Portfolio
git commit -m "Initial commit: Portfolio with Sanity CMS"

# Create repo on GitHub and push
gh repo create portfolio --public --source=. --push
# OR manually:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

---

### Step 4: Deploy to Vercel (Auto CI/CD)

1. **Go to [vercel.com](https://vercel.com) and login with GitHub**

2. **Import your repository:**
   - Click "Add New..." → "Project"
   - Select your `portfolio` repo
   - Set root directory to: `portfolio-site`
   - Framework preset: Vite

3. **Add Environment Variables:**
   - `VITE_SANITY_PROJECT_ID` = your project ID
   - `VITE_SANITY_DATASET` = production

4. **Click Deploy!**

✅ Now every push to `main` will auto-deploy!

---

### Step 5: Deploy Sanity Studio (Optional)

```bash
cd sanity-studio
npm install
npx sanity deploy
```

This gives you a hosted CMS at: `https://your-studio.sanity.studio`

---

## Quick Commands Reference

| Task | Command |
|------|---------|
| Dev server | `cd portfolio-site && npm run dev` |
| Build | `cd portfolio-site && npm run build` |
| Preview build | `cd portfolio-site && npm run preview` |
| Run Sanity Studio | `cd sanity-studio && npm run dev` |
| Deploy Studio | `cd sanity-studio && npx sanity deploy` |

---

## Project Structure

```
Portfolio/
├── portfolio-site/          # React portfolio website
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── config/          # Sanity client config
│   │   ├── data/            # Local data fallback
│   │   └── hooks/           # Data fetching hooks
│   └── dist/                # Production build
│
├── sanity-studio/           # Sanity CMS
│   └── schemas/             # Content type definitions
│
└── .github/workflows/       # CI/CD (optional)
```

---

## How It Works

1. **Without Sanity configured:** Uses local data from `src/data/portfolio.js`
2. **With Sanity configured:** Fetches from CMS, falls back to local data on error
3. **CI/CD:** Every push to main → auto builds → auto deploys to Vercel

---

## Need Help?

- Sanity Docs: https://sanity.io/docs
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
