window.onload = function() {
    var point;
    var player;
    var different;
    for( var i=0; i<=1; i++) {

        point = Math.floor(Math.random() * 6) + 1;
        if(i===0) {
            player = ".img1"; 
            different = point;
        }
        else {
            player = ".img2"; 
            if(different > point) {
                document.querySelector("h1").innerHTML = "Player 1 win!";
            }
            else if(different < point) {
                document.querySelector("h1").innerHTML = "Player 2 win!";
            }
            else {
                document.querySelector("h1").innerHTML = "Draw!";
            }
        }
        
        switch (point) {
        case 1:  {document.querySelector(player).setAttribute("src", "images/dice1.png"); break;}
        case 2:  {document.querySelector(player).setAttribute("src", "images/dice2.png"); break;}
        case 3:  {document.querySelector(player).setAttribute("src", "images/dice3.png"); break;}
        case 4:  {document.querySelector(player).setAttribute("src", "images/dice4.png"); break;}
        case 5:  {document.querySelector(player).setAttribute("src", "images/dice5.png"); break;}
        default: {document.querySelector(player).setAttribute("src", "images/dice6.png"); break;}
        }
    }

  
}