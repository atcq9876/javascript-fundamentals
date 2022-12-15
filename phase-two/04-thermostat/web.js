const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat');

const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  res.send(`Current temperature = ${thermostat.getTemperature()}`)
});

app.post('/up', (req, res) => {
  res.send(thermostat.up())
});

app.post('/down', (req, res) => {
  res.send(thermostat.down())
});

app.delete('/temperature', (req, res) => {
  res.send(thermostat.reset())
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);