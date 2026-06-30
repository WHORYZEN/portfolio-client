import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import nodemailer from "nodemailer"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5050

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
)

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Portfolio backend is running")
})

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.RECEIVER_EMAIL,

      subject: `Portfolio enquiry from ${name}`,

      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>New Portfolio Enquiry</h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>
        </div>
      `,
    })

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      success: false,
      message: "Unable to send message",
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})