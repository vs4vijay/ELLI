'use strict';

const sgMail = require('@sendgrid/mail');
const logger = require('pino')();

const config = require('../config');

class EmailService {

  constructor() {
    sgMail.setApiKey(config.EMAIL.SENDGRID_API_KEY);
  }

  // Async operation
  sendEmail(recipients, templateType, data = {}) {
    // "data" is optional parameter which might contain dynamic data

    const templateId = config.EMAIL.TEMPLATE_ID;

    const emailOptions = {
      to: recipients,
      from: config.EMAIL.NO_REPLY_EMAIL,
      templateId: templateId,
      dynamic_template_data: this.getTemplateDynamicData(data)
    };

    const promise = sgMail.send(emailOptions);
    promise
      .then(data => {
        logger.info('data', data);
      })
      .catch(error => {
        logger.error(error, 'error');
      });
  }

  getTemplateDynamicData(data) {
    data['sender_name'] = config.EMAIL.SENDER_NAME;
    data['sale_link'] = `${config.EMAIL.APP_URL}?id=${data['id']}`;
    return data;
  }

  buildResponse() {
    return {
      status: 'SENDING'
    };
  }

}

module.exports = {
  EmailService
};
