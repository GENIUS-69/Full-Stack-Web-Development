import { text } from 'express'
import Mailgen from 'mailgen'
import nodemailer from 'nodemailer'

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagelink.com"
    }
  })

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
  const emailHtml = mailGenerator.generate(options.mailgenContent)

  const trasporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS
    }
  })

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml
  }

  try {
    await trasporter.sendMail(mail)
  } catch (error) {
    console.error("Email service failed siliently")
    console.error("Error:",error)
  }
}

const emailVerificationMailgenContent = (usename, verificationUrl) => {
  return {
    body: {
      name: usename,
      intro: "Welcome to our app!",
      action: {
        instructions: "To verify your Email! Please Click Button",
        button: {
          color: "#22BC66",
          text: "Verify Your Mail",
          link: verificationUrl
        }
      },
      outro: "Need Help, or have Question? Just reply to this email"
    }
  }
}

const forgotPasswordMailgenContent = (usename, passwordResetUrl) => {
  return {
    body: {
      name: usename,
      intro: "We got a request to reset the Password.",
      action: {
        instructions: "To Reset your Password! Please Click Button",
        button: {
          color: "#22bc66ff",
          text: "Reset Password",
          link: passwordResetUrl
        }
      },
      outro: "Need Help, or have Question? Just reply to this email"
    }
  }
}

export { emailVerificationMailgenContent, forgotPasswordMailgenContent,sendEmail }