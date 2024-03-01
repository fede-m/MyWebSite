const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
    }
});

let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'Message from Website',
    text: 'Hello, I have a question about your website.'
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('Error occurs', err);
    } else {
        console.log('Email sent successfully');
    }
});


