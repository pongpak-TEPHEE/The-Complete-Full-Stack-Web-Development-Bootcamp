// สร้าง function สำหรับเริ่มเกม
function beforeStart() {
    animationPress();

    // ดัก event เมื่อมีการกดปุ่มใดๆ บน keyboard
    $(document).on("keydown", function a(event) {
        if(event.key == "a" || event.key == "A") {
            
            console.log("Before Start");
            
            $(document).off("keydown", a);
            gameStarting(1);
        };
    });
};

// ใช้เพื่อเก็บลำดับสีที่เกมสร้างขึ้น
let orderColor = new Array();

function gameStarting(level) {
    
    $("#level-title").text("Level " + level);
    console.log("Welcome to Level " + level);
    var randomNumber;

    const mapColorWithNumber = new Map([
        [0, "green"],
        [1, "red"],
        [2, "yellow"],
        [3, "blue"]
    ]);

    // สุ่มเลข 0-3 เพื่อเลือกสี 
    // 0 = green, 1 = red, 2 = yellow, 3 = blue
    randomNumber = Math.floor(Math.random() * 4); // สุ่มเลข 0-3
    orderColor.push(mapColorWithNumber.get(randomNumber));
    console.log(orderColor);

    animationAutoPress("." + orderColor[orderColor.length - 1]);
    console.log("Auto Pressed: " + orderColor[orderColor.length - 1]);
    playSound(orderColor[orderColor.length - 1]);
    console.log("Sound Played: " + orderColor[orderColor.length - 1]);
    
    let userClickColor = new Array();

    $(".container").on("click", function e(event) {
        userClickColor.push(event.target.id);
        playSound(event.target.id);

        console.log("User Clicked: " + userClickColor);
        if(!checkAnswer(userClickColor, orderColor)){
            gameOver();
        }else if(userClickColor.length === orderColor.length && checkAnswer(userClickColor, orderColor)){
            console.log("Go to Next Level");
            // ให้มี delay ก่อนขึ้น level ถัดไป เพื่อไม่ให้ animation ซ้อน
            setTimeout(() => {
                $(".container").off("click", e);
                gameStarting(level + 1);
            }, 800);
        
        }
    });
};

// สร้าง function สำหรับตรวจสอบคำตอบของผู้เล่น
function checkAnswer(userClickColor, orderColor) {
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
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // เพิ่ม class game-over ให้กับ body เพื่อเปลี่ยน background เป็นสีแดงชั่วคราว
    $("body").addClass("game-over");

    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
    playSound("wrong");

    $(document).on("keydown", function a(event) {
        console.log("event.key end : "+event.key);
        // รีเซ็ตตัวแปรต่างๆ เพื่อเริ่มเกมใหม่
        if(event.key){
            orderColor = new Array();

            console.log("Restart Game");

            $(".container").off("keydown", a);
            gameStarting(1);
        };
    });
    

};

// function btnBlink(defineObject, callback){
//     var dO = $(defineObject);
    
//     dO.removeClass("btn");
//     // เอา class pressed ออกหลังจาก 0.1 วินาที
//     setTimeout(() => {
//         dO.addClass("btn");
//         console.log("มีการลบ class pressed หรือไม่ "+!dO.hasClass("pressed"));

//         if(callback) callback();
//     }, 50);
// }

// สร้าง function สำหรับ animation เมื่อผู้เล่นกดปุ่ม
function animationPress() {
    // ดัก event เมื่อมีการกดปุ่มใดๆ บน class container
    $(".container").off("click");
    $(".container").on("click", function(event, callback) {
        // ปุ่มที่ถูกคลิก จะมมี animation กดลง
        var et = $("#" + event.target.id);
        et.addClass("pressed");

        // เอา class pressed ออกหลังจาก 0.1 วินาที
        setTimeout(() =>{
            et.removeClass("pressed");
            if(callback) callback();
        }, 200);
    });
};

var count = 1;
function animationAutoPress(defineObject, callback) {
    console.log("จำนวนครั้งที่ animation auto press ทำงาน "+ count++);
    var dO = $(defineObject);
    
    dO.addClass("pressed");
    // เอา class pressed ออกหลังจาก 0.1 วินาที
    setTimeout(() => {
        dO.removeClass("pressed");
        console.log("มีการลบ class pressed หรือไม่ "+!dO.hasClass("pressed"));

        if(callback) callback();
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
beforeStart()