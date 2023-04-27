const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/sendmail", async (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "dumi.9944@gmail.com",
      clientId: "595439602550-1kkp8oj1pi2kk70jc03s3i9ndjcjgjd8.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "your_refresh_token",
      accessToken: "your_access_token",
    },
  });

  const mailOptions = {
    from: "your_email@gmail.com",
    to: "dumi.9944@gmail.com",
    subject: "New message from contact form",
    text: `Email: ${email}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));