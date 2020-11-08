const express = require('express');
const router = express.Router();
let Mere = require('../models/Mere');

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
  let mere = new Mere();
  mere.story = req.body.Joke;
  mere.punchLine = req.body.Punchline;
  mere.save();
});

module.exports = router;
