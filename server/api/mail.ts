import Joi from 'joi'
import { defineEventHandler, createError, readBody } from 'h3'
import stripHTML from '@/helpers/stripHTML'
import { sendEmail } from '@/transport/smtp'

const schema = Joi.object({
  name: Joi.string().min(2).max(60).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(2).max(80).required(),
  message: Joi.string().min(2).max(200).required(),
})

export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    throw createError({ statusCode: 404, statusMessage: 'Method not allowed' })
  }
  const body = await readBody(event)

  const validated = schema.validate(body)
  if (validated.error) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Validation error',
      message: validated.error.details[0].message,
    })
  }

  const name = stripHTML(body.name)
  const email = stripHTML(body.email)
  const subject = stripHTML(body.subject)
  const message = stripHTML(body.message)

  const mailHTML = `
    Name: ${stripHTML(name)} <br />
    Email: ${stripHTML(email)} <br />
    Subject: ${stripHTML(subject)} <br />
    Message: ${stripHTML(message)} <br />
  `

  await sendEmail(mailHTML)

  return {
    message: 'email succefully sent',
  }
})
