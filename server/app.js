/**
 * Created by vink on 17/04/2015.
 */
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var path = require('path');
var nodemailer = require('nodemailer');

/*
 * Mail service for contact form
 */
var contactTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vink.taek@@gmail.com',
    pass: 'graida18'
  }
});

function sendContactMail(from, subject, content) {
 contactTransporter.sendMail({
    from: from,
    to: 'thomas.catty@profilerh.com',
    subject: "[ProfileRH][contact]" + subject,
    text: content
   });
}


var app = express();

app.use(express.static('dist'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

// Root
app.get('/', function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});


// Receive contact form
app.post('/contact', function(req, res) {
  console.log(req.body);
  console.log("Receive contact form");
  //sendContactMail(req.body['email'], req.body['subject'], req.body['content']);
  res.send("Ok");
});


/*
 * Server
 */
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
