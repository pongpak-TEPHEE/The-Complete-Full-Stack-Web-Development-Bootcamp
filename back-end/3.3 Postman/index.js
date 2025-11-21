import express from "express";
const app = express();
const port = 3000;

// *********************
// มาฝึกใช้ Postman กัน ให้แน่ใจว่าเซิร์ฟเวอร์ของคุณกำลังรันด้วย nodemon.
// จากนั้นทดสอบ 5 เส้นทาง (routes) ด้านล่างด้วย Postman — เปิดแท็บแยกสำหรับแต่ละคำขอ。
// ตรวจสอบว่าในแต่ละเส้นทางคุณได้รับรหัสสถานะ (status code) ที่ถูกต้องจากเซิร์ฟเวอร์。
// คุณไม่ควรได้รับสถานะ 404 หรือ 500.
// *********************

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
  res.send("<h1>Post request received</h1>");
});

app.put("/user/angela", (req, res) => {
  res.send("Put request received");
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.send("Patch request received");
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.send("Deleting user");
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
