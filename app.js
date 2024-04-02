// app.js

const express = require('express');
const bodyParser = require('body-parser');
const webhookRoutes = require('./webhooks/webhookRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Usa las rutas de los webhooks
app.use('/webhooks', webhookRoutes);

// Usa las rutas de la API
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
