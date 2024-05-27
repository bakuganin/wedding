const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    type: 'OAuth2',
    user: 'your-email@gmail.com',
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret',
    refreshToken: 'your-refresh-token',
    accessToken: 'your-access-token'
  }
});

transporter.sendMail({
  from: 'your-email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Test email',
  text: 'Hello from Nodemailer!'
}, (err, info) => {
  if (err) {
    return console.log(err);
  }
  console.log('Email sent: ' + info.response);
});