import nodemailer, { TransportOptions } from 'nodemailer'

const isDev = process.env.NODE_ENV !== 'production'

export const getTransport = () => {
  if (!process.env.SMTP_HOST) {
    throw new Error('SMTP_HOST is empty')
  }
  if (!process.env.SMTP_PORT) {
    throw new Error('SMTP_PORT is empty')
  }
  if (!process.env.SMTP_USER) {
    throw new Error('SMTP_USER is empty')
  }
  if (!process.env.SMTP_PASS) {
    throw new Error('SMTP_PASS is empty')
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    secure: isDev ? false : true,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: 'SSLv3',
    },
    debug: true,
  })

  return transport
}

export const sendEmail = async (html: string) => {
  try {
    const transporter = getTransport()
    await transporter.sendMail({
      from: `"Integritee" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: 'Integritee Form',
      html: html,
    })
    return {
      message: 'Message successfully sent',
    }
  } catch (error) {
    console.error(error)
    throw new Error('Message cant be send')
  }
}
