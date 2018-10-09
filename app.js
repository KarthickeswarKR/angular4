const express = require('express');
const path = require('path');
const webpush = require('web-push');
const cors = require('cors');
const bodyParser = require('body-parser');
const fakeDatabase = [];

const app = express();
const publicKey="BBWLVU743rUhRSmnugLLWm_q6_C5u-i-ZTylbe6WSmRMUVLbcs0HwFZ2wji-2WuaTy2IhAJCEi-NSBSf2MfIZYg";
const privateKey="-05tz0vv427P90FgwdxX7Mw1-QZyZjOt6yiLXtHAhXA"

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(cors());
app.use(bodyParser.json());

webpush.setVapidDetails('mailto:karthickeswar@yahoo.com', publicKey, privateKey);
app.use(cors());
app.use(bodyParser.json());
app.post('/subscription', (req, res) => {
  const subscription = req.body;
  fakeDatabase.push(subscription);
});

app.post('/sendNotification', (req, res) => {
  const notificationPayload = {
    notification: {
      title: 'New Notification',
      body: 'This is the body of the notification'
    }
  };

  const promises = [];
  fakeDatabase.forEach(subscription => {
    promises.push(webpush.sendNotification(subscription, JSON.stringify(notificationPayload)));
  });
  Promise.all(promises).then(() => res.sendStatus(200));
});
app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 80);
