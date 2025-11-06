# 🚀 Next Steps - Deployment Guide

Your website is ready! Follow these steps to customize and deploy it.

## ✅ Step 1: Customize Your Content

### 1.1 Update Contact Information

**File: `src/components/Contact.jsx`**
- Line 45: Replace `contact@aegiscyberdefense.com` with your actual email
- Line 53: Replace `security@aegiscyberdefense.com` with your security email
- Line 61: Replace `+1 (555) 123-SECURE` with your emergency phone number
- Line 103-107: Update office locations

**File: `src/components/Footer.jsx`**
- Line 111: Replace contact email
- Line 115: Replace phone number

**File: `public/security.txt`**
- Line 1: Update `mailto:security@aegiscyberdefense.com` with your security email
- Line 3: Update PGP key URL if needed

### 1.2 Add Your PGP Key

**File: `public/pgp.txt`**
- Replace the placeholder with your actual PGP public key
- Instructions: https://www.gnupg.org/gph/en/manual/c14.html

### 1.3 Update Company Name (Optional)

If you want to rename "Aegis Cyber Defense":
- Search and replace "Aegis" or "Aegis Cyber Defense" throughout the codebase
- Update `index.html` title and meta tags
- Update `package.json` name field
- Update `public/manifest.json` name field

### 1.4 Customize Services & Case Studies

**Files to edit:**
- `src/data/services.js` - Modify service descriptions, features
- `src/data/caseStudies.js` - Update case studies with real client data (anonymized)
- `src/components/Team.jsx` - Update team member information
- `src/components/Labs.jsx` - Add your actual research articles

## ✅ Step 2: Set Up Contact Form

You have two options:

### Option A: EmailJS (Easiest - Recommended for beginners)

1. Sign up at [EmailJS](https://www.emailjs.com/) (free tier available)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. **Edit `src/components/ContactForm.jsx`**:
   - Uncomment the EmailJS code (lines ~40-60)
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY`

### Option B: Backend API (For production)

1. Create a backend endpoint (Node.js, Python, etc.)
2. Replace the form submission handler in `ContactForm.jsx`
3. Connect to your API endpoint

## ✅ Step 3: Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## ✅ Step 4: Deploy Your Website

### Option A: Deploy to Vercel (Recommended - Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite and deploys automatically!
   - Your site will be live at `your-project.vercel.app`

### Option B: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Option C: Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Update `vite.config.js`:
   ```js
   base: '/your-repo-name/'
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## ✅ Step 5: Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Test contact form functionality
- [ ] Verify PGP key and security.txt are accessible
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify SEO meta tags are correct
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain (if needed)

## 🔧 Optional Enhancements

### Add Google Analytics
1. Get your Google Analytics tracking ID
2. Add to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
   ```

### Add Custom Domain
- Vercel/Netlify: Add your domain in project settings
- Update DNS records as instructed
- SSL certificate is automatic

### Performance Optimization
- The site is already optimized, but you can:
  - Add more images (convert to WebP format)
  - Implement lazy loading for images
  - Add service worker for offline support

## 📞 Need Help?

- Check the main `README.md` for detailed documentation
- Review component files for customization options
- All TODO comments indicate where to add your information

## 🎉 You're Ready!

Once you've customized the content and deployed, your professional cybersecurity website will be live!

---

**Quick Deploy Command (Vercel):**
```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy instantly!

