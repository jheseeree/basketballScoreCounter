let homeScore = 0;
let guestScore = 0;

var homeDisplay = document.getElementById('home_display');
var guestDisplay = document.getElementById('guest_display');

function addHome(score) {
    homeScore = homeScore + score;
    homeDisplay.innerText = homeScore;
}

function addGuest(score) {
    guestScore = guestScore + score;
    guestDisplay.innerText = guestScore;
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeDisplay.innerText = 0;
    guestDisplay.innerText = 0;
}