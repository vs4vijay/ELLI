'use strict';

const sgMail = require('@sendgrid/mail');

const { EMAIL_CONFIG } = require('../config');

class EmailService {
  constructor() {
    sgMail.setApiKey(EMAIL_CONFIG.SENDGRID_API_KEY);
  }

  sendEmail(recipients, templateType, data = {}) {
    // "data" is optional parameter which might contain dynamic data

    const templateId = EMAIL_CONFIG.TEMPLATES[templateType];

    const emailOptions = {
      to: recipients,
      from: EMAIL_CONFIG.NO_REPLY_EMAIL,
      templateId: templateId,
      dynamic_template_data: this.getTemplateDynamicData(data)
    };

    const promise = sgMail.send(emailOptions);
    promise
      .then(data => {
        console.log('data', data);
      })
      .catch(error => {
        console.error('error', error);
      });
  }

  getTemplateDynamicData(data) {
    data['sender_name'] = EMAIL_CONFIG.SENDER_NAME;
    data['sale_link'] = `${EMAIL_CONFIG.APP_URL}?sale_id=${data['sale_id']}`;
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
