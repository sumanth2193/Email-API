let nodemailer = require('nodemailer');

const mailOptions = {
    from: 'abc@gmail.com',
    to: 'Hello@123',
    subject: 'Email from Node-App: A Test Message!',
    text: 'Some content to send'
};



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abc@gmail.com',
      pass: 'Hello@123'
    }
});


transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});