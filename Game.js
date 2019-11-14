

	/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. the prompt below confirms that the user is entering a number that is on the lower side of the guessing range, but
 * it makes sure that the number is not lower than , or too high outside the boundary of the range
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the upcoming section requires the user to enter the number that is on the lower side of the guessing range
 * and then confirms that the number entered is an actual number and makes sure that the number is greater than or equal to zero
*/

intMin = parseInt(prompt("Choose the lowest number (but not lower than 0) in your guessing range: "));

while (intMin < 0 || isNaN(intMin))
{
    intMin = parseInt(prompt("Sorry, your lowest number choice is invalid. \n" + "Please choose the lowest number (but not lower than 0) in your guessing range: "));
}
alert("Lowest number = " + intMin);



/* this section below asks the user to enter a number that is on the higher side of the guessing range
 * it then validates that the number entered is an actual number, and makes sure that the
 * number is at least 2 more than the number on the lower side.
*/


intMax = parseInt(prompt("Choose the highest number (at least two higher than your lowest) in your guessing range: "));

while (isNaN(intMax) || intMax < intMin + 2)
{
    intMax = parseInt(prompt("Sorry, your highest number choice is invalid. \n" + "Please choose the highest number (at least two higher than your lowest) in your guessing range: "));
}
alert("Highest number = " + intMax);



/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


intCount = 1;


/* The prompt below is telling the user to enter the number they guess is the random number, the code below
 * makes sure that the number guessed by the user is an actual number and is whithin the given high and low ranges. 
*/
intGuess = parseInt(prompt("Enter your guess"));
while (intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt("The guess is not between " + intMin + " and " + intMax));
}


/*/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */


while (intGuess != intRandom)
{
    if (intGuess < intRandom)
    {
        alert ("Guess is too low");
       
}
else
{
    alert ("Guess is too high");
    
}

intGuess = parseInt(prompt("Enter your guess"));
while (intGuess < intMin || intGuess > intMax || isNaN(intGuess))
  {
    intGuess = parseInt(prompt("The guess is not between " + intMin + " and " + intMax));
  }
 intCount++;
 }
 
 

// The following lines of code prompt an alert that displays the number of attempts it took to guess the number.
alert("Congratulations! You guessed the correct number (" + intRandom +")\n" +
		" and it took you " + intCount + " attempt(s)!");