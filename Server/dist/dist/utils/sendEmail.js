"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(to, html) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
    // console.log("testAccount", testAccount);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "xfd44cdtoocwu4m5@ethereal.email",
            pass: "YRNv73fEqgxA4qmUQR", // generated ethereal password
        },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Aryan Vaid 👻" <aryan@example.com>',
        to: to,
        subject: "Change password",
        html: html, // plain text body
    });
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map