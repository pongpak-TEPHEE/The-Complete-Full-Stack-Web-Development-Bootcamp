// เปลี่ยนสีของ h1 เป็นสีเหลืองเมื่อโหลดหน้าเว็บเสร็จ
$(document).ready(function() {
    $("h1").css("color", "yellow");
});

// เมื่อกดปุ่ม button ให้เปลี่ยนข้อความใน p และ เปลี่ยนสีของ h1 เป็นสีขาว
$("button").click(function() {
    $("p").text("The text has been changed!");
    $("h1").css("color", "white");
});

// จัดกึ่งกลางข้อความใน h1, p และ จัดกึ่งกลางปุ่ม button
$("h1").css("text-align", "center");
$("h1").css("font-family", "Arial, sans-serif");
$("button").css("display", "block");
$("button").css("margin", "auto");
$("p").css("text-align", "center");

//
$(".input-text").css("text-align", "center");
$("input").css("padding", "10px");
$("input").css("margin-top", "5px");

// จับการพิมท์ใน input แล้วแสดงผลใน h1 เมื่อกด Enter
var str = "";
$("input").keydown(function(event) {    
    var linear = 0;
    if((event.key != null && event.key != "Enter") && (event.key.length === 1)){
        str += event.key;
    }else {
        $("h1").text(str);
        console.log("Enter has been pressed");
        str = "";
    }
});

// เมื่อเอาเมาส์ไปชี้ที่ h1 ให้เปลี่ยนสีเป็นขาว และเมื่อเอาเมาส์ออกให้เปลี่ยนกลับเป็นเหลือง
$("h1").on("mouseover", function() {
        $("h1").css("color", "white");
});
$("h1").on("mouseout", function() {
        $("h1").css("color", "yellow");
});