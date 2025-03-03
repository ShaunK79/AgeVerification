
// putting into practice what i have learnt about
// if/else statements

const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');
let aged; // variable set to undefined - get age from text box

// the button
// when we click on the button what we going to do??
mySubmit.onclick = function() { 

    // the script is executed from top to bottom
        aged = myText.value; // get the value from the textbox which 
    // is string data type.
    // because the value from textbox is a string data type we need to 
    // convert it to a number
        aged = Number(aged); // converted text to number
        if(aged >= 100) {
            // the console.log is replaced with resultElement.textContent =
        // console.log('You are too old to enter this site!');
            resultElement.textContent = `You are too old to enter this site!`
        }
        else if(aged == 0) {
            // console.log('You cant enter. You were just born.');
            resultElement.textContent = `You cant enter. You were just born.`
        }
        else if(aged >= 18) {
            // console.log('You are old enough to enter this site.');
            resultElement.textContent = `You are old enough to enter this site.`
        }
        else if(aged < 0) {
            // console.log('Your age cant be below 0');
            resultElement.textContent = `Your age cant be below 0`
        }
        else {
            // console.log('You must be 18+ to enter this site.');
            resultElement.textContent = `You must be 18+ to enter this site.`
        }
}


