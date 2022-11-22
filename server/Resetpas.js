const nodemailer = require("nodemailer");

//nodemailer syntax
var smtpTransport = nodemailer.createTransport({
  // service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  // ssl:     true,
  secure: false,
  //  requireTLS: true,
  auth: {
    user: "akashash7147@gmail.com",
    pass: "wdynoeqmdktqhlly",
  },
});

//email,name ,code coming from forgetResetPass.js ,code is generated and user is find
const sendMail = async (email, code) => {
  console.log("code", code);

  //email syntax
  const mailOptions = {
    from: `"Verify Your Accout by Token" <mailto:akashash7147@gmail.com>`,
    to: `${email}`,
    subject: "Please Verify your Email account",
    html: `
         <h3 style="font-family: cursive">Hy! <br /> Yoda-Swap wansts to Verify your Email by Token... </h3>
         <h3>${code}</h3>`,
  };

  console.log(mailOptions);

  //email sending function if passed or not
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      return error;
    } else {
      console.log(response);
      return response;
    }
  });
};

module.exports = sendMail;
