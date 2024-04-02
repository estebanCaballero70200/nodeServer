// webhooks.js

const express = require('express');
const router = express.Router();

router.post('/webhook/cotizacionesWebhook', (req, res) => {
  const data = req.body;
  console.log('Datos recibidos del webhook:', data);
  res.status(200).send('Datos recibidos exitosamente');
});

module.exports = router;
