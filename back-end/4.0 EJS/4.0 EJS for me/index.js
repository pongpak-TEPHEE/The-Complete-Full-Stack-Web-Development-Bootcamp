import express from 'express';

const app = express();
const PORT = 3000;

// บอก express ว่าเราจะใช้ ejs
// app.set("view engine", "ejs");

let date = new Date();
let day = date.getDay();

const mapDay = new Map([
  [0, "sunday"],
  [1, "monday"],
  [2, "tuesday"],
  [3, "wednesday"],
  [4, "thursday"],
  [5, "friday"],
  [6, "saturday"],
]);

console.log(mapDay.get(day));

app.get("/", (req, res) => {
  
  if(day === 6 || day === 0){
    res.render('index.ejs', { 
      timeOfDay: "weekend", 
      describe: "Have fun!!" 
    });
  }else{
    res.render('index.ejs', { 
      timeOfDay: "weekday", 
      describe: "Work hard!!" 
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});