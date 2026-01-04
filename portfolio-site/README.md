# Shadrack Mutinda - Portfolio

A modern, professional portfolio website built with React, featuring dark mode, multi-page routing, and prepared for Sanity CMS integration.

![Portfolio Preview](./public/og-image.png)

## ✨ Features

- **🌓 Dark Mode** - Elegant deep navy/slate theme (not pure black)
- **📱 Fully Responsive** - Mobile-first design that looks great everywhere
- **🚀 Multi-Page Architecture** - Separate pages for home and projects
- **📝 Sanity CMS Ready** - Data layer prepared for dynamic content
- **⚡ Blazing Fast** - Built with Vite for optimal performance
- **🎨 Unique Design** - Custom UI components, not generic templates
- **♿ Accessible** - WCAG compliant with proper semantics
- **🎭 Smooth Animations** - Subtle, purposeful motion

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/           # Navigation, Footer, Layout wrapper
│   │   ├── Layout.jsx
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   └── sections/         # Page sections
│       ├── Hero.jsx
│       ├── WorkExperience.jsx
│       ├── FeaturedProjects.jsx
│       ├── Skills.jsx
│       ├── Education.jsx
│       ├── Certifications.jsx
│       ├── About.jsx
│       └── Contact.jsx
├── pages/
│   ├── HomePage.jsx
│   └── ProjectsPage.jsx
├── context/
│   └── ThemeContext.jsx  # Dark mode state management
├── hooks/
│   └── usePortfolioData.js # Data fetching hooks
├── data/
│   └── portfolio.js      # Local portfolio content
├── config/
│   ├── sanity.js         # Sanity client configuration
│   └── sanity.schemas.js # CMS schema definitions
├── App.jsx               # Main app with routing
├── main.jsx              # React entry point
└── index.css             # Global styles + Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mutinda/portfolio.git

# Navigate to the project
cd portfolio-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Customization

### Update Your Information

Edit `src/data/portfolio.js` to update:
- Personal info & bio
- Work experience
- Projects
- Education
- Certifications
- Skills
- Contact information

### Theme Colors

Colors are defined in `tailwind.config.js`:

```javascript
colors: {
  light: { /* Light mode colors */ },
  dark: { /* Dark mode - deep navy/slate */ },
  accent: { 
    primary: '#3b82f6',      // Blue
    secondary: '#06b6d4',    // Cyan
  },
}
```

## 📝 Sanity CMS Integration

This portfolio is prepared for Sanity CMS. To enable dynamic content:

### 1. Create a Sanity Project

```bash
npm create sanity@latest
```

### 2. Copy Schema Definitions

Copy the schemas from `src/config/sanity.schemas.js` to your Sanity project.

### 3. Configure Environment Variables

Create `.env`:

```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
```

### 4. Add CORS Origins

In your Sanity dashboard, add your deployment URLs to CORS origins.

## 📄 Pages

### Home Page
- Hero section with animated elements
- Work experience timeline
- Featured projects showcase
- Skills grid by category
- Education section
- Certifications display
- About section
- Contact with social links

### Projects Page
- All projects with search
- Filter by category
- Detailed project cards

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.x |
| Routing | React Router 6 |
| Icons | Lucide React |
| CMS Ready | Sanity Client |
| Code Quality | ESLint |

## 📱 Responsive Breakpoints

- **Mobile**: 0 - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'dist' folder
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

---

Built with ❤️ by Shadrack Mutinda
