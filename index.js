// #### CW1
// Print -10 through 5 using a counter and while loop.
//
//
console.log("EX 1")
var x=6;
var a=-11;

while (x>=-6 && x--)
{
    console.log(x)
}
while (a>=-11 && a++)
{
    console.log(a)
}

// NOTE : Count form -10 through 5 using a counter. You are counting from 5 to 0 and -5 to 0 using conditions


//     #### CW2
// Write a While loop that counts backwards from 10 to 0
// Log the current count at the end of each iteration EXCEPT if the current count is ```5```
//
console.log("EX 2")
var x=11;
while (x<=11 && x--)
{
    if (x===5)
        console.log(" ");
    else
    {console.log(x);}
}

// Partial Credit : Good start but you should not be printing anything when x is equal to 5. Try working with the code snippet below.
// if(x!==5){
// 	console.log(x)
// }


// #### CW3
// Asks the user ```Enter a word. Enter 'q' to quit.``` Create a while loop that will not quit until they enter 'q'.

var eNter=prompt("Enter a word");
var Quit=prompt("Enter 'q' to quit");

// while (eNter!=="q")
// {
//     if (eNter!)
//         console.log("Bye");
//     else
//         (!Quit)


// }



//
//     HINT: Use ```true``` condition so loop continues forever and ```break``` to exit the loop
//
//
// #### Extra
// Expand your knowledge of Loops by reading the Loop and Iteration section on MDN:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// var Kounter=10
// while (Kounter<=10 && Kounter--);
// {
//     console.log(Kounter)
    
