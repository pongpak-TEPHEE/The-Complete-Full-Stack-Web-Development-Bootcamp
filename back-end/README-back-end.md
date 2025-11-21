Back End 

# 195 Using Node JS (2.1)

    ทำไมเราต้องใช้ framework : เพราะว่ามันทำให้การทำงานเราง่ายสะดวกโดยไม่ต้องเตรียมทุกอย่างด้วยตัวเอง

    ทำไมเราต้องใช้ node.js : เพราะว่าเป็น framework ที่ได้รับความนิยมเป็นอันดับ 1 

    Node REPL (Read Eval Print Loop) 
        คือ runtime ของ javascript เพื่อให้เราสามารถใส่ input แล้วได้ output ออกมา ใน terminal ได้โดยไม่ต้องพึ่ง web browser

    การเรียกใช้ Node REPL
        1. พิมพ์ node ใน terminal เพื่อเปิดใช้

        2. สามารถใช้ node เพื่อรัน file js ได้ (cd directory part of folder that keep js file -> node file.js name)
    
    การออกจาก Node REPL
        1. Control + c -> Control + c

        2. .exit

# 196 How to Use native node modules (2.2)

    Example : File System

        const fs = require("fs");

        // เขียน file ใหม่
        fs.writeFile("massage.txt", "Welcome to Node JS!!!" ,(err) =>{
            if(err) throw err;
            consol.log(err)
        });

        // อ่านไฟล์ 
        fs.readFile("./2.2 Native Modules/message.txt", (data err) => {
            if(err) throw err;
            consol.log(data)
        });

# 198 The node packet management (npm) and install external node module (2.3)

    NPM คืออะไร
        สิ่งที่เอาไว้ เก็บหรือ ดึง library มาใช้งาน โดยมีชื่อฐานข้อมูลว่า Registry
    
    ประโยชน์ คือเราสามารถเรียกใช้ module ที่คนอื่นทำไว้แล้ว มาใช้งานกับ project เราได้

    ประกอบด้วย 2 ส่วน คือ 
        1. package.json -> บันทึกรายการทังหมดของ project เรา

        2. node_modules (Folder) -> เก็บ code module ที่เรา download มา

    วิธีติดตั้ง External packet
        1. Go to terminal 

        2. Go to location folder that keep your code project

        3. Enter : npm init

        4. Enter : detail project 

        5. Enter : npm i packetName

    ลักษณะการเรียกใช้งาน 2 แบบ 

        1. CJS (command js) เช่น var generateName = require('sillyname'); sillyname คือ ชื่อ module

        2. ESM (EcmaScrip Modules) :
            ต้องเพิ่ม type ใน file package.json | "type": "module"

# 199 QR code Project (2.4)

    ต้องลง module 2 ตัว 

        1. inquirer.js ช่วยให้คุณสามารถถามคำถามกับผู้ใช้ใน Terminal ได้อย่างง่ายดายและสวยงาม โดยมันจะจัดการเรื่องการแสดงผล การรับอินพุต และการตรวจสอบความถูกต้องของข้อมูลทั้งหมด

        ตัวอย่าง :
            // 1. นำเข้า inquirer
            import inquirer from 'inquirer'; // หรือ cost inquirer = require('inquirer');

            async function main() { // async เป็นการบอกโปรแกรมว่าใน function นี้มีจุดที่ต้องรอ (await) ด้วยนะ
                console.log("--- เริ่มต้นแบบสอบถาม ---");

                // 2. สั่งให้ถามคำถาม โดยใช้ inquirer.prompt()
                // เราต้องใส่คำว่า await เพื่อบอกให้โปรแกรม "รอ" จนกว่าผู้ใช้จะตอบเสร็จ
                const answers = await inquirer.prompt([ // await เป็นการบอกโปรแกรมว่าต้องรอนะ 
                    {
                    type: 'input',      // ชนิด: ให้พิมพ์ตอบเอง
                    name: 'username',   // ชื่อตัวแปรสำหรับเก็บคำตอบนี้
                    message: 'คุณชื่ออะไรครับ?', // คำถามที่จะโชว์บนหน้าจอ
                    },
                    {
                    type: 'list',       // ชนิด: ให้เลือกจากรายการ
                    name: 'favoriteColor', // ชื่อตัวแปรสำหรับเก็บคำตอบนี้
                    message: 'ชอบสีอะไรมากที่สุด?',
                    choices: ['Red', 'Green', 'Blue', 'Yellow'], // ตัวเลือก
                    },
                    {
                    type: 'confirm',    // ชนิด: ตอบ Yes/No
                    name: 'isReady',    // ชื่อตัวแปร
                    message: 'พร้อมจะเรียน Node.js ต่อไหม?',
                    default: true,      // ค่าเริ่มต้น (ถ้ากด Enter เลยจะเป็น Yes)
                    }
                ]);

                // 3. นำคำตอบมาใช้งาน
                console.log("\n--- สรุปผลลัพธ์ ---");
                console.log(`สวัสดีคุณ: ${answers.username}`);
                console.log(`คุณชอบสี: ${answers.favoriteColor}`);
                
                if (answers.isReady) {
                    console.log("เยี่ยมเลย! ลุยกันต่อ!");
                } else {
                    console.log("โอเค พักผ่อนก่อนก็ได้ครับ");
                }
            }

            // เรียกใช้ฟังก์ชันหลัก
            main();
        
        2. qr-image.js เป็น library ช่วยสร้าง Qr code ที่ได้รับความนิยมมากที่สุด

        ตัวอย่าง : 
            // ติดตั้ง qr-image
            var qr = require('qr-image'); // CJS

            // สร้าง stream ของรูป qr code
            var qr_svg = qr.image('I love QR!', { type: 'svg' });
            // นำ stream ที่สร้างไว้ มาเขียนลง file i_love_qr.svg
            qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
            
        เสริมการเปลี่ยนการนำเข้าจาก ESM -> CJS

        ตัวอย่าง :
            import fs from 'fs'; -> const fs = require('fs');
            import qr from 'qr-image'; -> var qr = require('qr-image');
            import inquirer from 'inquirer'; -> const inquirer = require('inquirer');

        resources :
            npm = https://www.npmjs.com/
            
            nodejs documentation = https://nodejs.org/docs/latest/api/ 

# 201-202 Express framework (3.1)

    คืออะไร : คือ framework ที่สร้างส่วน back-end ที่ง่ายกว่าการเขียน Node.js เพียงอย่างเดี่ยว และเป็น framework ที่ได้รับความนิยมมากที่สุดในโลก

    ขั้นตอนการติดตั้งดังนี้ :
        1. create directory
            cd 'ชื่อ folder ที่จะใส่ server'
            mkdir 'ชื่อ directory'
        2. create index.js file
            torch index.js
        3. initial NPM
            npm init -y // -y คือการที่เราไม่ต้องดำเนินการที่ละขั้นตอนแต่เป็นการใสค่า default
        4. install Express package
            npm i express

            --- package.js ---
            add : "type" : "module"
        5. write server app in index.js
            --- index.js ---
            import express from 'express';
            const app = express();
            const port = 3000;

            app.listen(port, () => {
                consol.log("Server running on port 3000");
            });

        6. start server

    Check numbers of port on Mac OS
        sudo lsof -i -p -n | grep LISTEN
    Kill port on Mac OS
        npx kill-port <port number>

# 203 HTTP require (3.2)

    ประกอบด้วย get , post , put , patch , delete

    // get 
        --- index.js --- 
        const app = express();

        app.get("/", (req, res) =>{
            console.log(req.rewHeaders); // ข้อมูลต่างๆของผู้ส่งคำขอ
            res.send("<h1>Hello world, have a good days</h1>"); // การส่ง h1 ไปให้ผู้ขอ
        })

    nodemon.js 
        คืออะไร? คือ library ที่ทำให้เราไม่ต้อง สั่งเริ่ม port ใหม่ทุกครั้งที่มีการเปลี่ยนแปลง 
        เมื่อเกิดการเปลี่ยนแปลงใน code ก็จะทำการ restart port ให้เลย

        --- in terminal ---
        // install 
        sudo npm i -g nodemon

        // call use
        nodemon "nameOfServer such as index.js"

    
    การส่งหาถูกแบ่งโดย "/" 
        
        ตัวอย่าง : 
        https://localhost:3000/
        app.get("/", (req, res) => {
            res.send("Welcome to my website");
        });
        https://localhost:3000/about
        app.get("/about", (req, res) => {
            res.send("This is test http website");
        });

# 204 Postman (3.3)
    
    https status code 
        100-190 informational responses
        200-299 successful responses
        300-399 redirection massage
        400-499 client error responses
        500-599 server error responses
    
    result : https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

# 205 introduction to Middleware (3.4)
    
    เมื่อมี require get method part "/" ให้ส่ง file "index.html" ไปให้ user 
    แต่การที่เราจะส่งไฟล์ให้เราต้องมีการระบุ part ที่อยู่ของไฟล์ "index.html" ใน เครื่องที่เรากำหนดเป็น server ให้ถูกต้อง โดยเราใช้

        ขั้นตอนที่ 1 
        import { dirname } from "path";
        import { fileURLToPath } from "url";

        const __dirname = dirname(fileURLToPath(import.meta.url));

        ขั้นตอนที่ 2 นำ path dirname ไปเพิ่มกับ directory ที่เก็บ file เรา
        app.get("/", (req, res) => {
            res.sendFile(__dirname + "/public/index.html");
        });
    
    index1.js

    body-parser
        ขั้นที่ 1 ติดตั้ง
            --- terminal ---
            npm i body-parser
        ขั้นที่ 2 
            --- index.js ---
            import bodyParser from 'body-parser'

            // เรียกใช้ 
            app.use(bodyParser(urlencoded{ extended : true}));
    
    เราจึงสามารถ ใช้ 
        app.post("/submit", (req, res) => {
            console.log(req.body);
        });
    เพื่อดู body ของ req ที่ส่งมาหาเราได้

    

            

            




