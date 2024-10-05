const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          secure: false,
          auth: {
               user: process.env.EMAIL_USER_LOGIN,
               pass: process.env.EMAIL_USER_PASS,
          }
     },
     {
          from:`Mailer Test <${process.env.EMAIL_USER_LOGIN}>`,

     }
)

const mailer = async (message) => {
     
     try {
          const info = await transporter.sendMail(message)
          console.log('Email sent : ', info.messageId )
          
     } catch (error) {
          throw error
     }
}

module.exports = mailer;
