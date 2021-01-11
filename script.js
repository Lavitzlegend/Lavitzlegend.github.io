let simonArr = [];
let playerArr = [];
const audio0 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3") // Figured out how to add sounds from here https://stackoverflow.com/questions/9419263/how-to-play-audio
const audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3") // found some free hosted mp3s from the medium article https://medium.com/front-end-weekly/create-simon-game-in-javascript-d53b474a7416
const audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
const audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")

// Initial start button functionality
document.querySelector("#begin").addEventListener("click", function(e) {
    simonArr = [];
    nextRound();
})




// Color buttons functionality
document.querySelector("#green").addEventListener("click", function(e) {
    playerArr.push("green");
    audio0.play();
    check(simonArr, playerArr);
})
document.querySelector("#red").addEventListener("click", function(e) {
    playerArr.push("red");
    audio1.play();
    check(simonArr, playerArr);
})
document.querySelector("#yellow").addEventListener("click", function(e) {
    playerArr.push("yellow");
    audio2.play();
    check(simonArr, playerArr);
})
document.querySelector("#blue").addEventListener("click", function(e) {
    playerArr.push("blue");
    audio3.play();
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

    document.querySelector("#green").style.backgroundColor = "white";
    document.querySelector("#red").style.backgroundColor = "white";
    document.querySelector("#yellow").style.backgroundColor = "white";
    document.querySelector("#blue").style.backgroundColor = "white";

    let index = 0;
    let interval = setInterval(function() {           // Learned about setInterval and setTimeout from https://www.w3schools.com/js/js_timing.asp
        if (index < simonArr.length) {
            if (simonArr[index] === "green") {
                // document.querySelector(".simon").style.backgroundColor = simonArr[index];
                document.querySelector("#green").style.backgroundColor = simonArr[index];
                let colorInterval = setTimeout(function() {
                    document.querySelector("#green").style.backgroundColor = "white";
                }, 700);
                audio0.play();
            }
            else if (simonArr[index] === "red") {
                // document.querySelector(".simon").style.backgroundColor = simonArr[index];
                document.querySelector("#red").style.backgroundColor = simonArr[index];
                let colorInterval = setTimeout(function() {
                    document.querySelector("#red").style.backgroundColor = "white";
                }, 700);
                audio1.play();
            }
            else if (simonArr[index] === "yellow") {
                // document.querySelector(".simon").style.backgroundColor = simonArr[index];
                document.querySelector("#yellow").style.backgroundColor = simonArr[index];
                let colorInterval = setTimeout(function() {
                    document.querySelector("#yellow").style.backgroundColor = "white";
                }, 700);
                audio2.play();
            }
            else if (simonArr[index] === "blue") {
                // document.querySelector(".simon").style.backgroundColor = simonArr[index];
                document.querySelector("#blue").style.backgroundColor = simonArr[index];
                let colorInterval = setTimeout(function() {
                    document.querySelector("#blue").style.backgroundColor = "white";
                }, 700);
                audio3.play();
            }
            // let whiteInterval = setTimeout(function() {
            //     document.querySelector(".simon").style.backgroundColor = "white";
            // }, 700);
            index++
        }
        else if (index == simonArr.length) {
            document.querySelector("#green").style.backgroundColor = "green";
            document.querySelector("#red").style.backgroundColor = "red";
            document.querySelector("#yellow").style.backgroundColor = "yellow";
            document.querySelector("#blue").style.backgroundColor = "blue";
            clearInterval(interval);
        }
    }, 1000);
    console.log(simonArr);    
}

let check = (a, b) => {
    let notEqual = "true";
    if (a.length === b.length && a.every((v, i) => v === b[i])) { // found an efficient method for comparing 2 arrays at this URL: https://www.30secondsofcode.org/blog/s/javascript-array-comparison
        document.querySelector("h1").textContent = "Correct!";
        document.querySelector("h1").classList.remove("hideshow");
        let winWait = setTimeout(function() {
            nextRound();
        }, 500);
        notEqual = "false"
    } 
    else if (a.length === b.length && notEqual === "true") {
                document.querySelector("h1").textContent = "Incorrect. Start Over"
                document.querySelector("h1").classList.remove("hideshow");
                document.querySelector("#begin").textContent = "Retry";
                document.querySelector("#begin").style.backgroundColor = "orange";
    }
}

