var sound1 = new Audio("Ambulance.mp3");
var sound2 = new Audio("Heartbeat.mp3");
var sound3 = new Audio("Beep.mp3");
var sound4 = new Audio("Bang.mp3");
var sound5 = new Audio("Flatline.mp3")
var sound6 = new Audio("Police Siren.mp3")
var sound7 = new Audio("Hospital.mp3")
function StopAudio() {
    sound1.pause();
    sound2.pause();
    sound3.pause();
    sound4.pause();
    sound5.pause();
    sound6.pause();
    sound7.pause();
};
window.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
        case 49:
            sound1.play();
            break;
        case 50:
            sound2.play();
            break;
        case 51:
            sound3.play();
            break;
        case 52:
            sound4.play();
            break;
        case 53:
            sound5.play();
            break;
        case 54:
            sound6.play();
            break;
        case 55:
            sound7.play();
            break;
        case 32:
            StopAudio();
            break;
    }
});
function eyesHurt(){
    document.getElementById("body").style.backgroundColor = "#3c3f43";
    document.getElementById("eyesHurt").innerHTML = "Go Back.";
    document.getElementById("eyesHurt").setAttribute("onclick","goBack()");
};
function goBack(){
    document.getElementById("body").style.backgroundColor = "#ff00ff";
    document.getElementById("eyesHurt").innerHTML = "Click This if your eyes hurt.";
    document.getElementById("eyesHurt").setAttribute("onclick","eyesHurt()");
};