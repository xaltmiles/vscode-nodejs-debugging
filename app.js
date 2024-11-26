const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get("/admin", (req, res) => {
  res.send('admin')
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
