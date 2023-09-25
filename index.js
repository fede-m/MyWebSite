/* Send email  */
// function sendEmail(event){
    
//     var nodemailer = require('nodemailer')
//     require('dotenv').config()
//     /* Authenticate to your email */
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.GMAIL_EMAIL ,
//             password: process.env.GMAIL_PASSWORD
//         }

//     });

//     const emailAddress =document.getElementById('email').value;
//     const sender = document.getElementById('name').value + ' ' + document.getElementById('surname').value;
//     const message = document.getElementById('message').value;

//     var mailOptions = {
//         from: process.env.GMAIL_EMAIL,
//         to: process.env.GMAIL_EMAIL,
//         subject: 'Contact email from website from ${sender}',
//         text: 'You have received the following message from ${sender}. The email address is: ${emailAddress}'+
//         '\n\n ${message}'
//     };
//      transporter.sendMail(mailOptions, function(error,info){
//         if(error){
//             console.log(error);
//         } else{
//             console.log('Email sent: ' + info.response);
//         }
//      });
    
    
// }

function executePaperPlaneAnimation(){
    /*Start paper plane animation*/
    const ppIcon = document.querySelector('.fa-paper-plane-o');
    ppIcon.classList.add('paper-plane-animated');
    
    /*Stop paper plane animation*/
    setTimeout(() =>{
        ppIcon.classList.remove('paper-plane-animated')
    },2000)
    // sendEmail();

}