# Modern Personal Portfolio Website

A beautiful, responsive personal portfolio website built with React, TailwindCSS, and Framer Motion. Features a modern design with smooth animations, dark mode support, and mobile-first responsive layout.

## ✨ Features

- **Modern Design**: Clean, professional design with soft colors and rounded corners
- **Responsive Layout**: Works perfectly on mobile, tablet, and desktop devices
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Smooth Animations**: Beautiful scroll-triggered animations using Framer Motion
- **Interactive Components**: Hover effects, smooth scrolling, and engaging user interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds

## 🚀 Sections

1. **Hero Section** - Eye-catching introduction with animated text and CTA buttons
2. **About Section** - Personal bio and key features with download CV button
3. **Projects Section** - Showcase of projects with filtering and tech stack display
4. **Experience & Education** - Timeline layout for work history and academic background
5. **Skills Section** - Progress bars and skill categories with visual representation
6. **Contact Section** - Contact form and social media links
7. **Navigation** - Sticky navbar with smooth scrolling and mobile menu
8. **Footer** - Comprehensive footer with quick links and back-to-top functionality

## 🛠️ Technologies Used

- **Frontend**: React 18, JSX
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Development**: Hot Module Replacement, ESLint

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-website
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Start development server
```bash
npm run dev
# or
yarn dev
```

The website will open at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
# or
yarn build
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **Hero Section** (`src/components/Hero.jsx`): Name, tagline, bio, social links
- **About Section** (`src/components/About.jsx`): Personal bio, features
- **Projects Section** (`src/components/Projects.jsx`): Your projects, descriptions, links
- **Experience Section** (`src/components/Experience.jsx`): Work history, education
- **Skills Section** (`src/components/Skills.jsx`): Technical skills and proficiency levels
- **Contact Section** (`src/components/Contact.jsx`): Contact details, social links
- **Footer** (`src/components/Footer.jsx`): Copyright, additional links

### Styling
- **Colors**: Update the color scheme in `tailwind.config.js`
- **Typography**: Modify font sizes and weights in component files
- **Layout**: Adjust spacing and grid layouts using TailwindCSS classes

### Images
- Replace placeholder images with your actual project screenshots
- Add your professional photo in the Hero section
- Update project images in the Projects section

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive grid layouts
- Mobile-friendly navigation menu
- Optimized touch interactions
- Flexible typography scaling
- Adaptive spacing and padding

## 🌙 Dark Mode

Dark mode features:
- Automatic system preference detection
- Manual toggle in navigation
- Persistent preference storage
- Smooth theme transitions
- Optimized color schemes for both themes

## 🚀 Performance Features

- **Code Splitting**: Automatic component-based code splitting
- **Lazy Loading**: Images and components load as needed
- **Optimized Animations**: Hardware-accelerated animations
- **Minimal Bundle**: Tree-shaking and dead code elimination
- **Fast Refresh**: Instant updates during development

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Hero.jsx      # Hero section
│   │   ├── About.jsx     # About section
│   │   ├── Projects.jsx  # Projects showcase
│   │   ├── Experience.jsx # Experience timeline
│   │   ├── Skills.jsx    # Skills display
│   │   ├── Contact.jsx   # Contact form
│   │   ├── Navbar.jsx    # Navigation bar
│   │   └── Footer.jsx    # Footer component
│   ├── context/          # React context
│   │   └── DarkModeContext.jsx # Dark mode state
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect Vite configuration
3. Deploy with zero configuration

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📝 Customization Tips

1. **Content First**: Start by updating all the personal information and content
2. **Images**: Replace placeholder images with high-quality project screenshots
3. **Colors**: Adjust the color scheme to match your personal brand
4. **Projects**: Add your best projects with detailed descriptions and live links
5. **Skills**: Update skill levels based on your actual proficiency
6. **Contact**: Ensure all contact information and social links are correct

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

---

**Happy coding! 🚀**

If you find this portfolio template helpful, please consider giving it a star ⭐
