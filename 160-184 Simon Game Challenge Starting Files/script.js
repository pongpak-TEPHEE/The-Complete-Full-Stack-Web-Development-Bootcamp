// beforeStart(), animationPress

function beforeStart() {
    animationPress();
    // ดัก event เมื่อมีการกดปุ่มใดๆ บน keyboard
    // $(document).on("keydown", function(event) {
        
    //     console.log(event.key);});
    
    $(document).on("keydown", function(event) {
        console.log(event.key);
        if(event.key == "a" || event.key == "A") {
            console.log("Game is starting...");
            gameStart();
        }
    });
};

function gameStart() {
    var a = 0;
    console.log("Game Start");
    var randomNumber;
    // ใช้เพื่อเก็บลำดับสีที่เกมสร้างขึ้น
    let orderColor = new Array();
    let userClickColor = new Array();

    const mapColorWithNumber = new Map([
        [0, "green"],
        [1, "red"],
        [2, "yellow"],
        [3, "blue"]
    ]);

    // สุ่มเลข 0-3 เพื่อเลือกสี 
    // 0 = green, 1 = red, 2 = yellow, 3 = blue
    randomNumber = Math.floor(Math.random() * 4); // สุ่มเลข 0-3
    orderColor.push(randomNumber);

    $("#level-title").text("Level 1");

    // แสดง animation ปุ่มที่ถูกสุ่ม
    animationAutoPress("#" + mapColorWithNumber.get(randomNumber));

    console.log(orderColor);

    // วนเพื่อให้เกมเริ่มเล่น click ปุ่มตั้งแต่ปุ่มแรกจนถึงปุ่มล่าสุด
    var i = 0;
    var roundFor = 1;
    $(".container").on("click", function(event) {
        roundFor = orderColor.length;
        userClickColor.push(event.target.id);
        console.log(event.target.id+" vs "+mapColorWithNumber.get(orderColor[i]));

        for(var j=0; j<roundFor; j++){
            if(userClickColor[j] == mapColorWithNumber.get(orderColor[j])){
                $("#level-title").text("Level " + (j+2));
                randomNumber = Math.floor(Math.random() * 4); // สุ่มเลข 0-3
                orderColor.push(randomNumber);
                animationAutoPress("#" + mapColorWithNumber.get(randomNumber))
            };
        };

        if(event.target.id == mapColorWithNumber.get(orderColor[i])){

            $("#level-title").text("Level " + (i+2));
            randomNumber = Math.floor(Math.random() * 4); // สุ่มเลข 0-3
            orderColor.push(randomNumber);
            animationAutoPress("#" + mapColorWithNumber.get(randomNumber))
            i++;
        }else{
            i = orderColor.length; // ออกจากลูป for
            gameOver();
        }
    });
};

// สร้าง function สำหรับเมื่อผู้เล่นแพ้
function gameOver(){
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // เพิ่ม class game-over ให้กับ body เพื่อเปลี่ยน background เป็นสีแดงชั่วคราว
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
    playSound("wrong");
    animationPress();

    $(".container").on("keydown", function(event) {
        if(event.key == !null){
            beforeStart();
        }
    });
    

};

function animationPress() {
    // ดัก event เมื่อมีการกดปุ่มใดๆ บน class container
    $(".container").on("click", function(event) {
        // console.log(event.target.id);

        // ปุ่มที่ถูกคลิก จะมมี animation กดลง
        $("#" + event.target.id).addClass("pressed");
        // เอา class pressed ออกหลังจาก 0.1 วินาที
        setTimeout(function(){
            $("#" + event.target.id).removeClass("pressed");
        }, 100);
    });
};


function playSound(nameFile) {
    var audio = new Audio("sounds/" + nameFile + ".mp3");
    audio.play();
};

function animationAutoPress(define) {
    $(define).addClass("pressed");
    // เอา class pressed ออกหลังจาก 0.1 วินาที
    setTimeout(function(){
        $(define).removeClass("pressed");
    }, 100);
}



beforeStart();