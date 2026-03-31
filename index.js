const express = require('express');
const app = express();

// Use environment port (Coolify injects this)
const PORT = process.env.PORT || 3000;

// Middleware (optional but useful)
app.use(express.json());

// Health check route (important for deployments)
app.get('/', (req, res) => {
  res.status(200).send('App is running 🚀');
});

// Optional: health endpoint (Coolify can use this)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
