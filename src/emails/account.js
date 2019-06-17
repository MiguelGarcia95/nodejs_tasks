const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mgarcia@miguelgarcia.app',
    subject: `Thanks for joining!`,
    text: `Welcome to the app, ${name}. Let me know how you feel about this whole thing.`
  });
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mgarcia@miguelgarcia.app',
    subject: 'Leaving us so soon?',
    text: `The fuck ${name}!? What kind of BS, fake shit is this!? We held you down like the real one's we are only for your skinny bitch ass to dip out on us!? Fuck this, ${name}, gtfo!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}