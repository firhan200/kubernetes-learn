const express = require('express');
const app = express();
const port = 3901;

app.get('/', (req, res) => {
  res.send('TEST');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://localhost:${port}`);
});
