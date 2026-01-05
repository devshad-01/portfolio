# Sanity Studio Setup & Troubleshooting

## Issue: "Failed to establish EventSource connection"

### Root Cause
- **Node.js Version**: v23.8.0 not fully compatible with Sanity v3 (requires Node 20+)
- **Environment Variables**: Sanity v3 uses Vite, which requires `import.meta.env` instead of `process.env`
- **Package Conflicts**: Version mismatches between Sanity packages and dependencies

### Solution Applied

#### 1. Fixed Environment Variable Access
**File**: `sanity-studio/sanity.config.js`
```javascript
// Before (broken)
projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id'

// After (fixed)
projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || 'gf4pf40n'
```

#### 2. Updated CLI Configuration
**File**: `sanity-studio/sanity.cli.js`
```javascript
// Before (broken)
projectId: process.env.SANITY_STUDIO_PROJECT_ID,
dataset: process.env.SANITY_STUDIO_DATASET || 'production'

// After (fixed)
projectId: 'gf4pf40n',
dataset: 'production'
```

#### 3. Updated Package Versions
**File**: `sanity-studio/package.json`
```json
{
  "dependencies": {
    "sanity": "^3.99.0",
    "@sanity/vision": "^3.99.0",
    "styled-components": "^6.1.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

#### 4. Cleared Sanity Cache
```bash
cd sanity-studio
rm -rf node_modules/.sanity
npm install react-is --legacy-peer-deps
```

### Verification
- ✅ Sanity Studio runs at `http://localhost:3333`
- ✅ No EventSource connection errors
- ✅ Content can be added/edited/published
- ✅ Portfolio site fetches from Sanity automatically

### Alternative: Hosted Studio
If local issues persist, deploy to Sanity's hosted environment:
```bash
cd sanity-studio
npx sanity deploy
```
This creates `https://devshad-portfolio.sanity.studio` (no local setup needed).

### CORS Configuration
Ensure these origins are added in [sanity.io/manage](https://sanity.io/manage):
- `http://localhost:3333` (for local development)
- `https://portfolio-three-sigma-dsnh3p76eh.vercel.app` (for production)

## Usage

### Start Local Studio
```bash
cd sanity-studio
npm run dev
# Opens http://localhost:3333
```

### Add Content
1. Click "Content" in left sidebar
2. Create documents for: Project, Work Experience, Education, Certification, Skill, Profile
3. Fill in details and click "Publish"
4. Portfolio site automatically updates

### Deploy Studio (Optional)
```bash
cd sanity-studio
npx sanity deploy
```

## Project Structure
```
Portfolio/
├── sanity-studio/          # CMS for content management
│   ├── schemas/           # Content type definitions
│   ├── sanity.config.js   # Studio configuration
│   └── sanity.cli.js      # CLI configuration
│
├── portfolio-site/        # React portfolio website
│   ├── src/
│   │   ├── config/sanity.js  # Sanity client config
│   │   └── hooks/usePortfolioData.js  # Data fetching
│   └── .env               # VITE_SANITY_PROJECT_ID=gf4pf40n
```

## Environment Variables
- **Studio**: `SANITY_STUDIO_PROJECT_ID=gf4pf40n`
- **Portfolio**: `VITE_SANITY_PROJECT_ID=gf4pf40n`

## Troubleshooting
- **EventSource errors**: Clear browser cache, try incognito mode
- **Package issues**: Delete `node_modules` and `package-lock.json`, then `npm install`
- **CORS errors**: Add localhost origins in Sanity dashboard
- **Node version**: Use Node 20+ for best compatibility