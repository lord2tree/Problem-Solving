/*

  So, what should you do when you encounter a new problem? Here are the steps:

  
    1. UNDERSTAND (“IF YOU CAN’T EXPLAIN SOMETHING IN SIMPLE TERMS, YOU DON’T UNDERSTAND IT.”)

    Know exactly what is being asked. Most hard problems are hard because you don’t understand them (hence why this is the first step).

    How to know when you understand a problem? When you can explain it in plain English.

    Do you remember being stuck on a problem, you start explaining it, and you instantly see holes in the logic you didn’t see before?

    Most programmers know this feeling.

    This is why you should write down your problem, doodle a diagram, or tell someone else about it (or thing… some people use a rubber duck).

    “IF YOU CAN’T EXPLAIN SOMETHING IN SIMPLE TERMS, YOU DON’T UNDERSTAND IT.” — Richard Feynman


    
    2. PLAN (“GIVEN INPUT X, WHAT ARE THE STEPS NECESSARY TO RETURN OUTPUT Y?”)
        
    Don’t dive right into solving without a plan (and somehow hope you can muddle your way through). Plan your solution!

    Nothing can help you if you can’t write down the exact steps.

    In programming, this means don’t start hacking straight away. Give your brain time to analyze the problem and process the information.

    To get a good plan, answer this question:

    “GIVEN INPUT X, WHAT ARE THE STEPS NECESSARY TO RETURN OUTPUT Y?”

    Side note: Programmers have a great tool to help them with this… Comments!



    3.  DIVIDE (BREAK THE BIG PROBLEM INTO SUB-PROBLEMS AND SOLVE EACH SUB-PROBLEM ONE BY ONE STARTING WITH THE SIMPLEST AND THEN CONNECT ALL THE SUB-SOLUTION'S)

      Pay attention. This is the most important step of all.

      Do not try to solve one big problem. You will cry.

      Instead, break it into sub-problems. These sub-problems are much easier to solve.

      Then, solve each sub-problem one by one. Begin with the simplest. Simplest means you know the answer (or are closer to that answer).

      After that, simplest means this sub-problem being solved doesn’t depend on others being solved.

      Once you solved every sub-problem, connect the dots.

      Connecting all your “sub-solutions” will give you the solution to the original problem. Congratulations!

      This technique is a cornerstone of problem-solving. Remember it (read this step again, if you must).

      “If I could teach every beginning programmer one problem-solving skill, it would be the ‘reduce the problem technique.’ For example, suppose you’re a new programmer and 
      you’re asked to write a program that reads ten numbers and figures out which number is the third highest. For a brand-new programmer, that can be a tough assignment, even 
      though it only requires basic programming syntax. If you’re stuck, you should reduce the problem to something simpler. Instead of the third-highest number, what about finding 
      the highest overall? Still too tough? What about finding the largest of just three numbers? Or the larger of two? Reduce the problem to the point where you know how to solve 
      it and write the solution. Then expand the problem slightly and rewrite the solution to match, and keep going until you are back where you started.” — V. Anton Spraul



  IF YOUR STUCK:
    
  - Debug: Go step by step through your solution trying to find where you went wrong. Programmers call this debugging (in fact, this is all a debugger does).

  - Reassess: Take a step back. Look at the problem from another perspective. Is there anything that can be abstracted to a more general approach? Side note: 
    Another way of reassessing is starting anew. Delete everything and begin again with fresh eyes. I’m serious. You’ll be dumbfounded at how effective this is.

  - Research: Ahh, good ol’ Google. You read that right. No matter what problem you have, someone has probably solved it. Find that person/ solution. In fact, 
    do this even if you solved the problem! (You can learn a lot from other people’s solutions). Finally use Chat GPT to give you hints or help you understand 
    a concept but be cautious and make sure you understand the solution instead of getting an answer you don't understand and simply copying and pasting code.

*/

/*

  HOW TO THINK LIKE A PROGRAMMER:
    Computers are as smart as a rock therefore we need to be as mind numbingly stupid as a computer. 


    GOOD BEGINNER ADVICE:

      - Programming isn't about languages.

      - The language ultimately doesn't matter.

      - There's not a lot of memorizing.

      - Most programming isn't about math.

      - Programming languages are simpler then human ones.

      - Programming is really about solving problems.

      - it's about explaining things to the idiot computer.


    CODING ISN'T ABOUT LANGUAGE:

      - Coding has only about 8 main concepts.

      - They work in almost the same way in every language.

      - Learn how to use these concepts in english.

      - Write out the concept first, then convert it to code later.

      - Most beginners think they don't understand what code to write.

      - The real problem is they don't really understand the problem they're trying to solve. 
        (they try to figure out how to do it before they try to figure out what to do)


    COMMENTS ARE CODE:
      
      - COMMENTS EXPLAIN CODE TO OTHER PROGRAMMERS OR YOURSELF?

      NO!  NO!  NO!  NO!  NO!  NO! NO!  NO!  NO!  NO!  NO!  NO!

      - CODE EXPLAINS THE COMMENTS TO THE COMPUTER!    <---DANG !!!!

      WRITE YOUR ALGORITHM FIRST THEN CHOOSE YOUR LANGUAGE AND CODE!

*/

/*

1A) NEW VARIABLE: 
    
    A place in memory to store data.

    NAME: what do we call this thing? - TYPE: what type of data does it contain? - INITVAL: what is the staring value?
  
1B) NEW VARIABLE ALGORITHM: (WHAT QUESTION SHOULD I ALWAYS ANSWER WHEN I MAKE A VARIABLE)

    Create a variable called 'NAME' of type 'TYPE' that starts with the value of 'INITVAL'. <---your sentence/comment must answer these questions

1C) NEW VARIABLE PYTHON CODE:

    name = initVal



2A) OUTPUT: 

    Message - text to write to user.

2B) OUTPUT ALGORITHM:

    Output the text message.

2C) OUTPUT PYTHON CODE:

    print ("message")



3A) INPUT: (AN INPUT IMPLIES WE ARE ASKING THE USER A QUESTION - YOU NEED A VARIABLE TO HOLD THE ANSWER AND A QUESTION TO ASK FOR AN ANSWER)

    Variable - where answer from the user will be stored
    Message - question being asked of the user

3B) INPUT ALGORITHM:

    Ask the uer a 'message' and store the answer in a 'variable'

3C) INPUT PYTHON CODE:

    variable = input("message")

    

*/

/*

  PROBLEM: Ask the user for two numbers , and then add them.


  ALGORITHM: (PUT YOUR PLAN IN A TEXT EDITOR)
    Create an integer variable for x
    Create an integer variable for y
    Create an integer variable for sum
    Ask the user for "x: " and put answer in x
    Ask the user for "y: " and put answer in y
    Put x + y in sum
    Tell user "answer is " sum

  
  CONVERT TO COMMENTS:
    # Create an integer variable for x
    # Create an integer variable for y
    # Create an integer variable for sum
    # Ask the user for "x: " and put answer in x
    # Ask the user for "y: " and put answer in y
    # put x + y in sum
    # tell user "answer is " sum

    The above is in fact a very good answer. Its not quite code, but its a great algorithm and it can easily be converted to code.


  FLESH OUT THE COMMENTS:
    # Create an integer variable for x
    x = 0

    # Create an integer variable for y
    y = 0

    # Create an integer variable for sum
    sum = 0

    # Ask the user for "x: " and put answer in x
    x = input("x: ")

    # Ask the user for "y: " and put answer in y
    y = input("y: ")

    # put x + y in sum
    sum = x + y

    # tell user "answer is " sum
    print("Answer is: ")
    print(sum)
  
*/

/*

  FAILURE:

    - This is a normal part of programming.
    
    - Begin debugging.

    - Did you tell it (what to do incorrectly or) how to do it wrong?

    - or Did you tell it to do the wrong thing?

    - Most beginners assume it's an implementation problem when its usually an algorithm problem.

*/

/* 

  HOW TO DEBUG:

    - The best way to debug is not to have bugs.

    - Bad implementation can be googled.

    - Bad algorithms usually cannot.

    - What are you not understanding?

    - What tools can you use?

    - Don't start with a solution 
    
    - Do not solve problems you don't understand, your assumptions are probably adding to the problem, turn of your computer and get to the whiteboard!


  WHITEBOARD: (WHAT HAPPENED HERE?)

    - Easy to assume + sign is broken

    - Thats not really the problem

    - Try print("python" + "meetup")

    - Hmmm. We can add text?

    - I wonder if it thinks "2" and "3" are text?

    - Look up a tool to find out

    - Type function does this!

*/

/*

4A) CONVERT TO INTEGER: 

    oldVariable - in a non integer format

    intVariable - integer to hold results

4B) CONVERT TO INTEGER ALGORITHM:

    convert oldVariable to integer and store in  intVariable 

4C) CONVERT TO INTEGER PYTHON CODE:

    intVariable = int(oldVariable)

*/

/*

  TRY AGAIN WITH NEW TOOL (start fresh and erase old code or back it up in a subdirectory on git)

    # Create an integer variable for x
    # Create an integer variable for y
    # Create an integer variable for sum
    # Ask the user for "x: " and put answer in x
    # Ask the user for "y: " and put answer in y
    # Convert x to integer
    # Convert y to integer 
    # put x + y in sum
    # tell user "answer is " sum


  VERSION 2.0

    # Create an integer variable for x
    x = 0

    # Create an integer variable for y
    y = 0

    # Create an integer variable for sum
    sum = 0

    # Ask the user for "x: " and put answer in x
    x = input("x: ")

    # Ask the user for "y: " and put answer in y
    y = input("y: ")

    # Convert x to integer
    x = int(x)

    # Convert y to integer
    y = int(y)

    # put x + y in sum
    sum = x + y

    # tell user "answer is " sum
    print("Answer is: ")
    print(sum)
  

*/

/* 

  FOR LOOP:
    - sentry: integer variable that will control loop
    - start:  integer value of sentry at beginning
    - finish: integer value of sentry at end
    - change: integer to add to sentry at each pass

  WHILE LOOP:
    - sentry: variable that will control loop
    - initialization code: code that initializes sentry
    - condition: loop repeats if condition is true
    - change code: code to change sentry (aka variable) so condition can be triggered

  FOUR THINGS ABOUT LOOP ALGORITHM
    - sentry (variable that controls the whole thing)
    - how does the sentry start
    - how does the sentry end
    - how does it change

*/

/*

  WHILE LOOP CODE:
    initialize sentry/variable  with initialization code, then continue loop as long as condition is true. 
    Inside loop, change sentry/variable with code

    initializeCode      <-- create sentry/variable
    while(condition);
    changeCode          <-- change sentry/variable in a way that guarantees at some point you will trigger the condition

*/

/*

  THE MAGIC OF WHILE "KEEP GOING" BOOLEAN VARIABLE FOR WHILE LOOPS

  ***keepGoing.py demonstrate loop with multiple exits Andy Harris***

  correct = "IndPy"
  tries = 0

  keepGoing = True
  while (keepGoing);
    tries = tries + 1 
    print ("try #"‚tries)

  guess = input ("What is the password? ")
  if guess == correct;
    print ("That's correct! Here's the tressure!")
    keepGoing = False

  elif tries >= 3;
    print ("Too many wrong tries. Launching the missiles")
    keepGoing = False

*/

/*


VENDING MACHINE PSEUDOCODE:

  Let's say that I wanted to explain how a vending machine program worked to a general audience. I'd probably write it using pseudocode so you could understand it 
  regardless of whether you are better at Python or Ruby or JavaScript or aren't even a programmer at all:

  WHEN the user inputs money:
      IF the bill is too crumpled to read,
          provide an error message,
          and return the bill.
      ELSE,
          Add it to the balance
  WHEN the user selects an item:
      IF they haven't put in enough money,
          ask for more.
      IF the item is out of stock,
          ask them to make a new selection.
      ELSE,
          determine change,
          dispense change,
          zero out the balance,
          and dispense the item.
  WHEN the user hits the "cancel" button:
      IF the user has input money without making a purchase,
          return the money,
          and zero out the balance

  As you can see, it's a pretty readable logical breakdown of what needs to happen with our vending machine. There's no "right" way to write these things out; many 
  people skip the indentation and put semicolons at the end of each line, but we'll leave them out to be more Ruby-like.



PSEUDOCODING FOR THE EXPERIENCED ENGINEER:
  
  Identifying of the core logic of a problem is why working in pseudocode is so useful even after you've been developing for a long time. Most engineers who are trying 
  to figure out a problem will first break out the pen and paper or a dry erase board and pseudocode (aka Whiteboard) the problem because it's easier to see all the 
  moving parts that way and design a good solution. Others will write directly in their text editor and use the pseudocode as actual comments to guide their production 
  of "real" code.

  When approaching a new problem, you will often take an iterative approach: starting by modeling a broad overview of what needs to happen and then filling in each part 
  that requires more detail. For instance, in the problem above, you might simply start with:

  Record the money being inputted;
  Dispense the item if able to;
  Handle any cancellation requests;

  And you can probably see how each one of those gets fleshed out further. As you get more and more detailed, your pseudocode might start resembling real code, with 
  variables and method names naturally coming out of it.

  For instance, we might break out a method to check if there is enough money put in:

  PROGRAM inputtedEnoughMoneyToBuyItem?:
      IF current_balance - item_cost > 0,
          return true
      ELSE,
          return false
      END
  END

*/
