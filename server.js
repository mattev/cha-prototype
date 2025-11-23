import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5173;

// Serve static files from the dist directory with /prototype prefix
// This must come BEFORE the catch-all route
app.use('/prototype', express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filepath) => {
    // Ensure correct MIME types
    if (filepath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filepath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Handle client-side routing - serve index.html for HTML requests only
app.get('/prototype', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Health check
app.get('/', (req, res) => {
  res.send('CHA Prototype Server Running');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ CHA Prototype server running on port ${PORT}`);
  console.log(`📦 Serving from /prototype`);
});

