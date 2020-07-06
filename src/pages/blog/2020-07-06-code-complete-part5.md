---
templateKey: blog-post
title: Code Complete Part 5 Notes
date: 2020-07-06T15:04:10.000Z
featuredpost: true
featuredimage: /img/code-complete-part5.png
tags:
  - codeComplete
  - software development
  - coding
---

I'm working my way through the second edition of *Code Complete* by Steve McConnell. Here are my notes from **Part 5: Code Improvements**.

Part 5 includes chapters 20-26: The Software-Quality Landscape, Collaborative Construction, Developer Testing, Debugging, Refactoring, Code-Tuning Strategies, and Code-Tuning Techniques.

20\. The Software-Quality Landscape
--

* External quality characteristics of software (things users care about) - correctness, usability, efficiency, reliability, integrity, adaptability, accuracy, robustness
* Internal quality characteristics of software (things programmers care about) - maintainability, flexibility, portability, reusability, readability, testability, understandability
* How to improve software quality:
  * set explicit software quality objectives
  * the organization needs to explicitly make clear that quality assurance is a priority
  * have a testing strategy
  * follow software engineering guidelines
  * subject your code to informal technical reviews
  * subject your code to formal technical reviews
  * your code can be reviewed by external audits
* Development with quality assurance activities -> better software
  * makes sense
* Other things that can improve software quality in development:
  * change-control procedures
    * making changes to requirements, design, etc. can have big effects on code; handling them properly will result in higher-quality code
  * measurement of results allows you to evaluate your quality-assurance plan
  * prototyping often leads to better design and maintainability
* When looking for defects, you have to use a combination of methods, as methods used individually do not find a sufficient percentage of errors
  * some errors are better-detected by humans, others are better-detected via computer-based testing
* Detecting errors early leads to lower cost of fixing them
* Counterintuitively perhaps, improving software quality tends to decrease development costs
* Software quality assurance is all about shifting the focus from downstream debugging to upstream quality assurance

21\. Collaborative Construction
--

* Collaborative construction = pair programming + formal inspections + informal technical reviews + document reading + etc.
  * using these leads to higher-quality, lower-cost code
* Informal reviews among coworkers encourages mentoring of less experienced developers by those more experienced
* Collective ownership of code puts more eyes on each line of code, thus increasing software quality
* Pair programming - one person types, the other watches for errors
  * support pair programming with coding standards
  * don't let pair programming turn into watching - the person without the keyboard should still be an active participant
  * don't force pair programming of the easy stuff
  * rotate pairs and work assignments regularly
  * pairs should match each other's pace - if one person goes too fast for the other, the benefits of pair programming are minimized
  * make sure both partners can see (and read from!) the monitor
  * don't force people who dislike one another to pair
  * avoid pairing newbies with one another
  * assign a team leader
* Inspections are a kind of review with very high effectiveness of error-detection
  * Roles in inspections:
    * moderator - keeps the inspection moving, sets up meetings, distributes checklists, etc.
    * author - the person who wrote the design or code; has small role in inspection
    * reviewer - anyone with a direct interest in the design or code but who is not the author; they may be doing the downstream work that will follow from this design, or they may have done some of the upstream work
    * scribe - records errors that are detected and the assignments of action items; should not be moderator or author
    * management - should be informed of the results of an inspection, but shouldn't really be present at meetings or anything; code under inspection shouldn't be used to evaluate performance
  * Procedure for inspections:
    * planning
    * overview of the project; can be dangerous and should not be a substitute for code that speaks for itself
    * preparation - each reviewer independently reviews the code/design; can be made more effective if each reviewer is given a perspective (how would a customer feel about this code? What about a maintenance programmer? etc.)
    * inspection meeting - discuss code to review errors found; don't discuss solutions
    * inspection report - moderator sends out email, etc. listing each defect
    * rework - moderator assigns someone to repair the defects (usually the author)
    * follow-up - moderator ensures that rework is properly completed
    * third-hour meeting - informal meeting to allow participants to discuss solutions to defects if needed
  * Inspections should be a positive experience for all involved and are not intended for criticizing the author
* Walk-through - a loosely defined review in which several programmers get together to review the code technically
  * very flexible
  * less effective than formal inspections, but more flexible and informal
* Code reading - exactly what it sounds like; you read through source code looking for errors, then meet with the author to review them
* Dog-and-pony shows - reviews in which a software product is demonstrated to a customer
  * management review rather than a technical review; common on government work, etc.

22\. Developer Testing
--

* Unit testing - testing a complete class, routine, or small program developed by a single programmer or team of programmers in isolation from the more complete system
* Component testing - unit testing except for code written by multiple programmers or teams
* Integration testing - testing two or more classes, packages, components, or subsystems created by multiple programmers or programming teams
* Regression testing - testing a test case previously executed to ensure the software still passes the test case
* System testing - testing the software in its final form
* Two broad types of testing:
  * Black-box testing - the tester does not know the internal workings of the code being tested
  * White-box testing - the tester does know the internal workings of the code being tested (e.g. if the tester is the one who wrote the code)
* Testing != debugging
* Developers need to assume they'll find errors in their code - better to find your own errors than for someone else to find them! So aim to find as many errors as possible.
* Developer testing should take roughly between 8% and 25% of a project's total time, depending on its size (larger program = less developer testing)
* Important things to test as a developer:
  * Ensure that all relevant requirements have been implemented
  * Ensure that the design has been properly implemented - plan these test cases in the design phase, before actually writing the code
  * In addition, be sure that every line of code is tested, at minimum
  * Have a list of common errors you've made on this or previous projects and test for similar errors
* Writing test cases before writing code is a good idea; it takes no extra effort, often results in better code, and decreases the amount of time that defects remain in the code
* Limitations of developer testing:
  * developer tests tend to test for when code works, rather than for all the cases in which the code may not work
  * developers tend to feel they're covering a large percentage of their code with their test cases when they actually may not be
  * developer testing often skips more sophisticated kinds of test coverage
  * therefore, developer testing is very good and important, but not in isolation
* You can't possibly test your program for every possible input; you need a way to select which cases to test
  * incomplete testing - pick test cases most likely to find errors; don't just test similar data over and over
  * structured basis testing - you need to test each statement at least once, and that means you need to test every path through the program; ensures that every statement will be executed, but doesn't account for different data's effect on certain statements
  * data-flow testing - based on idea that data usage is at least as error-prone as control flow
    * States of data:
      * Defined - initialized but not used
      * Used - used in computation, as argument in routine, etc.
      * Killed - it was once defined but has now been undefined
      * Entered - control flow enters routine immediately before variable is acted upon
      * Exited - control flow leaves routine immediately after variable is acted upon
      * Defined-Defined - bad. wasteful and error-prone
      * Defined-Exited - doesn't make sense for a local variable, but may be ok for routine parameter or global variable
      * Defined-Killed - either the variable is unnecessary or the code doesn't properly use the variable
      * Entered-Killed - bad for local variable, might be ok for global variable
      * Entered-Used - bad for local variable, might be ok for global variable
      * Killed-Killed - bad. Very bad for pointers.
      * Killed-Used - also bad
      * Used-Defined - might be an issue - do some more investigation
    * in data-flow testing, test all possible defined-used paths by testing either all definitions or all defined-used combinations (the latter is better)
  * Equivalence partitioning - the idea that multiple test cases shouldn't find the same error(s); if they do, you can afford to get rid of one of them
    * not too helpful when already working with basis or data-flow testing, but good when looking at a program from the point of view of specifications
  * Error guessing - most effective when these guesses are based on documentation of past errors or common errors like:
    * Boundary analysis - off-by-one errors, as well as uncommonly large or small cases
    * Classes of bad data - too little or no data, too much data, invalid data, wrong size of data, uninitialized data
    * Classes of good data - nominal cases, minimum normal configuration, maximum normal configuration, compatibility with old data (if the program is meant to replace an older program)
* When testing, use test cases you can easily calculate the expected results of by hand - you don't want to make an error in your hand calculations and think it's your code that's the problem!
* Errors in programs tend to be concentrated in a few routines or classes
* Error facts that can be inferred from studies:
  * most errors are fairly limited in scope
  * many errors are outside the domain of construction
  * the vast majority of errors are the programmers' fault
  * typos are a common source of issues
  * many programmer errors enter code as a result of not fully understanding the code's design
  * most errors are pretty easy to fix
  * it's a good idea to measure your own organization's experiences with errors
* Construction errors account for at least 35% of errors in a project, and even more on smaller projects
* Errors in test cases are frustrating and embarassing. How to avoid them:
  * **Check your work**
  * Plan test cases as you develop your software
  * Keep your test cases
  * Plug unit tests into a test framework
* Testing tools:
  * Scaffolding helps with the testing of individual classes; you can build a mock object to be used by the class being tested, build a fake routine to be called by the routine being tested, or build a dummy file to be manipulated by the routine being tested
  * Diff tools are useful for regression testing
  * Test-data generators are very useful when used correctly, as they may generate combinations of data you never would have expected to cause an error
  * Coverage monitors - keeps track of which code is exercised in testing and which is not
  * Data recorder/logging - a tool to record a program's state at the time of failure, like a black box on an airplane
  * Symbolic debuggers - a tool that steps through code line-by-line to detect errors
  * System perturbers - tools that:
    * fill up memory to detect variable initialization errors
    * rearrange memory to detect errors when code depends on data being in an absolute location
    * selectively cause memory to fail to test complex programs working with dynamically allocated memory
    * check memory access (bounds checking) to ensure pointers are behaving as they should
  * Error databases
* Improving your testing:
  * plan to test
  * retest (regression testing) - keep all a program's old tests
  * use automated testing
* To evaluate the quality of the project over time, you should keep clear records of defects located, including information like:
  * date and description of defect
  * description of problem
  * how to repeat problem
  * workaround for problem
  * related defects
  * severity of problem
  * origin of defect
  * subclassification of coding defect
  * classes/routines changed when defect is fixed
  * \# lines of code impacted by defect
  * hours to find defect
  * hours to fix defect

23\. Debugging
--

* Debugging = finding root cause of error and correcting it
* A defect in your code means that you do not fully understand what your code does
* You can learn from defects! And apply what you learn in the future!
  * learn about the program you're working on
  * learn about the kinds of mistakes you make
  * learn about your code's readability
  * learn how you solve problems (and whether there might be a better way)
  * learn how you fix defets
* **DON'T DO THIS:**
  * Find the defect by guessing and using print statements all over the program
  * Don't waste time trying to understand the problem - just find it and fix it and everything will be fine!
  * Fix the error with the most obvious fix, like a special case!
  * Program by superstition - just assume all errors are the fault of the compiler or the language or the data. Because no problem is ever the programmer's fault!
* Assume errors are your fault
* Scientific method:
  * Gather data through repeatable experiments
  * Form a hypothesis accounting for relevant data
  * Design an experiment to test hypothesis
  * Prove or disprove hypothesis
  * Repeat
* Scientific method of debugging:
  * Stabilize error
  * Locate source of error
    * Gather the data that produces the defect
    * Analyze data, form hypothesis
    * Test program or examine code to test hypothesis
    * Prove or disprove hypothesis
  * Fix defect
  * Test the fix
  * Look for similar errors
* Tips for finding defects:
  * Use all the data available to make your hypothesis
  * Refine the test cases producing the error
  * Exercise your code with unit tests
  * Use available tools
  * Reproduce the error several different ways to triangulate the cause of the defect
  * Generate more data to generate more hypotheses
  * Don't ignore the results of negative tests - these give important information too!
  * Brainstorm for possible hypotheses you may be overlooking
  * Keep a notepad by your desk to list things to try
  * Narrow down where in the code your error could be coming from via removing sections, etc.
  * Be suspicious of classes/routines that have had defects before
  * Check code that's changed recently
  * Expand your suspicious region of code
  * Integrate incrementally
  * Check for common defects
  * Talk to someone else about the problem
  * Take a break from the problem
  * Brute-force debugging:
    * perform a full design and/or code review on broken code
    * throw away the broken section and recode it from scratch
    * throw away the whole program and recreate it from scratch
    * compile code with full debugging information
    * compile code at pickiest warning level adn fix all picky compiler warnings
    * test new code in isolation with unit tests
    * create automated test suite and just let it run
    * step through big loop in debugger manually until you hit the error condition
    * use print, display, or other logging statements in code
    * compile code in different compiler
    * use special libraries or environments
    * replicate end-user's machine configuration
    * set maximum time for quick-and-dirty debugging
      * before engaging in quick-and-dirty debugging, find a brute-force method that is guaranteed to work, and use it if you go beyond your time limit
  * Syntax errors:
    * don't trust line numbers in compiler messages
    * don't trust compiler messages
    * don't trust the compiler's second message
    * divide and conquer
    * find misplaced comments and quotation marks
      * use `/*"/**/` to terminate a comment or string to narrow down where your unterminated comment or string is located
* Tips for fixing defects:
  * Understand the problem before you fix it
  * Understand the program/context of problem before you fix it
  * Confirm defect diagnosis
  * Relax long enough to be sure your solution is right
  * Save the original source code
  * **Fix the problem, not the symptom**
  * Change the code only for **very** good reason
  * Make one change at a time
  * Check your fix by walking through it with someone and using regression testing
  * Add a unit test to expose the defect, should it reappear
  * Look for similar defects
* Guard against seeing what you expect to see
* Good programming practices with regard to formatting, conventions, etc. should make errors blindingly obvious
  * put "psychological distance" between variable names - make names as different as `cat` and `bunnyRabbit` rather than the difference between `stoppt` and `stcppt`
* Debugging tools:
  * Source-code comparators like Diff are useful when you're modifying a program in response to errors
  * Take advantage of compiler warning messages
    * set your compiler's warning level to the highest possible level of pickiness
    * treat warnings as errors
    * initiate projectwide standards for compile-time settings
  * Extended syntax and logic checking
  * Execution profilers
  * Test frameworks/scaffolding
  * Debuggers
    * but don't use them as a crutch or as a substitute for your own thinking and understanding of a program

[Another resource on finding/fixing defects](https://ardalis.com/working-through-roadblocks-a-guide-for-new-programmers/)

24\. Refactoring
--

* Code evolves substantially over its lifetime - make sure your code is increasing in quality with each change, rather than devolving due to compounded side effects of quick fixes
* As you write your code to start out with, make later changes as easy as possible
* **Evolution should improve the internal quality of the program**
* Refactoring = "a change made to the internal structure of the software to make it easier to understand and cheaper to modify without changing its behavior"
* Reasons for refactoring:
  * duplicate code - "copy and paste is a design error"
  * a routine is too long - increased modularity tends to improve a system
  * a loop is too long or too deeply nested
  * a class has poor cohesion
  * a class interface without a consistent level of abstraction
  * a parameter list with too many parameters
  * a class seems to function as two (or more) separate classes
  * changes require you to modify multiple classes in parallel
  * inheritance hierarchies have to be modified in parallel
  * `case` statements have to be modified in parallel
  * related data items are not organized into classes
  * a routine uses more features of another class than of its own class
  * a primitive data type is overloaded
  * a class doesn't do much
  * a chain of routines passing tramp data
  * a middleman object doesn't actually do anything
  * one class is overly intimate with another
  * a routine has a poor name
  * data members are public - USE ACCESS ROUTINES!
  * a subclass uses only a small percentage of its parents' routines
  * comments are used to explain difficult/bad code
  * global variables are used
  * a routine uses setup code before a routine call or takedown code after a routine call
  * a program contains "design ahead" code
* Specific refactorings
  * Data-level refactorings:
    * replace a magic number with a named constant
    * rename a variable with a clearer/more informative name
    * move an expression inline (rather than using an intermediate variable assigned the value of the expression)
    * replace an expression with a routine
    * introduce an intermediate variable
    * convert a multiuse variable to several single-use variables
    * use a local variable for local purposes, rather than a parameter
    * convert a data primitive to a class
    * convert a set of type codes to a class or an enumeration
    * convert a set of type codes to a class with subclasses
    * change an array to an object
    * encapsulate a collection
    * replace a traditional record with a data class
  * Statement-level refactorings
    * decompose a boolean expression
    * move a complex boolean expression into a well-named boolean function
    * consolidate statements duplicated within different parts of a conditional
    * use `break` or `return` instead of messing with a loop control variable
    * return as soon as you know the solution
    * replace conditionals (esp repeated `case` statements) with polymorphism
    * create and use null objects instead of testing for null values
  * Routine-level refactorings
    * remove inline code from one routine and turn it into its own routine
    * move a routine's code inline
    * convert a long routine to a class
    * substitute a simple algorithm for a complex algorithm
    * add a parameter
    * remove a parameter
    * separate query operations from modification operations
    * combine similar routines by parameterizing them
    * separate routines whose behavior depends on parameters passed in
    * pass a whole object rather than specific fields
    * pass specific fields rather than a whole object
    * encapsulate downcasting
  * Class implementation refactorings
    * change value objects to reference objects
    * change reference objects to value objects
    * replace virtual routines with data initialization
    * change member routine or data placement
    * extract specialized code into a subclass
    * combine similar code into a superclass
  * Class interface refactorings
    * move a routine to another class
    * convert one class to two
    * eliminate a class
    * hide a delegate (if A is supposed to call B, which is supposed to call C, A should not be responsible for calling C)
    * remove a middleman
    * replace inheritance with delegation
    * replace delegation with inheritance
    * introduce a foreign routine
    * introduce an extension class
    * encapsulate an exposed member variable
    * remove `Set()` routines for fields that cannot be changed
    * hide routines that are not intended to be used outside the class
    * encapsulate unused routines
    * collapse a superclass and subclass if their implementations are very similar
  * System-level refactorings
    * create a definitive reference source for data you can't control
    * change unidirectional class association to bidirectional class association or vice versa
    * provide a factory method rather than a simple constructor
    * replace error codes with exceptions or vice versa
* Be careful with refactoring!
  * Save the code you start with
  * Keep refactorings small
  * Do refactorings one at a time
  * Make a list of steps you intend to take
  * Make a list of changes you want to make but don't need to make immediately - a "parking lot"
  * Make frequent checkpoints
  * Use your compiler warnings
  * Retest
  * Add test cases
  * Review the changes
  * Adjust your approach depending on the risk level of the refactoring
  * Don't use refactoring as a cover for code and fix - refactoring should not change behavior, it should just improve readability, etc.
  * Don't refactor if what you really need is to rewrite your code
* Refactoring strategies:
  * Refactor when you add a routine or class
  * Refactor when you fix a defect
  * Target error-prone or high-complexity modules
  * In a maintenance environment, improve the parts you touch
  * Define an interface between clean code and ugly code and move code across the interface

25\. Code-Tuning Strategies
--

* The importance of code's efficiency has oscillated over the course of several decades
* Performance is not just about code speed
* When looking at code tuning, check that you can't fix your performance problems by changing:
  * Program requirements
  * Program design
  * Class/routine design
  * Operating system interactions
  * Code compilation
  * Hardware
  * Code tuning
* Code tuning = modifying correct code to make it run more efficiently
* Programmers love to make their code as efficient as possible, but efficient code isn't necessarily "better"
  * Pareto principle - you can get 80% of the result with 20% of the effort
    * i.e. you can usually get major performance improvements by tweaking a few hot spots in your code
    * don't keep doing this until your code is perfect. the perfect will become the enemy of the good and you'll never finish your project
* Old wives' tales about code tuning:
  * Reducing lines of code in a high-level language improves the speed or size of the resulting machine code
  * Certain operations are probably faster or smaller than others
    * there's no probably; changes you make should have testable, verifiable results
    * plus, this depends on your hardware/environment, and code-tuning can make it really hard to switch environments
  * You should optimize as you go
  * A fast program is just as important as a correct one
* Before you code tune: make your program works correctly. Give it a good design, modularization, etc. Save the functional version of your code! Then tune if you know that's something you need to do
* Compiler optimizations can also really help your performance
* Commmon sources of inefficiency:
  * Input/output operations - using an in-memory data structure rather than accessing an external file can be 100 to 1000 times faster!
  * Paging (i.e. switching memory pages)
  * System calls
  * Interpreted languages (PHP, Python, etc.)
  * Errors
* Once you do some code-tuning, perform some measurements to see how effective your improvements were
  * Sometimes a change you thought would increase performance actually doubles run time, so measure everything

26\. Code-Tuning Techniques
--

* Code tuning = anti-refactoring because it sacrifices code quality for performance gains
* Techniques presented here are "things to try;" there's never any certainty which will work in a particular environment, project, etc.
* Stop testing when you know the answer in logic expressions - "short-circuit evaluation"
  * standard in Java, C++, but you can simulate it in other languages
* Order tests (case and if-then-else statements, etc.) by frequency and/or speed of each test
* Replace case statements for if-then-elses or vice versa, depending on your environment
* Substitute table lookups for complicated expressions
* Lazy evaluation - the program avoids doing any work until the work is actually required
* A program tends to spend a long time in loops, so optimization there tends to have amplified effects
  * Unswitching - instead of making a decision inside a loop, you can make it outside the loop by turning the loop inside-out. It's bad for readability but can improve performance
    * e.g. if you have a `for` loop with an `if` and `else` inside, you can replace that with an `if` and `else`, each with a `for` inside. These two loops must now be maintained in parallel
  * Jamming - combining two loops that operate on the same set of elements
  * Unrolling - you have a `while` loop with an incrementation variable that you increment by 2's, 3's, etc. Put `if` statements below to catch missed cases
  * Minimize the work inside loops with pointers, etc.
  * Sentinal values
  * With nested loops, put the busiest loop on the inside
  * Strength reduction - replace multiplication with addition, for example
* Data transformations
  * Replace floating-point numbers with integers
  * Use as few array dimensions as possible
  * Minimize array references
  * Use supplementary indexes - add related data that makes accessing a data type more efficient
    * e.g. string-length index or another independent, parallel index structure
  * Use caching to store commonly- or recently-used values
* Expressions
  * Exploit algebraic identities - i.e. to determine if sqrt x < sqrt y, you only need to test x < y since if x < y, sqrt x < sqrt y
  * Strength reduction effective at tuning expressions
  * Initialize at compile time - i.e. precompute a commonly used `log(2)`, etc. and set a constant for it at compile time
  * Be wary of system routines, as these are designed to be super accurate and can impact performance if you don't need such a high degree of accuracy
  * Named constants and literals should be the same type as the variables they're assigned to
  * Precompute results that are used many times
  * Eliminate common subexpressions (by assigning them to variables)
* Routines
  * Make sure you have small, well-defined routines - good routine decomposition
  * Sometimes you can improve performance by writing routines inline instead, though this isn't always effective
* You can often get pretty substantial performance gains by recoding hot spots in a low-level language

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
