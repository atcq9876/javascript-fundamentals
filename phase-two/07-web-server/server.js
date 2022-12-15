const express = require('express');
const app = express();
const port = 3000;

let counter = 1;

app.get('/', (req, res) => {
  res.send('Hello, world!')
});

app.get('/counter', (req, res) => {
  res.send(`Counter = ${counter}`)
});

app.post('/counter', (req, res) => {
  res.send(counter += 1)
});

app.delete('/counter', (req, res) => {
  res.send(counter = 1)
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);