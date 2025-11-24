# CHA Prototype - Deployment Guide

## 🚀 Overview

The CHA prototype is deployed on Railway as a standalone service with its own subdomain.

## 🌐 Deployment URLs

- **Production**: https://cha-prototype-production.up.railway.app/
- **Custom Domain**: https://prototype.mycha.health/ (configured via DNS)

## 📦 Railway Configuration

### Service Details
- **Project**: cha-prototype
- **Service**: cha-prototype
- **Region**: us-west1 (or auto)
- **Repository**: https://github.com/mattev/cha-prototype

### Build Configuration (`nixpacks.toml`)

```toml
[phases.setup]
nixPkgs = ['nodejs_20']

[phases.install]
cmds = ['npm ci']

[phases.build]
cmds = ['npm run build']

[start]
cmd = 'npm start'
```

### Build Process
1. **Install**: `npm ci` - Clean install of dependencies
2. **Build**: `npm run build` - Vite builds React app to `dist/`
3. **Start**: `npm start` - Runs `node server.js` (Express server)

## 🔧 Server Configuration

The production server (`server.js`) is an Express app that:
- Serves static files from the `dist/` directory
- Handles client-side routing by falling back to `index.html`
- Runs on the `PORT` environment variable (Railway default)

```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ CHA Prototype server running on port ${PORT}`);
});
```

## 🌐 Custom Domain Setup

### In Railway
1. Go to the `cha-prototype` service settings
2. Click on "Domains" section
3. Click "Custom Domain"
4. Enter: `prototype.mycha.health`
5. Railway will provide a CNAME target

### In Squarespace DNS
1. Go to your Squarespace domain settings
2. Add a new CNAME record:
   - **Host**: `prototype`
   - **Points to**: `cha-prototype-production.up.railway.app` (or Railway's provided domain)
   - **TTL**: Automatic (or 3600)
3. Save changes
4. Wait 5-15 minutes for DNS propagation

### Verify
```bash
# Check DNS propagation
dig prototype.mycha.health

# Test the custom domain
curl -I https://prototype.mycha.health
```

## 🔄 Deployment Process

### Automatic Deployment
Railway automatically deploys when code is pushed to the `main` branch on GitHub.

### Manual Deployment via CLI

1. **Install Railway CLI** (if not already installed):
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**:
   ```bash
   railway login
   ```

3. **Link to project** (first time only):
   ```bash
   cd /path/to/cha-prototype
   railway link
   # Select: cha-prototype project
   ```

4. **Deploy**:
   ```bash
   railway up --service cha-prototype --detach
   ```

5. **View logs**:
   ```bash
   railway logs
   ```

### Force Rebuild
If Railway doesn't automatically trigger a rebuild after pushing changes:

```bash
# Make an empty commit
git commit --allow-empty -m "Force Railway rebuild"
git push origin main

# Or deploy via CLI
railway up --service cha-prototype --detach
```

## 🔍 Monitoring

### View Logs
```bash
# Via CLI
railway logs

# Via Dashboard
# https://railway.app → cha-prototype → Deployments → View logs
```

### Health Check
```bash
# Check if service is running
curl https://cha-prototype-production.up.railway.app/

# Should return HTML with React app
```

## 🐛 Troubleshooting

### Blank Page / MIME Type Errors

**Symptoms**: Blank page with console errors like:
```
Failed to load module script: Expected a JavaScript module script 
but the server responded with a MIME type of "text/html"
```

**Causes**:
1. Vite `base` path misconfigured
2. React Router `basename` misconfigured  
3. Express server not serving static files correctly
4. Old build cached

**Solutions**:
1. **Check `vite.config.ts`**:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/', // Should be '/' for root-level serving
   })
   ```

2. **Check `src/AppRouter.tsx`**:
   ```typescript
   <BrowserRouter> {/* No basename prop */}
     <Routes>
       <Route path="/" element={<App />} />
     </Routes>
   </BrowserRouter>
   ```

3. **Check `server.js`**:
   ```javascript
   // Must serve static files before fallback
   app.use(express.static(path.join(__dirname, 'dist')));
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
   });
   ```

4. **Force rebuild**:
   ```bash
   rm -rf dist node_modules
   npm ci
   npm run build
   git add -A
   git commit -m "Rebuild with correct configuration"
   git push origin main
   ```

### Railway Deployment Not Triggering

**Problem**: Pushing to GitHub doesn't trigger Railway deployment.

**Solutions**:
1. **Check GitHub integration**:
   - Go to Railway project settings
   - Verify GitHub repo is connected
   - Check if webhook is configured

2. **Force deploy via CLI**:
   ```bash
   railway up --service cha-prototype --detach
   ```

3. **Make empty commit**:
   ```bash
   git commit --allow-empty -m "Trigger deployment"
   git push origin main
   ```

### Port Binding Issues

**Problem**: App crashes with port binding errors.

**Solution**: Ensure server uses Railway's `PORT` environment variable:
```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT);
```

## 📊 Deployment Checklist

Before deploying:
- [ ] Update version in `package.json`
- [ ] Test locally with `npm run build && npm start`
- [ ] Check `vite.config.ts` has correct `base` path
- [ ] Verify `server.js` serves static files correctly
- [ ] Commit and push all changes
- [ ] Monitor Railway deployment logs
- [ ] Test production URL after deployment
- [ ] Test custom domain (if configured)
- [ ] Verify all routes work (client-side routing)
- [ ] Check browser console for errors

## 🔗 Related Documentation

- [Railway Docs](https://docs.railway.app)
- [Vite Production Build](https://vitejs.dev/guide/build.html)
- [Express Static Files](https://expressjs.com/en/starter/static-files.html)
- [DNS Configuration](https://support.squarespace.com/hc/en-us/articles/360002101888)

## 📧 Support

If you encounter issues:
1. Check Railway deployment logs
2. Review browser console for errors
3. Test locally with production build
4. Contact: mevered@gmail.com

---

*Last Updated: November 24, 2025*

