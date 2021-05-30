document.addEventListener("keypress",function(){
    setInterval(function () {
        audio = new Audio('sound.mp3');
        audio.play(); 
    }, 3000);

});
