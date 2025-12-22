# Portfolio Website

A modern, stylish, and fully responsive portfolio website built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## Features

- **Modern Design** - Clean, dark-themed UI with gradient accents
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion
- **Easy Configuration** - Single config file for personalization
- **Interactive Games** - Memory Match, Reaction Time, Click Speed
- **WhatsApp Integration** - Direct messaging via WhatsApp API
- **Download CV** - Downloadable resume functionality

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated intro with profile photo and rotating tech badges |
| **About** | Stats, bio, and call-to-action buttons |
| **Skills** | Categorized skills with progress bars |
| **Projects** | Filterable project showcase |
| **Blogs** | Blog post cards with categories |
| **Games** | 3 interactive mini-games |
| **Contact** | Contact form and info cards |

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd windsurf-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## Configuration

Edit `src/config/portfolio.ts` to personalize your portfolio:

```typescript
export const portfolioConfig = {
  // Personal Info
  name: 'Your Name',
  title: 'Your Title',
  position: 'Your Position',
  company: 'Your Company',
  
  // Profile Photo
  profilePhoto: '/your-photo.jpg', // or import from assets
  
  // Social Links
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'mailto:your@email.com',
  },
  
  // Contact Info
  contact: {
    email: 'your@email.com',
    phone: '+1 (555) 123-4567',
    location: 'Your City, Country',
  },
  
  // WhatsApp
  whatsapp: {
    number: '+1234567890',
    defaultMessage: 'Hi! I found your portfolio...',
  },
};
```

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # React components
│   ├── About.tsx
│   ├── Blogs.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Games.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── WhatsAppButton.tsx
├── config/
│   └── portfolio.ts # Configuration file
├── context/         # React contexts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Customization

### Adding Your Photo

1. Place your photo in `src/assets/` (e.g., `my-photo.jpg`)
2. Update `src/config/portfolio.ts`:

```typescript
import profilePhoto from '../assets/my-photo.jpg';

export const portfolioConfig = {
  profilePhoto: profilePhoto,
  // ...
};
```

### Adding Your Resume

1. Place your PDF in `public/` folder
2. Update config:

```typescript
resumeFile: '/Your_Resume.pdf',
```

### Updating Projects

Edit the `projects` array in `src/components/Projects.tsx`

### Updating Blog Posts

Edit the `blogs` array in `src/components/Blogs.tsx`

## Build

### Development Build

```bash
# Start development server with hot reload
npm run dev

# Server runs at http://localhost:5173
```

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

### Build Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

### Option 1: Netlify (Recommended)

**Via Netlify CLI:**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

**Via Netlify Dashboard:**

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub/GitLab repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

**Environment Variables (if needed):**
- Add in Netlify Dashboard → Site settings → Environment variables

---

### Option 2: Vercel

**Via Vercel CLI:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

**Via Vercel Dashboard:**

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New" → "Project"
3. Import your repository
4. Vercel auto-detects Vite - just click "Deploy"

---

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Update vite.config.ts with base path:
# base: '/your-repo-name/'

# Deploy
npm run deploy
```

---

### Option 4: Self-Hosted (Nginx)

```bash
# Build the project
npm run build

# Copy dist folder to your server
scp -r dist/* user@your-server:/var/www/portfolio

# Nginx configuration
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

### Option 5: Docker

Create a `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify responsive design on mobile
- [ ] Check WhatsApp button functionality
- [ ] Test Download CV button
- [ ] Verify all images load correctly
- [ ] Test contact form (if backend configured)
- [ ] Check mini-games work properly
- [ ] Verify meta tags for SEO
- [ ] Test page load speed

## License

MIT License - feel free to use this for your own portfolio!

## Author

Built with Cascade AI
