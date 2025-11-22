//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname, join} from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }), morgan("dev"), checkPassword);

function checkPassword(req, res, next) {
    var password = req.body["password"];
    if (password === "ILoveProgramming") {
        app.post("/check", (req, res) => {
            console.log("post method is running");
            res.sendFile(join(__dirname, "public/secret.html"));
        });
    } else {
        app.post("/check", (req, res) => {
            console.log("post method is running");
            res.sendFile(join(__dirname, "public/index.html"));
        });
    };
    next();
};

// app.post("/submit", checkPassword, (req, res) => {
//     res.redirect("/check");
// });

app.get("/", (req, res) => {
    console.log("get method is running");
    res.sendFile(join(__dirname, "public/index.html"));
});


app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT} in port ${PORT}`);
});