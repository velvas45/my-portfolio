const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// View engine setup
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: false,
  })
);
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/emailHandler", (req, res) => {
  const emailSubject = req.body.email;
  const output = `
          <h3>Contact Details</h3>
            <p>Name: ${req.body.name}</p>
            <p>Email: ${req.body.email}</p>
          <h3>Messages</h3>
          <p>${req.body.message}</p>
          `;

  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "helmiagustiawan905@gmail.com",
        pass: "fapovjanocxlrcwr",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "admin@portfolio.com", // sender address
      to: "helmiagustiawan905@gmail.com", // list of receivers
      subject: "Pertanyaan portfolio", // Subject line
      // text: "Penjelasan tentang portfolio anda", // plain text body
      html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("index");
  }
  main().catch(console.error);
});

app.listen(3000, () => console.log("server started..."));
