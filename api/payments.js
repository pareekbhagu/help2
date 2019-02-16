var https = require('https');
var express = require('express');
var app = express();

var options = {
  'method': 'GET',
  'hostname': 'www.instantpay.in',
  'path': '/ws/api/transaction?format=xml&token=2e76608a4bdfedf1043859913497ddc1&agentid=2&amount=10&spkey=MSP&account=9868638810&mode=VALIDATE',
  'headers': {
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});
app.get('/',function(req, res){
  res.send('successfull')
})
req.end();