const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// ✅ ADD THIS ROUTE
app.get('/', (req, res) => {
  res.send('App is running 🚀');
});

// ✅ KEEP THIS
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
