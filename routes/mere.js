const express = require('express');
const router = express.Router();

router.get('/mere', (req, res) => {
  res.render('mere', {
    enVariabel: 'sig zarathustra',
  });
});

module.exports = router;
