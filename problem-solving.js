/*
  1) UNDERSTAND THE PROBLEM:
      The first step to solving a problem is understanding exactly what the problem is. If you don’t understand the problem, you won’t know when you’ve successfully solved it and 
      may waste a lot of time on a wrong solution. To gain clarity and understanding of the problem, write it down on paper, "REWORD IT IN PLAIN ENGLISH" until it makes sense to 
      you, and "DRAW DIAGRAMS" if that helps. When you can explain the problem to someone else in plain English, you understand it.

  2) PLAN + PSEUDOCODE:
      Now that you know what you’re aiming to solve, don’t jump into coding just yet. It’s time to plan out how you’re going to solve it first. Some of the questions you should 
      answer at this stage of the process:

      - Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

      - What inputs will your program have? Will the user enter data or will you get input from somewhere else?

      - What’s the desired output?

      - Given your inputs, what are the steps necessary to return the desired output?

      The last question is where you will write out an algorithm to solve the problem. You can think of an algorithm as a recipe for solving a particular problem. It defines the steps 
      that need to be taken by the computer to solve a problem in pseudocode.

      +PLUS+

      Pseudocode is writing out the logic for your program in natural language instead of code. It helps you slow down and think through the steps your program will have to go 
      through `to solve the problem. Below is an example of what the pseudocode for a simple program that prints all numbers up to an inputted number might look like:

      1)  When the user inputs a number
      2)  Initialize a counter variable and set its value to zero
      3)  While counter is smaller than user inputted number increment the counter by one
      4)  Print the value of the counter variable

  3) DIVIDE AND CONQUER (IMPLEMENT):
      From your planning, you should have identified some subproblems of the big problem you’re solving. Each of the steps in the algorithm we wrote out in the last section are 
      subproblems. "PICK THE SMALLEST OR SIMPLEST SUBPROBLEM AND START THERE WITH CODING". It’s important to remember that you might not know all the steps that you might need up 
      front, so your algorithm may be incomplete -— this is fine. "GETTING STARTED WITH AND SOLVING ONE OF THE SUBPROBLEMS YOU HAVE IDENTIFIED IN THE PLANNING STAGE OFTEN REVEALS 
      THE NEXT SUBPROBLEM YOU CAN WORK ON". Or, if you already know the next subproblem, it’s often simpler with the first subproblem solved. Many beginners try to solve the big 
      problem in one go. Don’t do this. If the problem is sufficiently complex, you’ll get yourself tied in knots and make life a lot harder for yourself. "DECOMPOSING PROBLEMS 
      INTO SMALLER AND EASIER TO SOLVE SUBPROBLEMS IS A MUCH BETTER APPROACH." Decomposition is the main way to deal with complexity, making problems easier and more approachable 
      to solve and understand. "IN SHORT, BREAK THE BIG PROBLEM DOWN AND SOLVE EACH OF THE SMALLER PROBLEMS UNTIL YOU’VE SOLVED THE BIG PROBLEM."



SOLVING FIZZ BUZZ:

  1) UNDERSTAND THE PROBLEM:
      Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number 
      and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz. This is the big picture problem we will be solving. It’s 
      pretty simple so we may not need to reword it. But we can always make it clearer by rewording it. Write a program that allows the user to enter a number, print each number 
      between one and the number the user entered, but for numbers that divide by 3 without a remainder print Fizz instead. For numbers that divide by 5 without a remainder print 
      Buzz and finally for numbers that divide by both 3 and 5 without a remainder print FizzBuzz.

  2) PLAN + PSEUDOCODE:
    Does your program have an interface? What will it look like? Our FizzBuzz solution will be a browser console program, so we don’t need an interface. The only user interaction 
    will be allowing users to enter a number. What inputs will your program have? Will the user enter data or will you get input from somewhere else? The user will enter a number 
    from a prompt (popup box). What’s the desired output? The desired output is a list of numbers from 1 to the number the user entered. But each number that is divisible by 3 
    will output Fizz, each number that is divisible by 5 will output Buzz and each number that is divisible by both 3 and 5 will output FizzBuzz. Given your inputs, what are the 
    steps necessary to return the desired output? The algorithm in pseudocode for this problem:

    A)  When a user inputs a number
    B)  Loop from 1 to the entered number
    C)  If the current number is divisible by 3 then print "Fizz"
    D)  If the current number is divisible by 5 then print "Buzz"
    E)  If the current number is divisible by 3 and 5 then print "FizzBuzz"
    F)  Otherwise print the current number

  3) DIVIDE AND CONQUER (IMPLEMENT):
    As we can see from the algorithm we developed, the first subproblem we can solve is getting input from the user. So let’s start there and verify it works by printing the 
    entered number. With JavaScript, we’ll use the “prompt” method.
 */

//  A)
let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

/*
  The above code should create a little popup box that asks the user for a number. The input we get back will be stored in our variable answer. Note: We wrapped the prompt call 
  in a parseInt function so that a number is returned from the user’s input. With that done, let’s move on to the next subproblem: “Loop from 1 to the entered number”. There are 
  many ways to do this in JavaScript. One of the common ways - that you actually see in many other languages like Java, C++, and Ruby - is with the for loop:
*/

//  B)
let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 1; i <= answer; i++) {
  console.log(i);
}

//  With that working, let’s move on to the next problem: If the current number is divisible by 3, then print Fizz.

//  C)
let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

/*
  The program is starting to take shape. The final few subproblems should be easy to solve as the basic structure is in place and they are just different variations of the condition 
  we’ve already got in place. Let’s tackle the next one: If the current number is divisible by 5 then print Buzz.
*/

//  D)
let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//  We have one more subproblem to solve to complete the program: If the current number is divisible by 3 and 5 then print FizzBuzz.

let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*
  The first condition now checks if i is divisible by 3 and 5 instead of checking if i is just divisible by 3. We’ve had to do this because if we kept it the way it was, 
  it would run the first condition if (i % 3 === 0), so that if i was divisible by 3, it would print Fizz and then move on to the next number in the iteration, even if 
  i was divisible by 5 as well. The program is now complete!
*/
