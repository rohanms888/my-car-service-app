const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001; // You can choose any port you prefer

// Serve your static frontend assets (build files, etc.)
app.use(express.static(path.join(__dirname, 'build')));

// Define your proxy route
app.use(
  '/api', // This is the route where you want to proxy requests
  createProxyMiddleware({
    target: 'https://us-central1-foyer-work.cloudfunctions.net', // Your API server's URL
    changeOrigin: true, // This is crucial for CORS handling
  })
);

// For any other routes, serve your frontend application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
