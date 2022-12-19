const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const indexRouter = require("./routes/index");
const studentRouter = require("./routes/student");
const courseRouter = require("./routes/course");
const accountRouter = require("./routes/account");

app.use("/", indexRouter);
app.use("/student", studentRouter);
app.use("/course", courseRouter);
app.use("/account", accountRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});