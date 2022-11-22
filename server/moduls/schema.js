const mongoose = require("mongoose");
const { Schema } = mongoose;

const mailschema = new Schema({
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  isLogin: {
    type: "boolean",
    default: false,
  },
  verificationToken: String,
  verified: String,
  code: String,
});
const MailModels = mongoose.model("MailModels", mailschema);
module.exports = MailModels;
