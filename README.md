# Aegis Cyber Defense

A futuristic, enterprise-grade cybersecurity agency website featuring immersive 3D animations, glassmorphism design, and full-spectrum security services.

## 🚀 Features

- **Immersive Hero Section** - 3D particle mesh background with interactive defense configurator
- **Full-Spectrum Services** - 11 security service categories from App Security to Physical Protection
- **Case Studies** - Animated case study slider with impact metrics
- **Labs & Research** - Security research and threat intelligence showcase
- **Expert Team** - Professional team member profiles
- **Contact Form** - Secure contact form with PGP key support
- **Responsive Design** - Fully responsive across all devices
- **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation
- **SEO Optimized** - Complete meta tags, OpenGraph, and Schema.org markup

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling with custom glassmorphism theme
- **Framer Motion** - Smooth animations and transitions
- **Three.js / React Three Fiber** - 3D particle mesh animations
- **EmailJS** - Contact form handling (ready to integrate)

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd aegis-cyber-defense
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The app will automatically open at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 📁 Project Structure

```
aegis-cyber-defense/
├── public/
│   ├── index.html          # HTML entry point
│   ├── security.txt        # Security disclosure policy
│   ├── pgp.txt            # PGP public key (placeholder)
│   └── logo.svg           # Logo file
├── src/
│   ├── components/        # React components
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── AnimatedBackground.jsx
│   │   ├── Configurator.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── CaseStudyCard.jsx
│   │   ├── Labs.jsx
│   │   ├── Team.jsx
│   │   ├── Partners.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── services.js    # Service data
│   │   └── caseStudies.js # Case study data
│   ├── styles/
│   │   ├── tailwind.css   # Tailwind imports
│   │   └── globals.css    # Global styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # React entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Updating Content

1. **Services**: Edit `src/data/services.js`
2. **Case Studies**: Edit `src/data/caseStudies.js`
3. **Team Members**: Edit `src/components/Team.jsx`
4. **Labs Articles**: Edit `src/components/Labs.jsx`

### Branding

1. **Logo**: Replace `public/logo.svg`
2. **Colors**: Update `tailwind.config.js` colors section
3. **Fonts**: Update font links in `index.html` and `tailwind.config.js`

### Contact Information

Replace placeholder contact information in:
- `src/components/Contact.jsx` - Contact details
- `src/components/Footer.jsx` - Footer contact info
- `public/security.txt` - Security contact email

### PGP Key

Replace the placeholder in `public/pgp.txt` with your actual PGP public key.

### Email Integration

1. **EmailJS Setup** (Recommended):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Uncomment and update the EmailJS code in `src/components/ContactForm.jsx`
   - Replace the placeholder values

2. **Alternative Backend**:
   - Replace the form submission handler in `ContactForm.jsx`
   - Connect to your backend API endpoint

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Update `vite.config.js` base path:
   ```js
   base: '/your-repo-name/'
   ```
4. Deploy: `npm run deploy`

## 🎯 Design System

### Colors

- **Space Black**: `#050A14` - Primary background
- **Cyber Teal**: `#00E6C3` - Primary accent
- **Royal Violet**: `#7A4DFF` - Secondary accent
- **Glass White**: `rgba(255,255,255,0.08)` - Glassmorphism overlay

### Typography

- **Headings**: Space Grotesk (bold, uppercase)
- **Body**: Inter (regular/medium)
- **Monospace**: IBM Plex Mono (for code/numerics)

### Animations

- Smooth scroll-triggered animations using Framer Motion
- Hover effects with scale and glow
- Parallax effects on hero section
- 3D particle mesh with Three.js

## 🔒 Security Features

- Security.txt for responsible disclosure
- PGP key for encrypted communications
- Secure contact form handling
- HTTPS-ready (configure on deployment)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus indicators
- Reduced motion support

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is proprietary. All rights reserved.

## 🤝 Support

For questions or issues, contact: contact@aegiscyberdefense.com

---

**Built with security in mind. Designed for mission-critical operations.**

