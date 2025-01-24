const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../Model/user'); 
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../Model/contact'); 

// inscription
router.post('/register', async (req, res) => {
  const { nom, prenom, email, mdp, tel } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already used' });
    }
    const hashedPassword = await bcrypt.hash(mdp, 10); //10 nbr de rounds 

    const newUser = new User({ nom, prenom, email, mdp: hashedPassword, tel });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('Error while registering:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

//connexion
router.post('/login', async (req, res) => {
  const { email, mdp } = req.body;

  if (!email || !mdp) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Incorrect credentials' });
    }

    const isPasswordValid = await bcrypt.compare(mdp, user.mdp);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Incorrect credentials' });
    }
    
    res.json({
      message: 'Connection successful',
      user: {
        id: user._id,
        nom: user.nom,
        prenom: user.prenom,
      },
    });
  } catch (err) {
    console.error('Error while connecting:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

//contact form


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'molkatoubale23@gmail.com',
    pass: 'eraa lmhx ytzq lfud',
  },
});

router.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const contact = new Contact({
    name,
    email,
    subject,
    message,
  });

  try {
    await contact.save();

    const mailOptions = {
      from: 'molkatoubale23@gmail.com',
      to: 'molkatoubale694@gmail.com',
      subject: `FitBloom Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333; border-radius: 10px; max-width: 600px; margin: auto;">
          <h2 style="text-align: center; color: #F72E9D;">FitBloom Contact Form</h2>
          <p><strong style="color:rgb(76, 28, 196);">Subject:</strong> ${subject}</p>
          <p><strong style="color:rgb(76, 28, 196);">Name:</strong> ${name}</p>
          <p><strong style="color:rgb(76, 28, 196);">Email:</strong> ${email}</p>
          <p><strong style="color:rgb(76, 28, 196);">Message:</strong></p>
          <div style="padding: 10px; background-color: #ffffff; border-radius: 5px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);">
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="text-align: center; margin-top: 20px; color: #888;">This email was sent via the FitBloom Contact Form.</p>
        </div>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send({ message: 'Failed to send email', error });
      }
    
      console.log('Email sent: ' + info.response);
      return res.status(200).send({ message: 'Email sent and contact saved successfully' });
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).send('Failed to save contact details');
  }
});

module.exports = router;
