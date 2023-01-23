const express = require('express');

const app = express();
const routes = require('../routes/routes')

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(express.json());
app.use(routes);

module.exports = app;
