// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.loadFromPath('./credentials.json');
AWS.config.update({region: 'us-east-1'});


// Create sendEmail params 
var params = {
  Destination: { /* required */
    ToAddresses: [
      'hodrigohamalho@gmail.com',
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: "<h1> Oi indhio :)</h1> <p> Segura esse email ai! </p>"
      },
      Text: {
       Charset: "UTF-8",
       Data: "Oi indhio, segura esse email ai!"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Amazon mail funfando!'
     }
    },
  Source: 'hodrigohamalho@gmail.com', /* required */
  ReplyToAddresses: [
      'hodrigohamalho@gmail.com',
    /* more items */
  ],
};       

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
    function(data) {
        console.log(data.MessageId);
}).catch(
    function(err) {
        console.error(err, err.stack);
});


