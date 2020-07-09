---
templateKey: blog-post
title: Code Complete Part 6 Notes
date: 2020-07-07T15:04:10.000Z
featuredpost: false
featuredimage: /img/code-complete-part6.png
tags:
  - codeComplete
  - software development
  - coding
---

I'm working my way through the second edition of *Code Complete* by Steve McConnell. Here are my notes from **Part 6: System Considerations**.

Part 6 includes chapters 27-30: How Program Size Affects Construction, Managing Construction, Integration, and Programming Tools.

27\. How Program Size Affects Construction
--

* Big projects are massively more complex than smaller ones
  * a project 10 times larger than an other will take 30 times the effort
* As the number of people working on a project increases, the number of communication paths between these people increases proportionally to the square of the number of people, leading to more time spent communicating and more potential for communication errors
* As size increases, the number and density (# errors per thousand lines of code) of errors, as well as the percentage of "higher-level" errors (design, architecture, etc.) increases
* Larger projects tend to achieve lower productivity per staff-year
* As size increases, construction becomes a smaller percentage of total effort on the project
  * Construction grows more linearly with project size increases, while things like communication, design, architecture, management, etc. increase at a rate higher than a linear one

28\. Managing Construction
--

* Ways for managers to encourage good coding:
  * Allow programmers, architects, etc. to set the coding standards
  * Pair programming - assign two people to each part of the project
  * Review every line of code - the programmer and at least two reviewers read every line of code
  * Require code sign-offs
  * Circulate good code examples to programmers so they see what is expected
  * Emphasize that code worked on by one programmer still belongs to the whole project and needs to be available to others working on that project
  * Reward good code
* Configuration management = change control - identifying project artifacts and handling changes systematically so the system maintains its integrity over time
  * Also called SCM (software configuration management) when applied specifically to software
  * How to control design changes:
    * have a systematic change-control procedure
    * handle change requests in groups - then you can choose the best suggestions, rather than the easiest to implement
    * estimate the cost of each change
    * be wary of high change volumes - this is a sign that work on the project needs to back up and clarify design/architecture before doing a lot of construction work
    * establish a change-control board or equivalent
    * watch for bureaucracy, but don't let fear of it prevent effective change control
  * How to control source code changes:
    * use version control to keep track of previous versions and changes to source code
* How to estimate a project's time/cost:
  * establish objectives
  * allow sufficient time for the estimate
  * spell out software requirements
  * estimate at a low level of detail - take advantage of the law of large numbers for estimation inaccuracies on small pieces to cancel one another out
  * use several differnt estimation techniques and compare the results
  * reestimate periodically
* What to do if your project is behind:
  * Hope you'll catch up - ineffective
  * Expand the team - effective when used properly; it's a matter of whether adding a person provides increasing returns to scale or decreasing returns to scale; don't just throw people at a late project
  * Reduce the scope of the project
* Software projects can and should be measured:
  * "For any project attribute, it's possible to measure that attribute in a way that is superior to not measuring it at all"
  * Be aware of measurement side effects - e.g. people put more effort into work which will be measured
  * "To argue against measurement is to argue that it's better not to know what's really happening on your project"
* Programmers = people
  * studies show they spend more time on walking or personal things than training, reading manuals, etc.
  * programmers tend to have strong feelings on things like programming language, indentation style, placing of braces, IDE, comments, naming conventions, etc. Managers should keep these in mind, and if discussing them with a programmer:
    * be aware that it is a sensitive area
    * follow the tradition of Captain Barbossa: "it's more what you'd call 'guidelines' than actual rules"
    * avoid explicit mandates here
    * allow programmers to develop their own standards
  * strong correlation between quality of workplace and productivity

29\. Integration
--

* Integration - when you combine separate software components into a single system
* You need to integrate pieces in the right order - it doesn't matter if a project will be strong enough to support itself at the end if it collapses under its own weight partway through integration
* Careful integration makes completing a project far easier than poor integration
* Programs are integrated either by a phased approach or an incremental one
* Phased integration:
  * Steps:
    * Design, code, test, debug each class - "unit development"
    * Combine classes - "system integration"
    * Test the whole system - "system dis-integration"
  * The problem here is that you find new problems when you combine the classes together, and since you did it all at once, those problems could be anywhere
  * aka "Big Bang Integration" because it is a mess
  * Phased integration also means integration isn't done until late in the project, leaving less time for all these errors to be methodically fixed
* Incremental integration is about putting small pieces together one at a time
  * Steps:
    * Develop small functional part of the system. Test and debug it thoroughly. This is your starting framework
    * Design, code, test, debug a class
    * Integrate new class into existing framework
  * Advantages:
    * errors are easy to locate
    * the system has visible success early in the process
    * improved progress monitoring
    * improved customer relations
    * the system's units are tested more fully
    * your development schedule can be shortened, since more work can be done in parallel
  * Requires careful planning
  * Strategies:
    * Top-down integration - class at top of hierarchy is written and integrated first, then you work your way down
      * interclass interfaces need to be carefully specified
      * often results in early testing of system's control logic and early emergence of a semi-fucntional system
      * disadvantage is that it leaves tricky system interfaces for last, which isn't usually a great idea
    * Bottom-up integration - write and integrate classes at bottom of hierarchy first
      * makes error location and dealing with tricky system interfaces easier
      * leaves until last the high-level system interfaces. Errors here are big and hard to fix
    * Sandwich integration - integrate the highest-level classes, then the lowest-level classes, then work through the middle classes
      * realistic, practical, less rigid than pure top-down or bottom-up approaches
    * Risk-oriented integration - "hard part first integration"
      * implement the classes which will be the most difficult to integrate first
        * this often results in integrating the top and bottom classes first, as with sandwich integration
    * Feature-oriented integration - integrate one feature at a time
      * slightly less modularized since features often entail multiple classes
      * incremental functionality increases add to sense that progress is being made
      * fits well with object-oriented programming
    * T-shaped integration - one vertical slice deeply developed and integrated, then the system bredth is developed
* When integrating software, it's smart to perform a daily build and smoke test - build your code each day and test whether it "smokes" when it runs; this allows for easier error location and improved morale. How to use them:
  * Build daily - it's in the name!
  * Check for broken builds - your code should compile, find files, etc. successfully or your top priority should be making that happen
  * Smoke test daily - again, it's in the name
  * Keep the smoke test current - it needs to evolve with your system and test what the system should now be capable of
  * Automate the daily build and smoke test
  * Establish a build group
  * Add revisions to the build only when it makes sense to do so
  * but don't wait too long to add a set of revisions
  * Require developers to smoke test their code before adding it to the system
  * Create a holding area for code to be added to the build
  * Create a penalty for breaking the build
  * Release builds in the morning
  * Build and smoke test even under schedule pressure

30\. Programming Tools
--

* As in other fields, like physical construction, tools vastly increase productivity in software construction
* Design tools (as of the publishing of this book) are mainly graphical tools creating design diagrams, often embedded in a computer-aided software engineering (CASE) tool; these diagrams can easily be drawn with a simple pencil and paper, but these design tools offer housekeeping and aesthetic advantages
* Tools for editing source code:
  * IDE's (Integrated Development Environments) - provide word processing, compilation, error detection, formatting, interactive help, brace matching, search-and-replace, etc., etc., etc.
  * Supplementary search-and-replace tools (if your IDE does not provide it)
  * Diff tools - compare current and past versions of a file to find where an error may have been introduced
  * Merge tools - allow multiple programmers to work on the same file at once, merging the changes together automatically
  * Source-code beautifiers - make your code pretty, standardize indentation, parameter list formatting, etc.
  * Interface documentation tools - pull interface documentation from source code and present pretty-looking document; e.g. Javadoc
  * Templates - standardize various common elements, like comments/documentation
  * Cross-reference tools - lists variables and routines and all the places in which they're used
  * Class hierarchy generators - produces information about inheritance trees
* Tools for analyzing source-code quality
  * Picky syntax and semantics checkers augment compiler's code checking by being more thorough and detecting subtler errors; e.g. Lint in C/C++ environments
  * Metrics reporters - analyze complexity, track defects
* Tools for refactoring source code:
  * Refactorers - make changing class names, extracting routines, changing code in general easier and less error-prone; either standalone or integrated into IDE
  * Restructurers - convert spaghetti code full of `goto` statements into better-structured code without any `goto` statements
  * Code translators - translate code from one language to another
* Version control tools help with source-code control, dependency control, project documentation versioning, and relating requirements, code, and test cases so adjusting for changed requirements is easier
* Data dictionaries are databases describing all significant data in a project; help keep track of class definitions, prevent naming clashes or gaps
* Tools for creating code:
  * Compilers - convert source code to executable code
  * Linkers - link one or more object files generated by compiler; can link between languages
  * Build tools - minimize time required to build a program
  * Code libraries - open-source or available for purchase; prevent reinventing the wheel
  * Code-generation wizards - write code for databases, user interfaces, etc.; this code is often low-quality and not readable, though; often included in IDEs
  * Setup and installation tools
  * Preprocessors - useful for debugging
* Debugging tools include compiler warning messages, test scaffolding, diff tools, execution profilers, trace monitors, interactive debuggers, etc.
* Testing tools include automated test frameworks/generators, coverage monitors, symbolic debuggers, system perturbers, diff tools, scaffolding,etc.
* Code tuning tools:
  * Execution profilers record how much time is spent on a given statement and how many times said statement is executed
  * Assembler listings and disassemblers
* UNIX and the related C and C++ languages are very well-suited to tool use
* Most medium to large projects require custom tools unique to the project
* Script = tool that automates a repetitive chore
* Whenever a new tool comes out (literally since the days of Fortran) people always extrapolate its gains out to infinity and say "[insert tool here] will eliminate programming!"
  * This has obviously not been the case so far and likely will not be; tools have put the work of programmers on a higher level, but as McConnell writes, "As long as we have computers, we'll need people who tell the computers what to do, and that activity will be called programming."

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
