const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
<<<<<<< HEAD
  return res.json({'message': 'Hello World!'});
=======
  return res.json({'message': 'Hello World 3!'});
>>>>>>> 2616042cd8fc9fad2b5bde5135f060953869e780
});
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
