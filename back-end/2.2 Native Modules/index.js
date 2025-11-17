// import {readFile} from 'node:fs';
ff

// fs.readFile('message.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });  

fs.writeFile("massage2.txt", "Welcome to Node JS!!!" ,(err) =>{
    if(err){
        console.log(err);
        throw err;
    };
    console.log("Write file is success");
});