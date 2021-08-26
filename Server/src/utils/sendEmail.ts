"use strict";
import nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(to: string, html: string) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();
  // console.log("testAccount", testAccount);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "xfd44cdtoocwu4m5@ethereal.email", // generated ethereal user
      pass: "YRNv73fEqgxA4qmUQR", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Aryan Vaid 👻" <aryan@example.com>', // sender address
    to: to, // list of receivers
    subject: "Change password", // Subject line
    html: html, // plain text body
  });
}
