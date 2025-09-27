for(var i=0; i<document.querySelectorAll("button").length; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function () { 
        console.log(this.innerHTML);

        const soundMap = {
            "w": "tom-1",
            "a": "tom-2",
            "s": "tom-3",
            "d": "tom-4",
            "j": "snare",
            "k": "crash",
            "l": "kick-bass"
        }

        if (soundMap[this.innerHTML]) {
            var sound = new Audio("sounds/" + soundMap[this.innerHTML] + ".mp3");
            sound.play();
        } else {
            console.log("No sound mapped for this button: " + this.innerHTML);
        }
    });
    
}

