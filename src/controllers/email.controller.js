'use strict';

const express = require('express');
const logger = require('pino')();

const { EmailService } = require('../services');
const config = require('../config');

const emailRouter = express.Router();
const emailService = new EmailService();

emailRouter.post('/mails', (req, res) => {
  logger.info('Sending email');

  const {
    metadata: { name }
  } = req.body;

  if (name) {
    const recipients = config.EMAILS;

    emailService.sendEmail(recipients, { subject: name, body: name });

    res.json(emailService.buildResponse());
  } else {
    res.status(400).json({
      success: false,
      error: 'Fields missing'
    });
  }
});

module.exports = {
  emailRouter
};
