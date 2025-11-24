# CHA Prototype

Interactive prototype of the CHA (Comprehensive Health Assistant) application - your family's AI-powered Health CFO.

## 🚀 Live Demo

- **Production URL**: https://cha-prototype-production.up.railway.app/
- **Custom Domain**: https://prototype.mycha.health/ (once DNS configured)

## 📖 About

This prototype showcases the core functionality and user experience of CHA, including:

- **Dashboard** - Family health overview with key metrics
- **Bills & Claims** - Medical bill tracking and error detection
- **Family Management** - Coordinate care for multiple family members
- **Calendar** - Healthcare appointments and reminders
- **Pharmacy** - Prescription tracking and refills
- **Health Records** - Centralized medical records
- **Settings** - Account and preference management

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Deployment**: Railway
- **Server**: Express.js (production)

## 🏃 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

5. **Start production server** (Express):
   ```bash
   npm start
   ```

## 📦 Project Structure

```
cha-prototype/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Layout components (Header, Sidebar, etc.)
│   │   └── ui/          # UI primitives
│   ├── pages/           # Page components (Dashboard, Bills, etc.)
│   ├── App.tsx          # Main app component with routes
│   ├── AppRouter.tsx    # Router configuration
│   └── index.tsx        # App entry point
├── public/              # Static assets
├── dist/                # Production build (generated)
├── server.js            # Express server for production
├── vite.config.ts       # Vite configuration
├── nixpacks.toml        # Railway deployment config
└── package.json         # Dependencies and scripts
```

## 🚂 Deployment

This prototype is deployed to Railway with automatic deployments from the `main` branch.

### Deployment Configuration

**Build Process** (defined in `nixpacks.toml`):
1. Install dependencies: `npm ci`
2. Build React app: `npm run build`
3. Start Express server: `npm start`

**Server Configuration** (`server.js`):
- Serves static files from `dist/` directory
- Handles client-side routing by falling back to `index.html`
- Runs on port specified by `PORT` environment variable (Railway default)

### Manual Deployment

```bash
# Trigger a new Railway deployment
railway up --service cha-prototype --detach
```

## 🔗 Integration

The prototype is linked from the CHA marketing website at:
- Marketing site: https://mycha.health/marketing
- "See Prototype" button in hero section

## 🎨 Design Source

This prototype was generated using [Magic Patterns](https://magicpatterns.com):
- [Original Design](https://www.magicpatterns.com/c/imntz3boiyxqdjhkrcufvy)

## 📋 Development Notes

### React 18 Changes
- Uses `createRoot` API (not legacy `render`)
- Wrapped in `StrictMode` for better development warnings

### Routing Configuration
- Single `BrowserRouter` in `AppRouter.tsx`
- Nested routes in `App.tsx`
- Configured for root-level serving (not subdirectory)

### Production Serving
- Custom Express server handles static file serving
- Ensures proper MIME types for JS/CSS assets
- Falls back to `index.html` for all HTML routes (enables client-side routing)

## 🔄 Related Repositories

- **[CHA](https://github.com/mattev/CHA)** - Product planning and documentation
- **[cha-survey](https://github.com/mattev/cha-survey)** - WTP survey system
- **[CHA-Marketing-Website](https://github.com/mattev/CHA-Marketing-Website)** - Marketing site

## 📧 Contact

**Matt Evered**
- Email: mevered@gmail.com
- LinkedIn: https://www.linkedin.com/in/mattevered/

---

**Built with ❤️ for better healthcare experiences**

*Last Updated: November 24, 2025*
