# Project 1 - Simon-Says

[Game Link](https://lavitzlegend.github.io/)

![SimonSaysProject1](https://user-images.githubusercontent.com/74753181/104479248-d2792500-5588-11eb-8751-1ab814fca0e7.png)

## Preview

This is my take on the Simon Says memory game/toy.

## Technology Used

- Vanilla javascript, css and html.
- I linked a font from fonts.googleapis.
- LocalStorage feature of the browser was utilized for highscores.

## Theory

The main functionality of this game uses an array for Simon that adds a randomly generated color (green, red, yellow, or blue) and an array created when the player clicks one of the 4 sections of the colored circle. When the Simon array has a random color added, it then displays all the colors in order that are currently in the array. After it finishes displaying Simon's colors, the game board backgrounds light up with their respective colors indicating to the player it is their turn to go. 

With event listeners on all the different parts of the circle the player array is created as they click. Once the array lengths are the same, it automatically runs the check() function that loops through both arrays checking that all the values are the same. If true, run the nextRound() function which will add an extra random color to the Simon array while completely starting over the player array.
   
## How The Win Condition Is Determined

The check() function was inspired by some information I found online learning about a.every((v, i) => v === b[i]). This is a very efficient way of looping through every index in both arrays and comparing them to ensure they are equal. After each time the player clicks one of the colors, the check function runs if Simon array.length === Player array.length. 

If the player creates an array that is the same length as Simon but doesn't have the same values, a message is displayed to them stating they are incorrect and there is a button displayed to Retry which starts over from round 1.
   
## Main Features

- Random number generator from 1 to 4 associated to a color
- Audio files to play when colors are displayed for Simon Array and when the player clicks the colors
- Background color changing in the game circle as well as corresponding messages to inform the player what's happening
- setInterval() and setTimeout() functions to handle the color and message display timings
- A highscore table kept in browser storage to check if array.length is bigger than any previous game played
- If new highscore, a form is displayed for user to enter their name and submit which then updates the tables with that value as well as their array.length

## What's left?

I achieve the Minimum Viable Product as well as all of my stretch goals. The only issue I see currently that can be a little confusing to the player is that if you are doing the same color twice in a row, if the user clicks too quickly you will only hear the sound for that color play once even though the player array has received 2 values. 

However, I had some additional ideas come up as I was coding. Adding functionality for a "difficulty" setting that can speed up or slow down the game would be nice. Also, getting the highscores form to be a popup instead of just displaying on the page would be nice.

<!-- ## Game Screenshot
[Screenshot Link](https://lavitzlegend.github.io/SimonSaysProject1.png) -->
