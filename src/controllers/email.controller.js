'use strict';

const express = require('express');

const { EmailService } = require('../services');

const emailRouter = express.Router();
const emailService = new EmailService();

emailRouter.post('/mails', (req, res) => {
  console.log('Sending email');

  const {
    email,
    metadata: { name, sale_id }
  } = req.body;

  if (email && name && sale_id) {
    const recipients = [email];
    const templateType = 'SALE_SUMMARY';
    const data = {
      name: name,
      sale_id: sale_id
    };
    emailService.sendEmail(recipients, templateType, data);

    res.json(emailService.buildResponse());
  } else {
    res.status(400).json({
      success: false,
      error: 'Fields missing: email, name or sale_id'
    });
  }
});

module.exports = {
  emailRouter
};
