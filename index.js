var numberOfSongButtons = document.querySelectorAll(".button").length;

for (var i = 0; i < numberOfSongButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
       playSong(buttonInnerHTML);
       
    });
    document.querySelectorAll("button")[i].addEventListener("dblclick", function(){
        var pauseOnDouble = this.innerHTML;
        pauseSong(pauseOnDouble);
    });

}

document.addEventListener("keydown", function(event){
    playSong(event.key);
});

var audio = new Audio("sounds/Sunflower.mp3");
var audi = new Audio("sounds/Obsessed.mp3");
var baarishein = new Audio("sounds/Baarishein.mp3");
var bye = new Audio("sounds/Bye.mp3");
var chodiyon = new Audio("sounds/Tu-Chodiyon.mp3");
var baller = new Audio("sounds/Baller.mp3");
var vaaste = new Audio("sounds/Tere Vaaste.mp3");
var bedardeya = new Audio("sounds/O Bedardeya.mp3");
var mann = new Audio("sounds/Mann Mera.mp3");
var excuses = new Audio("sounds/Excuses.mp3");


function playSong(key)
{
    switch (key) {
        case "A":
            audio.play();
            break;
        case "B":
            audi.play();
            break;
        case "C":
            baarishein.play();
            break;
        case "D":
            bye.play();
            break;
        case "E":
            chodiyon.play();
            break;
        case "F":
            baller.play();
            break;
        case "G":
            vaaste.play();
            break;
        case "H":
            bedardeya.play();
            break;
        case "I":
            mann.play();
            break;
        case "J":
            excuses.play();
            break;

    
        default: console.log(key);
            
    }
}


function pauseSong(key) {
    switch (key) {
        case "A":
            audio.pause();
            break;
        case "B":
            audi.pause();
            break;
         case "C":
            baarishein.pause();
            break;
        case "D":
            bye.pause();
            break;
        case "E":
            chodiyon.pause();
            break;
            case "F":
            baller.pause();
            break;
        case "G":
            vaaste.pause();
            break;
        case "H":
            bedardeya.pause();
            break;
        case "I":
            mann.pause();
            break;
        case "J":
            excuses.pause();
            break;
      
        default: console.log(key);
    }
}