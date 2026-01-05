# Portfolio Website - Quick Start Guide

## ✅ Project Status: COMPLETE & RUNNING

🌐 **Development Server**: http://localhost:5173/  
📡 **Network Access**: http://192.168.0.102:5173/

---

## 🚀 Commands

### Start Development Server

```bash
cd /home/shad/Projects/Portfolio/portfolio-site
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📝 Quick Customization Guide

### 1. Update Your Information

**File**: `src/data/portfolio.js`

```javascript
// Add your real projects
export const projectsData = [
  {
    id: "your-project",
    featured: true,
    name: "Your Amazing Project",
    tagline: "What it achieved",
    description: "Detailed description...",
    // ... add your data
  },
];

// Update your skills
export const skillsData = {
  "Backend & APIs": [
    { name: "Python", experience: "5+ years", projects: "20+" },
    // ... your skills
  ],
};
```

### 2. Update Contact Information

**Files to Edit**:

- `src/components/Contact.jsx` - Email, social links
- `src/components/Hero.jsx` - GitHub link, resume link
- `src/components/Footer.jsx` - Social media links

**Find and Replace**:

- `mutinda.shadrack@example.com` → Your email
- `https://github.com/mutinda` → Your GitHub
- `https://linkedin.com/in/mutinda` → Your LinkedIn
- `https://twitter.com/mutinda` → Your Twitter

### 3. Add Project Images

1. Create folder: `portfolio-site/public/projects/`
2. Add your screenshots: `project-name.jpg`
3. Update paths in `src/data/portfolio.js`:
   ```javascript
   image: "/projects/your-project.jpg";
   ```

### 4. Add Your Resume

1. Place PDF in: `portfolio-site/public/resume.pdf`
2. Link is already set up in `Hero.jsx`

---

## 🎨 Design System

### Colors

```css
Primary:   #6B9B8E (Mint)
          #8BB5A8 (Sage)
Secondary: #2C3E50 (Charcoal)
          #1A2332 (Navy)
Accent:    #F2B544 (Amber)
Neutral:   #F5F3EE (Cream)
          #FEFDFB (Off-white)
```

### Fonts

- **Display**: Space Grotesk (Headings)
- **Body**: Inter (Text)
- **Mono**: JetBrains Mono (Code)

---

## 📂 Key Files

```
src/
├── components/
│   ├── Navigation.jsx    # Sticky header
│   ├── Hero.jsx         # Landing section
│   ├── Projects.jsx     # Portfolio showcase
│   ├── Skills.jsx       # Tech stack
│   ├── About.jsx        # Personal info
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer
├── data/
│   └── portfolio.js     # ⭐ EDIT THIS for your content
├── App.jsx              # Main app
└── index.css            # Global styles
```

---

## 🎯 Sections Overview

1. **Navigation** - Sticky header with smooth scroll
2. **Hero** - Big headline, CTAs, animated background
3. **Stats** - Key metrics (experience, projects, etc.)
4. **Featured Projects** - Detailed project showcases
5. **Projects Grid** - Additional projects
6. **Skills** - Tab-based tech stack display
7. **About** - Personal background and info
8. **Contact** - Contact form and social links
9. **Footer** - Links and scroll-to-top

---

## 🛠️ Tech Stack

- React 19.1
- Vite 7.1 (Rolldown bundler)
- Tailwind CSS 3.x
- Framer Motion 12.x
- Lucide React (icons)

---

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive!

---

## ⚡ Performance Tips

1. Optimize images before adding
2. Use WebP format when possible
3. Keep animations smooth (avoid too many at once)
4. Test on mobile devices

---

## 🎨 Customizing Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: {
    mint: '#YOUR_COLOR',  // Change these!
    sage: '#YOUR_COLOR',
  }
}
```

---

## 📄 SEO

Update meta tags in `index.html`:

```html
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name" />
```

---

## 🐛 Troubleshooting

### CSS Warnings in VS Code

- These are normal! Tailwind directives confuse the linter
- The site will work perfectly

### File Watcher Limit Error

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### Port Already in Use

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

### Deploy to Netlify/Vercel

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## ✨ What's Included

✅ 10 fully functional React components
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations with Framer Motion
✅ SEO-optimized HTML
✅ Custom design system with Tailwind
✅ Accessibility features
✅ Performance optimized
✅ Modern ES6+ code
✅ Clean, maintainable structure

---

## 📧 Need Help?

The portfolio is production-ready! Just:

1. Update the content in `src/data/portfolio.js`
2. Replace contact info in components
3. Add your project images
4. Deploy!

---

**Built with ❤️ for Mutinda Shadrack**

Portfolio Status: ✅ **READY TO DEPLOY**
