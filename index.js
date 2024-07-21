const express = require('express');
const app = express();
const port = 4000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


app.get('/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'data.json'));
});


app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
