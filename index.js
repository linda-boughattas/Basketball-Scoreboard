// Set the countdown duration in minutes
var countdownMinutes = 5 // Example: 5 minutes countdown
var countDownDate = new Date().getTime() + countdownMinutes * 60 * 1000

let homePoints = 0
let guestPoints = 0

document.getElementById("home_points").textContent = homePoints
document.getElementById("guest_points").textContent = guestPoints

let home = document.getElementById("home_points")
let guest = document.getElementById("guest_points")
let leadertxt = document.getElementById("leader")


function updateLeader() {
    let leader;
    if (homePoints > guestPoints) {
        leader = "Leader: Home"
    } else if (guestPoints > homePoints) {
        leader = "Leader: Guest"
    } else {
        leader = "Leader: none"
    }
    leadertxt.textContent = leader
}

function hPlus1(){
    homePoints += 1
    home.textContent = homePoints
    updateLeader()
}
function hPlus2(){
    homePoints += 2
    home.textContent = homePoints
    updateLeader()
}
function hPlus3(){
    homePoints += 3
    home.textContent = homePoints
    updateLeader()
}

function gPlus1(){
    guestPoints += 1
    guest.textContent = guestPoints
    updateLeader()
}
function gPlus2(){
    guestPoints += 2
    guest.textContent = guestPoints
    updateLeader()
}
function gPlus3(){
    guestPoints += 3
    guest.textContent = guestPoints
    updateLeader()
}

var x; // Declare the interval variable in a higher scope

function startTimer() {
    x = setInterval(function() {

        // Get current date and time
        var now = new Date().getTime()
        
        // Find the distance between now and the countdown date
        var distance = countDownDate - now;
        
        // Time calculations for minutes and seconds
        var minutes = Math.floor(distance / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)
        
        // Output the result in an element with id="timer"
        document.getElementById("timer").innerHTML = minutes + ": " + (seconds < 10 ? '0' : '') + seconds 
        
        // If the countdown is over, write some text 
        if (distance < 0) {
            clearInterval(x)
            document.getElementById("timer").innerHTML = "EXPIRED"
        }
    }, 1000)
}

function restart(){
    console.log("game ended with a score: " + homePoints + " - " + guestPoints)
    homePoints = 0
    guestPoints = 0
    countDownDate = new Date().getTime() + countdownMinutes * 60 * 1000
    home.textContent = homePoints
    guest.textContent = guestPoints
    updateLeader()
    clearInterval(x) // Clear the existing interval
    startTimer() // Start a new timer
}

startTimer() // Start the initial timer
updateLeader() // Update the leader text initially


//js functions proposed by chatgpt clearinterval() and setinterval()