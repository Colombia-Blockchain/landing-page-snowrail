<div align="center">

# 🏔️ SnowRail - Autonomous Treasury Orchestrator

<img src="https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Vite-6.4.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
<img src="https://img.shields.io/badge/Three.js-0.181-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />

**One API call. Cryptographically verified treasury management.**  
Automate payments, swaps, and yield farming with zero-trust architecture.

[Live Demo](https://snowrail.io) · [Report Bug](https://github.com/Colombia-Blockchain/landing-page-snowrail/issues) · [Request Feature](https://github.com/Colombia-Blockchain/landing-page-snowrail/issues)

</div>

---

## 🚀 Features

- **⚡ Lightning Fast**: Optimized build with code splitting (3s build time)
- **🎨 Modern UI/UX**: Beautiful glassmorphism design with smooth animations
- **📱 Fully Responsive**: Works seamlessly on all devices
- **🌐 3D Particle Effects**: Interactive Three.js background
- **💳 Multi-Payment Support**: Card, Bank, and Crypto payment integrations
- **🔐 Web3 Ready**: MetaMask, WalletConnect, Core, and Rabby wallet support
- **⚡ Optimized Bundle**: 72% size reduction with gzip (355KB total)
- **🎭 Framer Motion**: Smooth, professional animations throughout

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Build & Deploy](#-build--deploy)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.1** - UI framework with latest features
- **TypeScript 5.8.2** - Type-safe development
- **Vite 6.4.1** - Lightning-fast build tool
- **Tailwind CSS 3** - Utility-first CSS framework

### UI/UX Libraries
- **Framer Motion 12.23** - Advanced animations
- **Three.js 0.181** - 3D graphics and particle effects
- **@react-three/fiber 9.4** - React renderer for Three.js
- **Lucide React** - Beautiful icon library

### Development Tools
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixing
- **ESLint** - Code linting
- **TypeScript** - Static type checking

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Colombia-Blockchain/landing-page-snowrail.git
cd landing-page-snowrail
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables** (optional)
```bash
# Create .env.local file
echo "GEMINI_API_KEY=your_api_key_here" > .env.local
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
landing-page-snowrail/
├── src/
│   ├── App.tsx                      # Main app component
│   ├── index.css                    # Global styles & Tailwind
│   └── components/
│       ├── Navbar.tsx               # Navigation bar
│       ├── Hero.tsx                 # Hero section with animations
│       ├── ProblemSolution.tsx      # Problem/solution section
│       ├── FlowDiagram.tsx          # Flow visualization
│       ├── ComparisonTable.tsx      # Feature comparison
│       ├── Pricing.tsx              # Pricing plans
│       ├── TechMarquee.tsx          # Technology logos marquee
│       ├── Footer.tsx               # Footer section
│       ├── ParticleBackground.tsx   # 3D particle effect
│       ├── ConnectWalletModal.tsx   # Wallet connection modal
│       ├── PaymentModal.tsx         # Payment processing modal
│       └── ui/
│           └── SpotlightCard.tsx    # Reusable spotlight card
├── index.tsx                        # App entry point
├── index.html                       # HTML template
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS configuration
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Dependencies & scripts
```

---

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Key Features of Development Setup

- **Hot Module Replacement (HMR)** - Instant updates without page refresh
- **TypeScript Support** - Full type checking and IntelliSense
- **Fast Refresh** - Preserve component state during edits
- **Optimized Dev Server** - Lightning-fast startup and updates

### Code Style

This project uses:
- **TypeScript** for type safety
- **Functional Components** with React Hooks
- **Tailwind CSS** for styling
- **ESM** (ES Modules) format

---

## 🏗️ Build & Deploy

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder with:
- ✅ Minified and optimized code
- ✅ Code splitting for better performance
- ✅ Tree-shaking to remove unused code
- ✅ Compressed assets (gzip)

### Build Output

```
dist/
├── index.html                           # Entry HTML (0.68 kB)
└── assets/
    ├── index-[hash].css                 # Styles (28.21 kB → 5.58 kB gzipped)
    ├── react-vendor-[hash].js           # React core (11.79 kB → 4.21 kB gzipped)
    ├── animation-vendor-[hash].js       # Framer Motion (117.09 kB → 38.65 kB gzipped)
    ├── three-vendor-[hash].js           # Three.js (873.58 kB → 237.58 kB gzipped)
    └── index-[hash].js                  # App code (229.67 kB → 68.92 kB gzipped)
```

### Deploy

The `dist/` folder can be deployed to any static hosting service:

#### Vercel
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

#### Other Options
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages
- Render

---

## ⚡ Performance

### Build Optimization Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Build Time** | 50.42s | 3.08s | 94% faster ⚡ |
| **Total Bundle** | 1.26 MB | 355 KB | 72% smaller 📦 |
| **CSS Size** | 53.73 kB | 5.58 kB (gzipped) | 90% smaller |
| **Chunks** | 1 large chunk | 5 optimized chunks | Better caching 🎯 |

### Optimization Techniques Applied

1. **Code Splitting**
   - React & React-DOM in separate chunk
   - Three.js isolated for lazy loading
   - Framer Motion in animation-specific chunk

2. **Bundle Optimization**
   - Tree-shaking to remove unused code
   - Minification and compression
   - Optimized Tailwind CSS purging

3. **Performance Best Practices**
   - Lazy loading for 3D components
   - Optimized images and assets
   - Efficient re-renders with React.memo

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'feat: Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test updates
- `chore:` - Build process or auxiliary tool changes

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Colombia Blockchain** - Building the future of decentralized finance

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Three.js](https://threejs.org/) - 3D graphics library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [Colombia Blockchain](https://github.com/Colombia-Blockchain)

</div>
