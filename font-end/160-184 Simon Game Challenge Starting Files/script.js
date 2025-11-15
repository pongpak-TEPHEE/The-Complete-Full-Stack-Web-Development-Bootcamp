// สร้าง function สำหรับเริ่มเกม
function beforeStart() {
    // ใช้งาน animation การกด
    animationPress();

    // ดัก event เมื่อมีการกดปุ่มใดๆ บน keyboard
    $(document).on("keydown", function a(event) {
        // หากมีการ พิมพ์ A, a ให้เริ่มเกม
        if(event.key == "a" || event.key == "A") {
            
            console.log("Before Start");
            // ปิดการทำงานของ keydown function a
            $(document).off("keydown", a);
            // เรียกใช้ function gameStarting() level 1  = 1
            gameStarting(1);
        };
    });
};

// ใช้เพื่อเก็บลำดับสีที่เกมสร้างขึ้น
var orderColor = new Array();

function gameStarting(level) {
    // เปลี่ยน หัวข้อ
    $("#level-title").text("Level " + level);

    console.log("Welcome to Level " + level);

    // เก็บเลขที่สุ่ม
    var randomNumber;
    
    // สร้าง map ตัวเลข กับ ชื่อสีไว้ เพื่อเอาเลขที่สุ่มมาเปลี่ยนเป็นสี เพื่อใส่ใน orderColor
    const mapColorWithNumber = new Map([
        [0, "green"],
        [1, "red"],
        [2, "yellow"],
        [3, "blue"]
    ]);

    // สุ่มเลข 0-3 เพื่อเลือกสี 
    // 0 = green, 1 = red, 2 = yellow, 3 = blue
    randomNumber = Math.floor(Math.random() * 4);
    // นำเลขที่สุ่มไว้มาใส่ใน map เพื่อเอาชื่อสีเก็บไว้ใน orderColor
    orderColor.push(mapColorWithNumber.get(randomNumber));
    console.log(orderColor);

    // เรียกใช้ animation ในปุ่มที่สุ่มมา
    animationAutoPress("." + orderColor[orderColor.length - 1]);
    console.log("Auto Pressed: " + orderColor[orderColor.length - 1]);
    // เรียกใช้ playSound ในปุ่มที่สุ่มมา ตามเสียงของปุ่มนั้นๆ
    playSound(orderColor[orderColor.length - 1]);
    console.log("Sound Played: " + orderColor[orderColor.length - 1]);
    
    // สร้าง array เพื่อเก็บลำดับสีที่ผู้ใช้งานกด
    let userClickColor = new Array();

    // เลือก .container เพื่อดักจับการ click ของผู้ใช้งาน
    $(".container").on("click", function e(event) {
        // เพิ่ม สีที่ผู้ใช้งานกดใน userClickColor
        userClickColor.push(event.target.id);
        // เล่นเสียงของปุ่มที่ผู้ใช้งานกดใน ตามเสียงของปุ่มนั้นๆ
        playSound(event.target.id);

        console.log("User Clicked: " + userClickColor);
        // ตรวจสอบความเหมือนกันของ array 2 ตัว (userClickColor and orderColor)
        if(!checkAnswer(userClickColor, orderColor)){
            // หากมี ตน. ไหนที่มีค่าไม่เท่ากันก็จะไป function gameOver();
            gameOver();
        }
        // หาก array ทั้งสองเท่ากันและ ทุก ตน. มีค่าเท่ากัน
        else if(userClickColor.length === orderColor.length && checkAnswer(userClickColor, orderColor)){
            console.log("Go to Next Level");
            // ให้มี delay ก่อนขึ้น level ถัดไป เพื่อไม่ให้ animation ซ้อนกันกับ animationAutoPress
            setTimeout(() => { // () => {} คือ arrow function 
                // ปิดการทำงานของการตรวจจับการ กด
                $(".container").off("click", e);
                // self calling function เพื่อไปด่านต่อไป
                gameStarting(level + 1);
            }, // delay 0.8 s 
            800);
        };
    });
};

// สร้าง function สำหรับตรวจสอบคำตอบของผู้เล่น
function checkAnswer(userClickColor, orderColor) {
    // วนตรวจสอบตามความยาวของ userClickColor เพราะว่่าการตรวจสอบถ้าไม่ใช้ครั้งสุดทายของ level userClickColor จะมีความยาวน้อยกว่า orderColor 
    for(let i = 0; i < userClickColor.length; i++) {
        if(userClickColor[i] !== orderColor[i]) {
            console.log("IN checkAnswer \n" + userClickColor + " != " + orderColor);
            return false;
        };
    };
    return true;
};

// สร้าง function สำหรับเมื่อผู้เล่นแพ้
function gameOver(){
    // เปลี่ยน หัวข้อ
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // เพิ่ม class game-over ให้กับ body เพื่อเปลี่ยน background เป็นสีแดงชั่วคราว
    $("body").addClass("game-over");

    setTimeout(() => { // () => {} คือ arrow function
        // เอา class "game-over" ออกจาก body หลังจากผ่านไป 0.2 s
        $("body").removeClass("game-over");
    }, 200);
    // เล่นแผ่นเสียง wrong
    playSound("wrong");
    
    // ดักจับการพิมพ์ ของผู้ใช้งาน
    $(document).on("keydown", function a(event) {
        console.log("event.key end : "+event.key);
        // หากมีการพิมพ์ ให้รีเซ็ตตัวแปรต่างๆ เพื่อเริ่มเกมใหม่
        if(event.key){
            // ล้าง orderColor เพื่อเตรียมเล่นใหม่
            orderColor = new Array();

            console.log("Restart Game");
            // ปิดการทำงานของ "keydown" function a
            $(".container").off("keydown", a);
            // เริ่ม level 1 ใหม่
            gameStarting(1);
        };
    });
};

// สร้าง function สำหรับ animation เมื่อผู้เล่นกดปุ่มใน .container
function animationPress() {
    // ปิดการทำงานของ click เพื่อป้องกันการทำงานผิดพลาด
    $(".container").off("click");
    // ดัก event เมื่อมีการกดปุ่มใดๆ บน class container
    $(".container").on("click", function(event, callback) {
        // ปุ่มที่ถูกคลิก จะมมี animation กดลง
        var et = $("#" + event.target.id); // สร้างตัวแปรมาเก็บ
        // เพิ่ม class "pressed" ใน ปุ่มที่กด
        et.addClass("pressed");

        // เอา class pressed ออกหลังจาก 0.1 วินาที
        setTimeout(() =>{ // () => {} คือ arrow function 
            // หลังจากเวลาผ่านไป 0.2 s ให้นำ class "pressed" ออกจาก ปุ่มที่กดเพื่อเป็นการหยุด effect 
            et.removeClass("pressed");
            // if(callback) callback();
        }, 200);
    });
};

function animationAutoPress(defineObject, callback) {
    // สร้าง ตัวแปรเก็บ object ที่จะเพิ่ม class
    var dO = $(defineObject);
    // เพิ่ม class "pressed"
    dO.addClass("pressed");
    // เอา class pressed ออกหลังจาก 0.1 วินาที
    setTimeout(() => {
        dO.removeClass("pressed");
        console.log("มีการลบ class pressed หรือไม่ "+!dO.hasClass("pressed"));
        // if(callback) callback();
    }, 200);
}

function playSound(nameFile) {
    var audio = new Audio("sounds/" + nameFile + ".mp3");
    if(audio.src == "sounds/wrong.mp3"){
        audio.volume = 0.7;
        audio.play();
    }else{
        audio.volume = 0.2;
        audio.play();
    }
};

// กดเริ่มเกม 
beforeStart()

// ลักษณ์ของการประกาศตัวแปร var : function scope เมื่อประกาศ การมองเห็นตัวแปรนี้จะอยู่ภายใน function เดี่ยวกัน ไม่นิยมใช้ และสามารถประกาศเป็น global variable ได้
//                      let : block scope จะมองเห็นใน {} เดี่ยวกันเท่านั้น
//                      const : block scope จะมองเห็นใน {} เดี่ยวกันเท่านั้น และไม่สามารถเปรียนค่าได้