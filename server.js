const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "shaqiumeiying@gmail.com",
    pass: "pqew nphl cntj adji",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/api/contact", async (req, res) => { // Use async to allow await inside the function
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "shaqiumeiying@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  
  try {
    await contactEmail.sendMail(mail);
    res.json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ code: 500, status: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});