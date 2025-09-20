## 54.Display Flex 

เมื่อใช้คำสั่ง display : flex ใน div.container ใน chile element จะจัดเรียงเป็นแนวนอนอัตโนมัติ
โดยมีคำสั่งที่สำคัญดังนี้ 

    .container {
        display : flex;
        flex-direction : row; // กำหนดทิศทาง chile element ให้เรียงกันในแนวนอน 
    }
    .container {
        display : flex;
        justify-content : center; // ปรับให้ chile element อยู่ตรงกลางในแนวนอน
    }
    .container {
        display : flex;
        align-items : center; // ปรับให้ chile element อยู่ตรงกลางในแนวตั้ง
    }

## 54.Flex Direction

โดยทั่วไปทิศทางของ flex จะเป็นไปในทิศทาง main-axis คือจาก left -> right และเมื่อพื้นที่ในแนวนอนเต็มก็จะ ขยับลงในทิศทาง cross-axis คือทิศทาง top -> button

    inline-flex -> จะทำให้ element อยู่ในแถวเดี่ยวกันได้
    flex-basis -> เป็นการปรับ ฐานของ flex ใน chile node เท่านั้น !!! 

## 55.Flex Layer

order: 0; for chile node 
เป็นคำสั่งที่จัดลำดับของ chile node โดยตัวเลขน้อยจะอยู่ด้านหน้า ตัวเลขมากจะอยู่หลัง 
โดยเริ่มต้นจะมี default อยู่ที่ order: 0; 

flex-wrap: nowrap; for parent element
เป็นคำสั่งที่มีอยู่สอง mode คือ nowrap -> เมื่อหน้าจอเล็กจนไม่สามารถแสดงผลลัพท์ได้ทั้งหมด content จะถูกผลักออกจากหน้าจอ
wrap -> ตรงข้ามกับ nowrap ที่เมื่อไม่สามารถแสดงผลได้ทั้งหมดจะขึ้นบรรทัดใหม่ให้

align-content: ; for parent element using flex-wrap: wrap; 
เป็นคำสั่งที่ใช้งานเหมือนกับ align-items แต่จะใช้งานได้เฉพราะ element ที่ใช้ flex-wrap: wrap; เท่านั้น

CSS-flexbox src="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"       เอาไว้ดูคำสั่ง
flex layer src="https://appbrewery.github.io/flex-layout/"                      แสดงการทำงาน
flexbox-froggy src="https://appbrewery.github.io/flexboxfroggy/#th"             เกมเอาไว้ฝึก

## 57.Flex Layout 

ลำดับความสำคัญของการใช้ความกว้าง

    content width < width < flex-basis < min-width, max-width 
    ^                                               ^
    น้อยสุด                                           มากสุด

    content width : ความกว้างที่น้อยที่สุดที่สามารถใส่ content ไปได้
    width : การกำหนดความกว้างแบบปกติ แต่ต้องกว้างกว่า content width
    flex-basis : การกำหนดความกว้างเริ่มต้น ของแต่ละ element ใน flex box
    min-width : ความกว้างที่น้อยที่สุดที่เป็นไปได้ element จะไม่สามารถ มีความกว้างน้อยกว่่่่่าค่า min-width ได้
    max-width : ความกว้างที่สูงที่สุด โดยที่ element จะไม่สามารถมีขนาดมากกว่าค่า max-width ได้

        [  element  ].....................]........]
                    ^                     ^
                    max-width             min-width    

    คำสั่ง flex-shrink: ; คือคำสั่งที่บ่งบอกว่า จะสามารถให้ items ใน flexbox ย่อขนาดได้แค่ไหน ใช้ใน child node
         flex-shrink: 0; ย่อไม่ได้เลย
         flex-shrink: 1; ย่อได่ตามปกติ
         flex-shrink: "มากกว่า 1"; ย่อได้มากกว่วปกติ
         flex-shrink: "น้อยกว่า 1 มากกว่า 0"; ย่อได้น้อยกว่าปกติ


## 60.CSS Grid

เปรียบเทียบการใช้ FlexBox และ Grid 
FlexBox -> เมื่อเราจะจัดการ content ในรูปแบบ 1D (แนวเส้นตรง)
Grid -> เมื่อเราจะจัดการ content ในรูปแบบ 2D (ทั้งด้านกวาง และยาว)
แต่เราสามารถใช้สอง อย่างผสมกันได้

เรามาดูโครงสร้างของ Grid กัน 
    .container {
        display: grid;
        grid-template-columns: 1fr 2fr;         // บ่งบอกว่าเรามี 2 columns ในอัตรา 1:2
        grid-template-rows: 1fr 1fr;            // บ่งบอกว่าเรามี 2 rows ในอัตรา 1:1
        gab: 10px;                              // ช่องว้างระหว่าง module
    }

## 61.Grid size

* Fixe size 
การกำหนดขนาด row, column เราสามารถเขียนย่อได้
    .container {
        display: grid;
        grid-template: 100px 200px / 400px 800px ;        
                        ^     ^        ^     ^
                        r1    r2       c1    c2
    }
* Auto size
การกำหนดขนาดของพื้นที่ไม่ว่าจะเป็น column หรือ row ถ้าเรากำหนดเป็น auto มันจะปรับให้มีขนาดถึงขอบของ view point ของ website
* Fractional size
การกำหนดแบบเศษส่วน
    .container {
            display: grid;
            grid-template: 1fr 2fr / 1fr 2fr ;
                                ^       ^ 
                               1:2      1:2
    }
* MinMax 
    .container {
            display: grid;
            grid-template: 200px 400px / 200px minmax( 400px, 800px) ;
                                                ^
                                    กว้าง อยู่ในช่วง 800px กับ 400px
    }
* Repeat
การสร้าง ไม่ว่าจะเป็น row หรือ column ตามที่เรากำหนด
    .container {
            display: grid;
            grid-template: repeat(2, 200px) / repeat(2, 400px) ;
                                ^                ^
                        2 row width = 200px     2 column width = 400px
     
    }
ตัวอย่าง เช่นเรามี HTML ดังนี้
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
    </div>
จะได้ผลลัทพ์ดังนี้
    [1][2][3]
    [4][*][*]  * = ไม่มีค่าปล่ิยว่าง

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

แต่ในกรณีที่เรามี object เกิน grid ที่เรากำหนด object ที่เกินจะมีขนาด auto เช่น
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
    </div>
จะได้ผลลัทพ์ดังนี้
    [1][2][3]
    [4][5][6]
    <7>       <> = auto size
แต่เราก็สามารถ กำหนดขนาด object ที่เกินมาได้โดย 
    grid-auto-row: 300px;   // มีความหมายว่า object ที่เกินมานั้นจะมีความกว้างของ row = 300px


## 62.Grid Placement

เป็นเรื่องเกี่ยวกับการวาง grid และใช้งาน grid หลาย cel ผสมกัน

โดยเริ่มจากการรวม column 
    .container {
        display : grid;
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
        gap: 10px;
    }
    .item-one { 
        grid-column: 2 span; // คือ ไอเท็มที่ 1 ใช้พื้นที่ 2 column โดยพื้นฐานจะเริ่มต้นที่ column ที่อยู่เป็นจดเริ่มและจะขยับไป ตามจำนวน column ที่เรากำหนด เช่น grid-column-start: 2; grid-column-end: 4; 
    }

โดยเริ่มจากการรวม row 

!!! trip ในการบ่งบอกส่วนสุดท้ายเช่น grid-column(row)-end เราสามารถระบุเป็น -1 เพื่อให้ไปสิ้นสุดใน ตน. ขวาสุดของ grid ได้

เราสามารถ ใช้ order ในการจัดเรียง ลำดับก่อน-หลังได้ เช่นเดี่ยวกับ flexbox 

หรือ อีกวิธีในการจัดการ ลำดับคือ การใช้ grid-column(row)-start(end) เช่น 
    .astronaut {
        background-color: green;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;

        // หรือ

        grid-area: 2 / 1 / 3 / 3; 
                   ^   ^   ^   ^
                  r-s c-s r-e c-e
    }

สุดท้ายอธิบายว่า grid != flexbox อย่างไร?
คำตอบคือใน grid เราสามารวาง element ให้ overlap กันได้ 

สามารถฝึกเพ่ิมได้โดย
    https://appbrewery.github.io/gridgarden/

## 65.Bootstrap Layout

โดยจะพูดถึง bootstrap layout 12 column โดยมีโครงสร้างดังนี้

(In HTML)
    <div class="container">
        <div class="row">
            <div class="col">Hello</div>
            <div class="col">Hello</div>
            <div class="col">Hello</div>
                        .
                        .
                        .
            <div class="col">Hello</div>
        </div>
    </div>

โดย object จะถูกเรียงไปในแนวนอนจากซ้ายไปขวา แต่จะมี ขนาด pixel ที่จะสามารถแสดงเต็มจอได้ ไม่เหมือนกันอยู่ที่เรากำหนดโดยมี ขนาดดังนี้

.container          -> จะแสดงเต็มจอในความกว้าง <576px         
.container-sm       -> จะแสดงเต็มจอในความกว้าง >=576px        เหมาะสำหรับ mobile
.container-md       -> จะแสดงเต็มจอในความกว้าง >=768px        เหมาะสำหรับ ipad
.container-lg       -> จะแสดงเต็มจอในความกว้าง >=992px        เหมาะสำหรับ laptop
.container-xl       -> จะแสดงเต็มจอในความกว้าง >=1200px       เหมาะสำหรับ Desktop
.container-xxl      -> จะแสดงเต็มจอในความกว้าง >=1400px       เหมาะสำหรับ TV
.container-fluid    -> จะแสดงเต็มจอในความกว้าง >1400px

- Sized Columns
เราสามารถกำหนดอัตราส่วนของ column ได้ว่าจะให้มีอัตราส่อนเท่าไหร่ โดยมีอัตราส่วนมากสุดคือ col-12 และเมื่อราม class="col" ทั้งหมดที่มีต้องรวมได้เท่ากับ 12 such as...

(In HTML)
    <div class="container">
        <div class="row">
            <div class="col-2">Hello😎</div> 
            <div class="col-4">HelloHello🌹</div>
            <div class="col-6">HelloHello🤙</div>
        </div>
    </div>

    col-2 -> มีอัตรา 2/12
    col-4 -> มีอัตรา 4/12
    col-6 -> มีอัตรา 6/12

- Breakpoints 
จุกที่บ่งบอกการขอบเขตการทำงาน

None     -> จะทำงานในช่วง <576px         
sm       -> จะทำงานในช่วง >=576px, <768px        
md       -> จะทำงานในช่วง >=768px, <992px        
lg       -> จะทำงานในช่วง >=992px, <1200px       
xl       -> จะทำงานในช่วง >=1200px, <1400px      
xxl      -> จะทำงานในช่วง >=1400px       

such as...
(In HTML)
    <div class="container">
        <div class="row">
            <div class="col-sm-2 ">Hello😎</div> 
            <div class="col-sm-4 ">HelloHello🌹</div>
            <div class="col-sm-6 ">HelloHello🤙</div>
        </div>
    </div>

    col-sm-2 -> จะทำงานเมื่อความกว้างของหน้าจอ >= 576px เท่านั้น
    col-sm-4, col-sm-6 ก็เช่นกัน

โดยใน element สามารถกำหนดได้หลาย breakpoint 
such as...

(In HTML)
    <div class="container">
        <div class="row">
            <div class="col-sm-2 col-md-4 col-lg-12">Hello😎</div> 
            <div class="col-sm-4 col-md-4 col-lg-12">HelloHello🌹</div>
            <div class="col-sm-6 col-md-4 col-lg-12">HelloHello🤙</div>
        </div>
    </div>

- แบบฝึกหัด
https://appbrewery.github.io/bootstrap-layout/

- bootstrap link for breakpoints document 
https://getbootstrap.com/docs/5.3/layout/breakpoints/


## 66.Bootstrap Components

- Buttons 
ใช้งานป่มได้เราต้องประกาศ class="btn" จากนั้นถึงเลือก รูปแบบปุ่มโดย กำหนดใน 
class such as...
    In HTML
    <button type="button" class="btn btn-danger" >OK</button> 

- Cards
เป็นรูปแบบ card ซึ้งเราสามารถใส่ภาพ พร้อมเนิ้นหาได้

- Navbar
เป็นแทบด้านบนสามารถใส่ element อื่นๆได้

* spacing 
    this is property
    m - margin 
    p - padding

    this is sides
    t - margin-top, padding-top
    b - margin-button, padding-button
    s - margin-left, padding-left
    e - margin-right, padding-right
    x - to control *-left, *-right
    y - to control *-top, *-button

    size have 0 to 5 

    such as...
        mt-5,
        px-5,
        my-3

* dark mode 
    <html lang="en" data-bs-theme="dark">

- Bootstrap Templates
    https://w3schools.com/bootstrap/bootstrap_templates.asp

    

    

