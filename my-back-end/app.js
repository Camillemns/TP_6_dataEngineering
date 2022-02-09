const express = require('express');
const session = require('express-session');
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://127.0.0.1:3001"
};

app.use(cors(corsOptions));
app.set('port', process.env.PORT || 3000);


app.use(session({
  secret : 'secret string',
  resave: false,
  saveUninitialized: false,
  cookie: {}
}))


app.get('/', function(req, res) {
  if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
    req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
  req.session.pageCountByCurrentUserOrAnyNameYouWant++;
  res.send({
    pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
  });
});

module.exports = app;