  
  const express = require('express');
  const bodyParser = require('body-parser');
  const nodemailer = require('nodemailer');
  const cors = require('cors');
  
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  // Middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  
  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: 'faizanwarissheikhalpha2626@gmail.com', // Your email
      pass: 'nipz zgkg hyok bttk' // Your email password
    }
  });
  
  // Route to handle form submission
  app.post('/send', (req, res) => {
    const { name, email, phone, message } = req.body;
  
    const mailOptions = {
      from: 'faizanwarissheikhalpha2626@gmail.com',
      to: 'faizanwarissheikhalpha2626@gmail.com', // Your email
      subject: 'New Hire Me Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });