const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = {
  from: {
    name: 'WEDESI',
    address: process.env.USER
  },
  to: "aggarwalkrishna199@gmail.com", // List of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // Plain text body
  html: "<b>Hello world?</b>", // HTML body
  attachments: [
    {
      filename: 'test.pdf',
      path: path.join(__dirname, 'test.pdf'),
      contentType: 'application/pdf' // Corrected MIME type for PDF
    },
    {
      filename: 'sample.jpg',
      path: path.join(__dirname, 'sample.jpg'),
      contentType: 'image/jpg'
    }
  ]
}

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Call the sendMail function
sendMail(transporter, mailOptions);