# Sogin Pain Relief Website 🏥

## Quick Start Guide

### Files in this folder:
```
website/
├── index.html       - Main website file
├── sw.js            - Service Worker (PWA offline support)
├── manifest.json    - PWA configuration
├── favicon.svg      - Website icon
├── images/          - Product images
└── README.md        - This file
```

---

## Features ✨

✅ **Fully Responsive** - Works on mobile, tablet, desktop  
✅ **PWA Ready** - Installable app, works offline  
✅ **Multi-Language** - English & Urdu (اردو) with RTL support  
✅ **AI Chatbot** - Automated customer support  
✅ **Modern Animations** - Parallax, magnetic buttons, cursor trail  
✅ **SEO Optimized** - Meta tags, Open Graph, structured data  
✅ **Analytics Ready** - Google Analytics, Facebook Pixel, Clarity  
✅ **Fast Loading** - Optimized performance  
✅ **No Backend Required** - Static site with external APIs  

---

## Language Support 🌐

### English & Urdu (اردو)
- Click language selector in navigation (EN/UR)
- Automatic RTL layout for Urdu
- Complete translations for all sections
- Urdu fonts load automatically

---

## Setup Instructions

### 1. Deploy Website (Choose One)

#### **Option A: Netlify (Easiest)**
```bash
1. Go to https://netlify.com
2. Drag & drop the 'website' folder
3. Your site is live!
```

#### **Option B: Vercel**
```bash
1. Go to https://vercel.com
2. Import from GitHub or upload folder
3. Done!
```

#### **Option C: GitHub Pages**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
# Enable Pages in repository settings
```

### 2. Setup Contact Form (Web3Forms - FREE)

```bash
1. Go to https://web3forms.com
2. Enter your email
3. Get your ACCESS_KEY
4. Open index.html
5. Find: <form id="contact-form">
6. Add: <input type="hidden" name="access_key" value="YOUR_KEY">
7. Change action to: https://api.web3forms.com/submit
```

### 3. Setup Newsletter (Mailchimp)

```bash
1. Go to https://mailchimp.com
2. Create account (free)
3. Create audience
4. Get embed form code
5. Replace newsletter form in index.html
```

### 4. Activate Analytics

Open `index.html` and find these sections (around line 1200-1300):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // Replace with your ID
</script>

<!-- Facebook Pixel -->
<script>
    !function(f,b,e,v,n,t,s){...}
    fbq('init', 'YOUR_PIXEL_ID'); // Replace with your Pixel ID
    fbq('track', 'PageView');
</script>

<!-- Microsoft Clarity -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){...}
    window.clarity("YOUR_CLARITY_ID"); // Replace with your Project ID
</script>
```

**Uncomment** these sections and add your IDs:
- Google Analytics: Get from https://analytics.google.com
- Facebook Pixel: Get from https://business.facebook.com
- Microsoft Clarity: Get from https://clarity.microsoft.com

### 5. Update WhatsApp Number

Find this line in `index.html`:
```html
<a href="https://wa.me/YOUR-NUMBER-HERE?text=Hi%20I'm%20interested%20in%20Sogin%20Lotion"
```

Replace `YOUR-NUMBER-HERE` with your WhatsApp number (with country code, no + or spaces):
- Example: `923001234567` for Pakistan

---

## Testing Locally

### Method 1: VS Code Live Server
```bash
1. Open folder in VS Code
2. Right-click index.html
3. Select "Open with Live Server"
```

### Method 2: Python
```bash
cd website
python -m http.server 8000
# Visit: http://localhost:8000
```

### Method 3: Node.js
```bash
npx serve website
```

---

## Customization

### Change Colors
Edit CSS variables in `index.html` (around line 80):
```css
:root {
    --primary: #0077b3;    /* Blue */
    --secondary: #28a745;  /* Green */
    --accent: #ef4444;     /* Red */
}
```

### Change Product Info
1. Open `index.html`
2. Search for "Get Fast Relief" (hero section)
3. Edit text, images, prices

### Add More Languages
1. Find `translations` object in JavaScript (around line 1700)
2. Add new language:
```javascript
translations.es = {
    nav: { product: 'Producto', ... },
    // ... more translations
};
```

---

## Troubleshooting

### Problem: Language switcher not working
**Solution**: Make sure JavaScript is enabled in browser

### Problem: Forms not submitting
**Solution**: Check Web3Forms API key is correct and added

### Problem: Fonts not loading (Urdu)
**Solution**: Internet connection required for Google Fonts

### Problem: Service Worker errors
**Solution**: Serve over HTTPS (automatic on Netlify/Vercel)

---

## Performance Optimization

### Production Build (Optional)

For maximum performance, install Tailwind CLI:

```bash
# Install Node.js first, then:
npm install -D tailwindcss
npx tailwindcss init

# Create tailwind.config.js
# Run build:
npx tailwindcss -i ./input.css -o ./output.css --minify
```

This reduces CSS from 3MB to ~20KB!

---

## Browser Support

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile browsers (iOS Safari, Chrome Mobile)  

---

## Security

✅ **No Backend = No Server Vulnerabilities**  
✅ **HTTPS Automatic** (on Netlify/Vercel)  
✅ **No Database = No SQL Injection**  
✅ **Static Files = Very Secure**  
✅ **External APIs = Professional Security**  

---

## SEO Checklist

✅ Meta title & description  
✅ Open Graph tags (Facebook)  
✅ Twitter Cards  
✅ Structured data (Schema.org)  
✅ Sitemap (auto-generated by hosting)  
✅ Robots.txt friendly  
✅ Fast loading speed  
✅ Mobile responsive  

---

## Support

- **Facebook**: facebook.com/SoginLotion
- **Website**: soginlotion.me
- **Company**: S.G.P HealthCare Services

---

## License

© 2026 S.G.P HealthCare Services. All rights reserved.

---

## Version

**Version**: 5.0  
**Last Updated**: January 30, 2026  
**Status**: Production Ready ✅  

---

## Next Steps

1. ✅ Deploy to Netlify/Vercel
2. ✅ Setup contact form API
3. ✅ Add analytics IDs
4. ✅ Update WhatsApp number
5. ✅ Setup newsletter
6. ✅ Test on mobile devices
7. ✅ Share on social media!

**You're ready to go live! 🚀**
