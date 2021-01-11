let simonArr = [];
let playerArr = [];
const audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3") // Figured out how to add sounds from here https://stackoverflow.com/questions/9419263/how-to-play-audio
const audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3") // found some free hosted mp3s from the medium article https://medium.com/front-end-weekly/create-simon-game-in-javascript-d53b474a7416
const audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
const audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")

// Initial start button functionality
document.querySelector("#begin").addEventListener("click", function(e) {
    simonArr = [];
    nextRound();
})

// Color buttons functionality
document.querySelector("#green").addEventListener("click", function(e) {
    playerArr.push("green");
    audio1.play();
    check(simonArr, playerArr);
})
document.querySelector("#red").addEventListener("click", function(e) {
    playerArr.push("red");
    audio2.play();
    check(simonArr, playerArr);
})
document.querySelector("#yellow").addEventListener("click", function(e) {
    playerArr.push("yellow");
    audio3.play();
    check(simonArr, playerArr);
})
document.querySelector("#blue").addEventListener("click", function(e) {
    playerArr.push("blue");
    audio4.play();
    check(simonArr, playerArr);
})

// Next Round and Check function definitions
let nextRound = () => {
    document.querySelector("#begin").textContent = "playing...";
    document.querySelector("#begin").style.backgroundColor = "white";
    document.querySelector("h1").classList.add("hideshow");
    playerArr = [];
    let color = Math.floor(Math.random() * 4) + 1;
    if (color == 1) {
        simonArr.push("green");
        setTimeout(function() {
            audio1.play();
        }, 500);
    }
    else if (color == 2) {
        simonArr.push("red");
        setTimeout(function() {
            audio2.play();
        }, 500);
    }
    else if (color == 3) {
        simonArr.push("yellow");
        setTimeout(function() {
            audio3.play();
        }, 500);
    }
    else if (color == 4) {
        simonArr.push("blue");
        setTimeout(function() {
            audio4.play();
        }, 700);
    }
    
    let index = 0;
    let interval = setInterval(function() {           // Learned about setInterval and setTimeout from https://www.w3schools.com/js/js_timing.asp
        document.querySelector(".simon").style.backgroundColor = simonArr[index++];
        let whiteInterval = setTimeout(function() {
            document.querySelector(".simon").style.backgroundColor = "white";
        }, 700);
        if (index == simonArr.length) {
            clearInterval(interval);
        }
    }, 1000);
    console.log(simonArr);
}

let check = (a, b) => {
    if (a.length === b.length && a.every((v, i) => v === b[i])) { // found an efficient method for comparing 2 arrays at this URL: https://www.30secondsofcode.org/blog/s/javascript-array-comparison
        document.querySelector("h1").textContent = "Correct!";
        document.querySelector("h1").classList.remove("hideshow");
        let winWait = setTimeout(function() {
            nextRound();
        }, 500);
    } 
    else if (a.length === b.length && a.every((v, i) => v !== b[i])) {
        document.querySelector("h1").textContent = "Incorrect. Start Over"
        document.querySelector("h1").classList.remove("hideshow");
        document.querySelector("#begin").textContent = "Retry";
        document.querySelector("#begin").style.backgroundColor = "orange";
    }    
}

