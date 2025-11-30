# Data Scientist Portfolio

[![GitHub Pages](https://img.shields.io/badge/View%20Portfolio-Live%20Demo-FF3B5C?style=for-the-badge&logo=github)](https://SrihariR2004.github.io/Srihari)

A futuristic, creative portfolio website for data scientists, built with modern web technologies and ready for GitHub Pages deployment.

## 🌐 View the Portfolio

**Live Demo:** [https://SrihariR2004.github.io/Srihari](https://SrihariR2004.github.io/Srihari)

Simply click the link above to view the portfolio website!

## 🚀 Features

- **Futuristic Design**: Modern, eye-catching UI with animated backgrounds and glitch effects
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Interactive elements with smooth transitions and scroll effects
- **GitHub Pages Ready**: Easy deployment to GitHub Pages
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Fast Loading**: Optimized performance with minimal dependencies

## 🛠️ Technologies Used

- HTML5
- CSS3 (with animations and modern features)
- Vanilla JavaScript (no frameworks required)
- Google Fonts (Orbitron & Rajdhani)

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - This will make it available at `https://yourusername.github.io`
   - OR use any repository name and enable GitHub Pages in settings

### Step 2: Upload Your Files

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages with GitHub Actions

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Build and deployment** → **Source**, select `GitHub Actions`
5. Click **Save**
6. Push any change to the `main` branch or manually trigger the workflow from the **Actions** tab
7. Your site will be live at `https://yourusername.github.io` in a few minutes!

> **Important**: The repository includes a pre-configured GitHub Actions workflow (`deploy.yml`) that automatically deploys your site. Make sure to select "GitHub Actions" as the source, not "Deploy from a branch".

## 🎨 Customization

### Update Personal Information

1. **Email**: Replace `your.email@example.com` in the contact section
2. **Social Links**: Update the social media links in the contact section
3. **Projects**: Modify the project cards with your actual projects
4. **Skills**: Update skill percentages and categories
5. **About Section**: Edit the about text and technologies

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #00f3ff;      /* Main accent color */
    --secondary-color: #ff00ff;    /* Secondary accent */
    --accent-color: #00ff88;       /* Additional accent */
    --bg-dark: #0a0e27;            /* Background color */
    /* ... */
}
```

### Add Your Photo

Replace the SVG placeholder in the about section with your actual photo:

```html
<div class="image-placeholder">
    <img src="your-photo.jpg" alt="Your Name" />
</div>
```

## 🌐 Using a Custom Domain (.io)

To use your custom `.io` domain:

1. **Purchase a domain** from a registrar (Namecheap, GoDaddy, etc.)

2. **Configure DNS**:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Configure GitHub Pages**:
   - In your repository Settings → Pages
   - Under "Custom domain", enter your domain (e.g., `yourname.io`)
   - Check "Enforce HTTPS"

4. **Add CNAME file** (if using CNAME):
   - Create a file named `CNAME` in your repository root
   - Add your domain name: `yourname.io`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Made with ❤️ for Data Scientists**

