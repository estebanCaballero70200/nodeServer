// apiRest.js

const express = require('express');
const router = express.Router();

router.get('/example', (req, res) => {
  res.send('Ejemplo de endpoint API');
});

module.exports = router;
