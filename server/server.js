require("dotenv").config()
const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const { body, validationResult, matchedData } = require("express-validator")
const app = express()
app.use(cors())
app.use(express.json())
const transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
   user: process.env.EMAIL_USER,
   pass: process.env.EMAIL_PASS,
 },
})
app.get("/", (req, res) => {
 res.send("Voicentra Backend Running 🚀")
})
app.post(
 "/contact",
 [
   body("name")
     .trim()
     .notEmpty()
     .withMessage("Name is required.")
     .isLength({ min: 2, max: 100 })
     .withMessage("Name must be between 2 and 100 characters."),
   body("email")
     .trim()
     .notEmpty()
     .withMessage("Email is required.")
     .isEmail()
     .withMessage("Enter a valid email address.")
     .normalizeEmail(),
   body("project")
     .trim()
     .notEmpty()
     .withMessage("Project type is required.")
     .isLength({ max: 100 })
     .withMessage("Project type is too long."),
   body("message")
     .trim()
     .notEmpty()
     .withMessage("Message is required.")
     .isLength({ min: 10, max: 2000 })
     .withMessage("Message must be between 10 and 2000 characters."),
 ],
 async (req, res) => {
   const errors = validationResult(req)
   if (!errors.isEmpty()) {
     return res.status(400).json({
       success: false,
       errors: errors.array(),
     })
   }
   const { name, email, project, message } = matchedData(req)
   try {
     await transporter.sendMail({
       from: process.env.EMAIL_USER,
       to: process.env.EMAIL_TO,
       replyTo: email,
       subject: `New Voicentra Inquiry: ${project}`,
       text: `
New inquiry received from Voicentra Research website
Name: ${name}
Email: ${email}
Project: ${project}
Message:
${message}
       `,
       html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
<h2>New inquiry received</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Project:</strong> ${project}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
</div>
       `,
     })
     await transporter.sendMail({
       from: process.env.EMAIL_USER,
       to: email,
       subject: "We received your inquiry | Voicentra Research",
       text: `
Hello ${name},
Thank you for contacting Voicentra Research.
We’ve received your inquiry regarding: ${project}
Our team will review your message and get back to you soon.
Best regards,
Voicentra Research
       `,
     })
     res.json({
       success: true,
       message: "Inquiry sent successfully.",
     })
   } catch (error) {
     console.error("Email send error:", error)
     res.status(500).json({
       success: false,
       message: "Failed to send inquiry.",
     })
   }
 }
)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`)
})