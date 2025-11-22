// import library จาก npm 
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// สร้าง ตัวแปร "__dirname" ที่รเก็บ ที่อยู่ file ภายในเครื่อง server มาจาก path
const __dirname = dirname(fileURLToPath(import.meta.url));
// สร้างตัวแปรเก็บ express ชื่อ app
const app = express();
// ตั้ง port "3000"
const port = 3000;

// เรียกใช้ middleware ผ่าน app.use(); ในที่นี้มี 2 ตัวขั้นด้วย "," และ next();
app.use(bodyParser.urlencoded({ extended : true}), (req, res, next) => {
console.log(req.body['street']); // req.body.street
console.log(req.body['pet']); // req.body.pet
// สร้าง ตัวแปร bandName เพื่อเก็บค่าชื่อวงดนตรี
var bandName = req.body.street + req.body.pet;
// ตรวจสอบเงื่อนไข ถ้า street = "Sriracha" และ pet = "cat" ให้ทำงานในบล็อกนี้
if (req.body.street == "Sriracha" && req.body.pet == "cat") {
    app.post("/submit", (req, res) => {
    res.send("<h1>Your band name is: </h1>\n"+"<h2>" + bandName +" 🤯😎"+ "</h2>\n");
    });
};
// เรียกใช้ next() เพื่อให้ middleware ตัวถัดไปทำงาน
next();
});

// สร้าง route หลัก "/" เพื่อส่งไฟล์ index.html ให้กับ client
app.get("/", (req, res) => {
// ส่งไฟล์ index.html ที่อยู่ในโฟลเดอร์ public โดยใช้ __dirname
res.sendFile(path.join(__dirname, "public", "index.html"));
});

// เริ่มต้น server ที่ port ที่กำหนด #3000
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});