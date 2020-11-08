const express = require('express');
const router = express.Router();

router.get('/mere', (req, res) => {
  res.render('mere', {
    enVariabel: 'sig zarathustra',
  });
});

router.get('/mere/2', (req, res) => {
  res.render('mere', {
    enVariabel: 'sig zarathustra igen3',
  });
});

module.exports = router;
