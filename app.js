require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const userController = require("./controllers/userController");
const pool = require("./db/pool");

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
   userController.createUsernameGet(req, res);
});

app.get("/new", (req, res) => {
    userController.createUsernameGet(req,res);
});

app.post("/new", (req, res) => {
    userController.createUsernamePost(req, res);
});




app.listen(3000)