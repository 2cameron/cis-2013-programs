/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. the prompt below confirms that the user is entering a number that is on the lower side of the guessing range, but
 * it makes sure that the number is not lower than , or too high outside the boundary of the range
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the upcoming section requires the user to enter the number that is on the lower side of the guessing range
 * and then confirms that the number entered is an actual number and makes sure that the number is greater than or equal to zero
*/
intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range:")); //get minimum number 

while (isNaN(intMin) || (intMin <0))//this is confirming that the number is more than 0 
{
    intMin = parseInt(prompt("I'm sorry but your lowest number choice is invalid. \n" + "Please choose the lowest number (but no lower than 0) in your guessing range: "));
}
alert("Lowest number = " + intMin);






/* this section below asks the user to enter a number that is on the higher side of the guessing range
 * it then validates that the number entered is an actual number, and makes sure that the
 * number is at least 2 more than the number on the lower side.
*/
intMax = parseInt(prompt("Choose the highest number (but at least 2 more than your lowest number"));//get maximum number

while (isNaN(intMax) || (intMax < 2 + intMin))/
{
    intMax = parseInt(prompt("I'm sorry but your highest number choice is invalid. \n" + "Please choose the highest highest number (but at least 2 more than your lowest number"));
}
alert("Highest number = " + intMax);

alert("You have " + (intMax - intMin) + " guesses");



intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


intCount = 1;


/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/


intGuess = parseInt(prompt("What is your guess?"));

 while (isNaN(intGuess) || (intMin > intGuess) || (intMax < intGuess))
{
    intGuess = parseInt(prompt("Your number is incorrect. \n" + "Choose a number between your lowest and highest number"));
 }
/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */



while (intGuess != intRandom)
    {
        if (intGuess < intRandom)
        {
            alert("Guess is too low. Try Again.");
        }
        else
            {
                alert("Guess is too high. Try Again.");
               
            }
        intCount++;
    
    
    intGuess = parseInt(prompt("Choose a number between your lowest and highest number")); 
while (isNaN(intGuess) || (intMin > intGuess) || (intMax < intGuess))
{
    intGuess = parseInt(prompt("Your number is incorrect. \n" + "Choose a number between your lowest and highest number"));
 }
    }
 
 
 

// The following lines of code prompt an alert that displays the number of attempts it took to guess the number.
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
© 2019 GitHub, Inc.