import express from "express";

const app = express();
const port = 3000;

// app.use(logger);
// โจทย์ : สร้างมิดเดิลแวร์  logger ที่แสดงข้อมูลของ request ที่เข้ามา
app.use(logger);

// กรณีใช้แบบ function ปกติ

function logger(req, res, next) {
  console.log("\n\n\n ____________________");
  console.log(`requirement URL : "${req.url}"`);
  console.log(`requirement method : ${req.method}`);
  console.log(`requirement method : ${req.headers["user-agent"]}`);
  next();
};

// กรณีใช้แบบ arrow function

// const logger =  (req, res, next) => {
//   console.log("\n\n\n ____________________");
//   console.log(`requirement URL : "${req.url}"`);
//   console.log(`requirement method : ${req.method}`);
//   console.log(`requirement method : ${req.headers["user-agent"]}`);
//   next();
// };

app.get("/", (req, res) => {
  res.send("Get request to the homepage");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
