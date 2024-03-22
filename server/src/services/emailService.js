require("dotenv").config(); // Ensure environment variables are loaded
const nodemailer = require("nodemailer");

async function sendEmail(emailOptions) {
  // Create a transporter using Ethereal credentials
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.ETHEREAL_USER, // Ethereal username from environment variable
      pass: process.env.ETHEREAL_PASS, // Ethereal password from environment variable
    },
  });

  // Send email with specified options
  let info = await transporter.sendMail(emailOptions);

  console.log("Message sent: %s", info.messageId);
  // Preview URL is available for viewing the email
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = { sendEmail };
