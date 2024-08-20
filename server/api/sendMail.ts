import { Resend } from 'resend'
import type { H3Event } from 'h3'
import type { ContactMail } from '~~/types/ContactMail'

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactMail
    const { email, subject, message, phone, fullname } = body
    return await resend.emails.send({
      from: 'Teshane Crawford <crawfordteshane@gmail.com>',
      to: ['crawfordteshane@gmail'],
      subject: 'New message from Teshane Crawford',
      html: `
        <p>A new message as been sent from Teshane Crawford Contact Form</p>
        <p>Here are the details of the message:</p>
        <ul>
          <li>Full Name: ${fullname}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>Subject: ${subject}</li>
          <li>Message: ${message}</li>
        </ul>
        `,
    })
  }
  catch (error) {
    return { error }
  }
})
