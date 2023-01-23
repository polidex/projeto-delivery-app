const express = require('express');
const cors = require('cors')

// const corsOptions ={
//   origin:'http://localhost:3000', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
const app = express();

app.use(cors())
app.use(express.json());

const routes = require('../routes/routes')

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(routes);

module.exports = app;
