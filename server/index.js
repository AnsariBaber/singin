const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
// const { default: mongoose, mongo } = require("mongoose");
const mongoose = require("mongoose");
const MailModels = require("./moduls/schema");
const port = 8000;

app.use(express.json());
app.use(cors());

const mongoDB =
  "mongodb+srv://baber:baber@cluster0.ou0ue.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (!error) {
      console.log("db connection established");
    } else {
      console.log(error.message);
    }
  }
);

const sendVerificationCode = require("./Resetpas.js");
var code = Math.floor(100000 + Math.random() * 900000);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/signin", async (req, res) => {
  console.log(req.body);
  let data1 = req.body;

  try {
    let data = await MailModels.create(data1);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send("server error");
    }
  } catch (error) {
    console.log(error);
  }
});

function hash(password) {
  return bcrypt.hashSync(password, 10);
}

app.post("/signindata", async (req, res) => {
  let { email, password } = req.body;

  try {
    let data = await MailModels.findOne({
      email: email,
    });
    if (data) {
      res.status(400).send("Email  already exists");
    } else {
      let data2 = await MailModels.create({
        password: hash(password),
        email,
      });

      res.status(200).send(data2);
    }
  } catch (error) {
    res.status(404).send("server error");
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  let { email, password } = req.body;

  try {
    let data = await MailModels.findOne({
      email: email,
    });
    let passwordIsValid = bcrypt.compareSync(password, data.password);
    if (data && passwordIsValid) {
      await MailModels.findOneAndUpdate({ email: email }, { isLogin: true });
      res.status(200).send("success");
    } else {
      res.status(400).send("error");
    }
  } catch (error) {
    res.status(404).send("server error");
  }
});

app.post("/resetpass", (req, res) => {
  try {
    let { email } = req.body;

    // checking if user exist or not
    MailModels.findOne({ email: email }, async (err, user) => {
      console.log(user);

      //if user not found
      if (err) {
        return res.status(500).send("Error on server");
      } else if (!user) {
        return res.status(404).send("user not Exist");
      }

      //updating user by storing a code in db and sending it to email for verification
      await MailModels.updateOne(
        {
          email: email,
        },

        //setting code to the corresponding user data to verify with email
        {
          $set: {
            code: code,
          },
        }
      );

      //sending code to mail to verify
      await sendVerificationCode(user.email, code);

      res.status(200).send({
        success: true,
        message: "Verification code send to your email",
      });
    });
  } catch (e) {
    res.status(404).send({ message: "user not Exist" });
    console.log(e);
  }
});

app.post("/verifycode", async (req, res) => {
  try {
    let { code } = req.body;

    // checking if user exist or not
    await MailModels.findOne({ code: code }, (err, validcode) => {
      //if user not found
      if (err) {
        return res.json("Error on server");
      } else if (!validcode) {
        return res.send({
          msg: "Code is invalid.",
          validcode,
        });
      }

      res.json({
        success: true,
        message: "Code matched, proceed to next step.",
      });
    });
  } catch (e) {
    console.log(e);
  }
});

app.post("/newpassword", async (req, res) => {
  try {
    let { email, password } = req.body;

    await MailModels.findOneAndUpdate(
      {
        email,
      },
      {
        password: hash(password),
      }
      // await MailModels.updateOne({
      //   $set: {
      //     password: hash(password),
      //   },
      // }
    );

    res.json({
      success: true,
      message: "Password successfully changed.",
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
