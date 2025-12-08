import Joi from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/joi/lib/index.js';
import { defineEventHandler, createError, readBody } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/h3/dist/index.mjs';
import nodemailer from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/nodemailer/lib/nodemailer.js';

const stripHTML = (str) => {
  return str.replace(/(<([^>]+)>)/gi, "");
};

const getTransport = () => {
  if (!process.env.SMTP_HOST) {
    throw new Error("SMTP_HOST is empty");
  }
  if (!process.env.SMTP_PORT) {
    throw new Error("SMTP_PORT is empty");
  }
  if (!process.env.SMTP_USER) {
    throw new Error("SMTP_USER is empty");
  }
  if (!process.env.SMTP_PASS) {
    throw new Error("SMTP_PASS is empty");
  }
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    secure: false,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3"
    },
    debug: true
  });
  return transport;
};
const sendEmail = async (html) => {
  try {
    const transporter = getTransport();
    await transporter.sendMail({
      from: `"Integritee" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: "Integritee Form",
      html
    });
    return {
      message: "Message successfully sent"
    };
  } catch (error) {
    console.error(error);
    throw new Error("Message cant be send");
  }
};

const schema = Joi.object({
  name: Joi.string().min(2).max(60).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(2).max(80).required(),
  message: Joi.string().min(2).max(200).required()
});
const mail = defineEventHandler(async (event) => {
  if (event.req.method !== "POST") {
    throw createError({ statusCode: 404, statusMessage: "Method not allowed" });
  }
  const body = await readBody(event);
  const validated = schema.validate(body);
  if (validated.error) {
    throw createError({
      statusCode: 403,
      statusMessage: "Validation error",
      message: validated.error.details[0].message
    });
  }
  const name = stripHTML(body.name);
  const email = stripHTML(body.email);
  const subject = stripHTML(body.subject);
  const message = stripHTML(body.message);
  const mailHTML = `
    Name: ${stripHTML(name)} <br />
    Email: ${stripHTML(email)} <br />
    Subject: ${stripHTML(subject)} <br />
    Message: ${stripHTML(message)} <br />
  `;
  await sendEmail(mailHTML);
  return {
    message: "email succefully sent"
  };
});

export { mail as default };
//# sourceMappingURL=mail.mjs.map
