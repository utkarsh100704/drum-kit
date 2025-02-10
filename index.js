var a = document.querySelectorAll(".set button");
for(var i = 0; i<a.length;i++){
        a[i].addEventListener("click", function () {
            var detector = this.innerHTML;
            sound(detector);
            flash(detector);           
    })
}
document.addEventListener("keypress", function(event){
    var k=event.key;
    sound(k);
    flash(k);
})

   
function sound(drum){
    switch(drum){
        case "w":
            var tom1= new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;               
        case "j":
            var snare= new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash= new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick= new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}
function flash(pressedKey){
    var flashBuuton = document.querySelector("." + pressedKey);
    flashBuuton.classList.add("pressed");
    setTimeout(function(){
        flashBuuton.classList.remove("pressed");
    }, 100);

}
