/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

/* ESM
import inquirer form 'inquirer';
import fs form 'fs';
import qr form 'qr-image';

*/

const inquirer = require('inquirer');
const fs = require("fs");
var qr = require('qr-image');
async function main() {

    console.log("----- QR code ----- \n");

    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'url',
            message: 'ช่วยกรอก url ของคุณ : '
        }
    ])
    .then((answer) => {
        console.log(`แสดงผล url : ${answer.url}`);

        var data = answer.url;
        fs.writeFile('URL-ME.txt', data, 'utf8', (err)=>{
            if (err) throw err;
        })
        console.log(data);
        createQR(data);

    }).catch((err) => {
        console.log(err);
    });
};
            
main();

function createQR(data) {
    var qr_png = qr.image(data, { type: 'png' }); // สร้าง  stream โดยจะส่งทีละชิ้น ทำให้เบาและเร็วกว่า
    console.log(qr_png)
    qr_png.pipe(fs.createWriteStream('qr_for_google.png')); //เรียกใช้ pipe เพื่อให้ Stream ไหลไปใน file
}
