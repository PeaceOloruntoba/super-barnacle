import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 5175

app.use(express.json())

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {}
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
      port: Number(process.env.BREVO_SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    })

    const to = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.FROM_EMAIL || process.env.BREVO_SMTP_USER

    if (!process.env.BREVO_SMTP_USER || !process.env.BREVO_SMTP_PASS || !to || !fromEmail) {
      return res.status(500).json({ error: 'Server email is not configured. Set BREVO_SMTP_USER, BREVO_SMTP_PASS, FROM_EMAIL, CONTACT_TO_EMAIL.' })
    }

    const mail = await transporter.sendMail({
      from: { name: 'Portfolio Contact', address: fromEmail },
      to,
      replyTo: email,
      subject: subject?.trim() ? subject : `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Arial;line-height:1.6">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          <hr/>
          <pre style="white-space:pre-wrap">${message}</pre>
        </div>
      `,
    })

    return res.json({ ok: true, id: mail.messageId })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`[server] running on http://localhost:${PORT}`)
})
