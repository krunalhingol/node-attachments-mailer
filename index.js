const mailer = require('nodemailer');
require('dotenv').config();

console.log('test', process.env.HOST);

const mail = mailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const mailOptions = {
  from: 'test@yopmail.com',
  to: 'test@gmail.com',
  subject: 'Sending Email via Node.js',
  text: 'That was easy!',
  attachments: [
    {
      filename: 'test.pdf',
      path: './test.pdf',
    },
  ],
};

mail.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
