

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


// canvas 

var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0, 0.3)';

c.fillRect(200, 200, 100, 100)
c.fillRect(400, 100, 100, 100)
c.fillRect(100, 500, 100, 100)

// Triangle
// put these into arrays
// function drawTriangle() {
//     var height = 200 * Math.cos(Math.PI / 6); 

//     c.beginPath(); 
//     c.moveTo(100, 300);
//     c.lineTo(300, 300);
//     c.lineTo(200, 300 - height);
//     c.closePath();

//     c.lineWidth = 10;
//     c.strokeStyle = "pink";
//     c.stroke();

//     c.fillStyle = "pink";
//     c.fill()
// }

// drawTriangle();


 
// draws the triangel 
function Triangle(x, y, dy, color) {
    this.x = x;
    this.y = y;
    this.dy = -dy;
    this.color = color;

    this.draw = function() {

        var height = 200 * Math.cos(Math.PI / 6); 

        c.beginPath(); 
        c.moveTo(100+this.x, this.y);
        c.lineTo(300+this.x, this.y);
        c.lineTo(200+this.x, this.y - height);
        c.closePath();
    
        c.lineWidth = 10;
        c.strokeStyle = this.color;
        c.stroke();
    
        c.fillStyle = this.color;
        c.fill()

    }

    this.update = function() {
        if (this.y < 0) {
            this.y = 600
        }
        this.y += this.dy;

        this.draw();
    }
};



// array of colors given to the triangles drawn
var colorArray = [
    '#e25f99', '#ec6aa4','#e6639d','#e3609a', '#e967a1', '#fe7cb6','#f16fa9', '#f774ae', '#e5639d', '#ed6ba5'
]

// stores all of the arrays drawn in the for loop
var triangleArray = []; 

// loop creating 50 seperate triangle objects with individual ?stats?
for (var i = 0; i < 50; i++) {
    var x = getRandomNumber(300, 700);
    var y = 600;
    var dy = getRandomNumber(0.5, 1);
    var color = colorArray[Math.floor(Math.random() * colorArray.length)]; 
    triangleArray.push(new Triangle(x, y, dy, color));
};



// randomizes where on the x-axis the triangle will be drawn
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(triangleArray)

// the animation funtion moving triangles up and down 

function scroll() {
    requestAnimationFrame(scroll);
    c.clearRect(0, 0, innerWidth, innerHeight);

  

    for (var i = 0; i < triangleArray.length; i++){
        triangleArray[i].update();
    }


    
   
}

scroll();


// for loop for the tirangles, have it spawn a new one every time one goes over the limit and despawns
// for () {
//     var speedY = Math.random(); // within certain limits, the speed the triangels go up
    
//     var width = Math.random(); // within certain limits, 
//     var color = // choosing a random color out of a array of x amounts of colors into fill.style


// }


// // circle 
// c.beginPath();
// c.arc(600, 600, 40, Math.PI * 2, false);
// c.stroke();