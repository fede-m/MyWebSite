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

const lines = document.querySelectorAll('.line');


function typeWriter(text,i, fnCallback){
    if(i<text.length){
        document.querySelector('.line').innerHTML = text.substring(0,i+1) + '<span aria-hidden="true"></span>';
        setTimeout(function(){
            typeWriter(text,i+1,fnCallback)
        },100);
    } else if(typeof fnCallback == 'function'){
        setTimeout(fnCallback, 700);
    }

}

function getUserInput(){
    const email = user.email;
    const name = user.name;
    const surname = user.surname;
    const message = user.message;
    return {email,name,surname,message};
}

function StartTextAnimation(i){
    if(typeof lines[i] == 'undefined'){
        setTimeout(function(){
            StartTextAnimation(0);
        },20000);
    }
    if(i<lines.length){
        var text = lines[i].getAttribute('data-text');
        typeWriter(text,0,function(){
            StartTextAnimation(i+1);
        });
    }
}

function checkEmail(email){
    if(email == 'jakePeralta@gmail.com'){
        return false;
    }
}


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


// Start the typewriter animation
document.addEventListener("DOMContentLoaded", function() {
    StartTextAnimation(0);
})

// function extend(target, source) {
//     for (let key in source) {
//         if (source.hasOwnProperty(key)) {
//             target[key] = source[key];
//         }
//     }
// }

// let obj = {};
// let user = { name: "Alice", role: "user" };
// let payload = JSON.parse('{"__proto__": {"role": "admin"}}');

// extend(obj, user);
// extend(obj, maliciousPayload);

// console.log(obj.role); // "admin"
// console.log({}.role); // "admin"

const mysql = require('mysql');
const readline = require('readline');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your username: ', (username) => {
  connection.query(`SELECT * FROM users WHERE username = '${username}'`, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });

  rl.close();
});
