// สร้างแผนที่เสียงสำหรับแต่ละปุ่ม โดย map class ของปุ่มกับชื่อไฟล์เสียง
        const soundMap = {
            "w": "tom-1",
            "a": "tom-2",
            "s": "tom-3",
            "d": "tom-4",
            "j": "snare",
            "k": "crash",
            "l": "kick-bass"
        }

// วนลูปเพิ่ม event listener ให้กับปุ่มแต่ละปุ่ม ในหน้าเว็บ
for(var i=0; i<document.querySelectorAll("button").length; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function () { 
        
        // เมื่อปุ่มถูกคลิก แสดงค่า innerHTML ของปุ่มนั้นในคอนโซล เช่่น w, a, s, d, j, k, l
        // console.log(this.innerHTML);

        // ตรวจสอบว่ามีเสียงที่แมปกับปุ่มนี้หรือไม่
        makeSound(this.innerHTML);

        // เรียกใช้ฟังก์ชัน animationButton เพื่อแสดงแอนิเมชันเมื่อปุ่มถูกคลิก
        animationButton(this.innerHTML);
    }); 
}

// เรียกใช้ฟังก์ชันเพื่อเล่นเสียงเมื่อกดปุ่มบนแป้นพิมพ์ตามที่ตั้งค่าไว้
playSoundForKey();

function makeSound(button) {

    if (soundMap[button]) {
        // soundMap[this.innerHTML] จะดึงชื่อไฟล์เสียงที่ตรงกับปุ่มที่ถูกคลิก
        var sound = new Audio("sounds/" + soundMap[button] + ".mp3");
        sound.play();
    } else {
        console.log("No sound mapped for this button: " + button);
    }
}


function playSoundForKey() {

    // event คือการกดปุ่มใดๆ บนแป้นพิมพ์
    document.addEventListener("keydown", function(event) { 
        // เล่นเสียงตามปุ่มที่กด
        makeSound(event.key);
        
        animationButton(event.key);
    });
}


function animationButton(currentKey) {
    // เลือกปุ่มที่ตรงกับปุ่มที่ถูกกด
    var activeButton = document.querySelector("." + currentKey);
    console.log(activeButton);

    // เพิ่มคลาส "pressed" ให้กับปุ่มที่ถูกกด
    activeButton.classList.add("pressed");

    // ลบคลาส "pressed" ออกหลังจาก 100 มิลลิวินาที
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);

}
