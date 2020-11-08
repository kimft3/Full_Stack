//hvis vi er IKKE er i production, skal vi køre lokale .env variabler
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express'); //henter express, så det kan bruges
const app = express(); //initialiser express

const indexRouter = require('./routes/index');
const mereRouter = require('./routes/mere');
// her henter vi alle vores templates
app.set('view engine', 'pug'); // fortæller hvilken type vores templates, nemlig pug
app.set('views', __dirname + '/views'); //fortæller hvor vi har vores templates
//middleware
app.use('/', indexRouter);
app.use('/', mereRouter);

const mongoose = require('mongoose');
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log('forbindelse til mongo')
);

//Så er vi online om end lokalt
app.listen(process.env.PORT, () => console.log('Så kører vi'));
