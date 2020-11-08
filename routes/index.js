const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    enVariabel: 'sig zarathustra',
  });
});

router.get('/funny', (req, res) => {
  res.render('index', {
    enVariabel: 'sig so so funny zarathustra',
  });
});

router.post('/', (req, res) => {
  console.log(req.body.Joke);
});

module.exports = router;
