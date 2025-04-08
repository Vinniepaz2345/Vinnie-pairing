const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const PORT = process.env.PORT || 8000;
require('events').EventEmitter.defaultMaxListeners = 500;

const code = require('./pair');

// Middleware to handle POST body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pair.html'));
});

// API route
app.use('/code', code);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
