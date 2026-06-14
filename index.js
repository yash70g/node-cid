const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  return res.json({'message': 'Hello World 6!'});
});
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});