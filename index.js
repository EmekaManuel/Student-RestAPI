const express = require("express");

// imports
const dotenv = require("dotenv").config();
const colors = require("colors");
// const cors = require('cors')
const bodyParser = require("body-parser");
const PORT = process.env.PORT;
const { errorHandler } = require("./middlewares/errorHandler");
const connectToDatabase = require("./config/db");


// connect to database
connectToDatabase();


const app = express();

// middle-ware
app.use(bodyParser.json());
app.use(errorHandler);
// app.use(cors)

// routes
app.use("/api/students", require("./routes/studentRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
