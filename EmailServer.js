import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import nodemailer from 'nodemailer'

const startServer = () => {
  const app = express()
  const router = express.Router()
  app.use(cors())
  app.use(express.json())
  app.use('/', router)
  app.listen(4000, () => console.log('Server Running'))

  const contactByEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    },
  })

  contactByEmail.verify((error) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Ready to Send')
    }
  })

  router.post("/contact", (req, res) => {
    const {name, email, message} = req.body
    const mail = {
      from: name,
      to: process.env.EMAIL,
      subject: "Contact Via Portfolio",
      html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`, 
      // text: message,
    }
    contactByEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" })
      } else {
        res.json({ status: "Message Sent" })
      }
    })
  })
}

startServer()