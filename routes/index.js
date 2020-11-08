const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    enVariabel: 'sig zarathustra',
  });
});

router.get('/funny', (req, res) => {
  res.render('index', {
    enVariabel: 'sig funny zarathustra',
  });
});

module.exports = router;
