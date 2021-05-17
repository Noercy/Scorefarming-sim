var gameData = {
    score: 0,
    scorePerClick: 1,
    scorePerClickCost: 10
}

function Score() {
    gameData.score += gameData.scorePerClick,
    document.getElementById("scoreGained").innerHTML = gameData.score + " Score Gained"
}

function buyScorePerClick() {
    if (gameData.score >= gameData.scorePerClickCost) {
        gameData.score -= gameData.scorePerClickCost
        gameData.scorePerClick += 1
        gameData.scorePerClickCost *= 2
        document.getElementById("scoreGained").innerHTML = gameData.score + " Score Gained"
        document.getElementById("perScoreUpgrade").innerHTML = "Upgrade KB (currently level " + gameData.scorePerClick + ") Cost :" + gameData.scorePerClickCost + " Score"
    }
}

var mainGameLoop = window.setInterval(function() {
    Score()
}, 1000)


var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("scoreFarmSave", JSON.stringify(gameData))
}, 1500)

var savegame = JSON.parse(localStorage.getItem("scoreFarmSave"))
if (savegame !== null) {
    gameData = savegame
} 

let triangle1;
let triangle2;
let triangle3; 

function setup() {
    createCanvas(600, 400); 
    
}
var list = [


]