const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Enter Full Name"],
    },
    regNumber: {
      type: Number,
      require: [true, "Enter Registration Number"],
    },
    gender: {
      type: String,
      require: [true, "Enter Gender Type"],
    },
    phone: {
      type: Number,
      require: [true, "Enter Phone Number"],
    },
    department: {
      type: String,
      require: [true, "Enter Your Department"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model("StudentRecord", StudentSchema);
