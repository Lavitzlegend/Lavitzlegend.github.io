let count = 0;
const simonArr = [];
let playerArr = [];

document.querySelector("#begin").addEventListener("click", function(e) {
    document.querySelector("h1").classList.add("hideshow");
    playerArr = [];
    let color = Math.floor(Math.random() * 4) + 1;
    if (color == 1) {
        simonArr.push("green");
    }
    else if (color == 2) {
        simonArr.push("red");
    }
    else if (color == 3) {
        simonArr.push("yellow");
    }
    else if (color == 4) {
        simonArr.push("blue");
    }
    
    let index = 0;
    
    let interval = setInterval(function() {
        document.querySelector(".simon").style.backgroundColor = simonArr[index++];
        let whiteInterval = setTimeout(function() {
            document.querySelector(".simon").style.backgroundColor = "white";
        }, 500);
        if (index == simonArr.length) {
            clearInterval(interval);
        }
    }, 1000);
    console.log(simonArr);
})


document.querySelector("#green").addEventListener("click", function(e) {
    // console.log(playerArr);
    playerArr.push("green");
    check(simonArr, playerArr);
    document.querySelector("#begin").style.color = "lightgreen";
})
document.querySelector("#red").addEventListener("click", function(e) {
    // console.log(playerArr);
    playerArr.push("red");
    check(simonArr, playerArr);
    document.querySelector("#begin").style.color = "lightgreen";
})
document.querySelector("#yellow").addEventListener("click", function(e) {
    // console.log(playerArr);
    playerArr.push("yellow");
    check(simonArr, playerArr);
    document.querySelector("#begin").style.color = "lightgreen";
})
document.querySelector("#blue").addEventListener("click", function(e) {
    // console.log(playerArr);
    playerArr.push("blue");
    check(simonArr, playerArr);
    document.querySelector("#begin").style.color = "lightgreen";
})

let nextRound = () => {
    document.querySelector("h1").textContent = "Correct! Press Next Round to continue"
}
let check = (a, b) => {
    if (a.length === b.length && a.every((v, i) => v === b[i])) { // found an efficient method for comparing 2 arrays at this URL: https://www.30secondsofcode.org/blog/s/javascript-array-comparison
        document.querySelector("h1").textContent = "Correct!";
        nextRound();
    }
    else {
        document.querySelector("h1").textContent = "Incorrect. Please refresh page to start over"
    }    
}

document.querySelector("#check").addEventListener("click", function(e) {
    document.querySelector("h1").classList.remove("hideshow");
    check(simonArr, playerArr);
})
