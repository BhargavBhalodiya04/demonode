const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// ❗ FIX HERE
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
