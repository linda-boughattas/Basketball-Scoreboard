let homePoints = 0
let guestPoints = 0

document.getElementById("home_points").textContent = homePoints
document.getElementById("guest_points").textContent = guestPoints

let home = document.getElementById("home_points")
let guest = document.getElementById("guest_points")

function hPlus1(){
    homePoints += 1
    home.textContent=homePoints
}
function hPlus2(){
    homePoints += 2
    home.textContent=homePoints
}
function hPlus3(){
    homePoints += 3
    home.textContent=homePoints
}

function gPlus1(){
    guestPoints += 1
    guest.textContent=guestPoints
}
function gPlus2(){
    guestPoints += 2
    guest.textContent=guestPoints
}
function gPlus3(){
    guestPoints += 3
    guest.textContent=guestPoints
}
function restart(){
    console.log("game ended with a score: " + homePoints + " - " + guestPoints)
    homePoints = 0
    guestPoints = 0
    home.textContent=homePoints
    guest.textContent=guestPoints
}