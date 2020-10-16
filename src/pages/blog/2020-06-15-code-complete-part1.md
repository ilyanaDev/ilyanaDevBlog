---
templateKey: blog-post
title: Code Complete Part 1 Notes
date: 2020-06-15T17:04:10.000Z
featuredpost: true
featuredimage: /img/code-complete-part1.png
description: Code Complete by Steve McConnell is a well-written explanation of themes in software construction.
tags:
  - codeComplete
  - software development
  - coding
---

I'm working my way through the second edition of *Code Complete* by Steve McConnell. Here are my notes from **Part 1: Laying the Foundation**.

Part 1 includes chapters 1-4: Welcome to Software Construction, Metaphors for a Richer Understanding of Software Development, Measure Twice Cut Once: Upstream Prerequisites, and Key Construction Decisions.

1\. Welcome to Software Construction
--

* Construction is especially about coding and debugging, but unit testing, integration testing, planning, and detailed design are also big parts
* Because construction is *the thing you have to do to produce code*, improving your construction will improve your code (whereas improving something like testing processes only improves your code if you do testing - which you should do, but sometimes it gets skipped)
* Construction = 30-80% of total project time
* Productivity between programmers during construction can vary by a factor of 10 to 20! (as shown by 8 studies cited by the book)

2\. Metaphors for a Richer Understanding of Software Development
--

* "In what other field can you walk into a sterile room, carefully controlled at 68&deg;F, and find viruses, Trojan horses, worms, bugs, bombs, crashes, flames, twisted sex changers, and fatal errors?" (pg 9)
* Using metaphors = "modeling" because you use a topic you understand to explain one you don't
* Models can sometimes suggest misleading things, as in the search for ether (a medium that would propagate light like air propagates sound). Your model is said to be overextended when this happens
* Charles Bachman compared the shift from the earth-centered view of the solar system to the heliocentric one to the shift in data processing from a computer-centered to a database-centered approach, which occured in the early 1970s.
* Metaphor = heuristic. Metaphor != algorithm. Metaphors show you how to look for answers, not how to find them.
  * "A heuristic is an algorithm in a clown suit" (pg 12)
* There's no algorithm for writing software - it's more about conceptualizing the problem, and each problem is so different that there is no single algorithm for how to solve any problem.
* Common Software Metaphors:
  * "Writing Code" - works well for small projects; essentially, "writing code" implies you sit down and write it start to finish like a letter and then mail it out and can't make any changes after that. It implies that code should be readable. But it also gives a misleading implication of simplicity and casualness that doesn't work well for larger-scale, often-expensive projects.
  * "Growing a System" - add to your system a little at a time through careful design and addition of each new piece, and test as you go. Easy to overextend because the farming aspect implies a certain lack of direct control over your code.
  * "System Accretion"- closely related to farming but a slightly better fit. It's still about adding things piece-by-piece, but more in the way an oyster does to make a pearl than the way a farmer does to plant a field. Incremental development - make simplest possible system that will run - a skeleton to support the more complex pieces. Then fill it in - change dummy classes to functional ones; input real input and output real output.
  * "Building Software" - Lots of good parallels with the incremental oyster metaphor, while also implying the importance of planning, and the *varied* importance of planning based on the complexity of each project. For example, making a big mistake on a doghouse (like forgetting a door) is a far less costly error than a comparatively small mistake on something much larger, like a house or a skyscraper. Plus, you can use higher-level design by purchasing components like cabinets and dishwashers, rather than designing them yourself. Good planning means you can make progress on the outline while still retaining the ability to change your mind on the details.
    * ![Doghouse Example](/img/codeComplete-doghouse-noDoor.png "Doghouse Example")
  * "Intellectual Toolbox" - to solve complex problems, you need an extensive set of tools. Keeping different aspects of different helpful metaphors handy allows you to have many different ways of approaching and solving problems, and you can apply the most effective tool in each situation.
* Combine metaphors! But use them with care - you don't want to end up wasting valuable time searching for an "ether"!

3\. Measure Twice, Cut Once: Upstream Prerequisites
--

* Much of a project's success in construction is predetermined by the adequacy of preparation.
* Construction is expensive! Plan well so you only have to do it once.
* High-quality software is built through high-quality practices
  * This means emphasizing quality through every stage of the project - planning, construction, and testing, not just at the end when you're "quality controlling" the finished product.
* Preparation = risk reduction.
* Many programmers either aren't trained for planning or prefer to just start coding (because that's more fun `:)` )
* Sometimes bosses/managers demand "results" (WISCA Syndrome - "Why Isn't Sam Coding Anything?"). Here are some solutions:
  * Refuse to do work ineffectively (i.e. refuse to start coding with no plan) and/or find a new job - not the best solution but programmers are often in short supply so perhaps an option for some
  * Pretend to be coding when you're not - pull up some code and then work on your requirements
  * Educate your boss! You'll increase the population of bosses who understand the importance of good coding practices. Here's some tips for that conversation:
    * Logic! It just makes sense to plan before you jump to coding.
    * Analogy! Blueprints are used for houses, why not for software? Or a food chain - programmers "eat" design, designers "eat" architecture, architects "eat" requirements. If any step along the way is contaminated, the end program will be contaminated too
    * Data! Studies show that planning is effective. It's more expensive to do it right once than to do it wrong over and over again.
* Some self-fulfilling prophesies - aim for the last one
  * We'd better start coding right away because we're going to have lots of debugging to do.
  * We didn't leave time for testing because we aren't going to find many errors.
  * We've looked into investigations and design so much that I can't think of any major errors we'll find during debugging.
* Iterative approach vs. sequential approach:
  * Upstream work not as important in an iterative approach because it's integrated into construction, etc. - but it's still important! If you skip the prerequisites, the total cost of reworking the system iteratively is lower than sequentially because you're taking care of it as you go, rather than waiting till the end. But the cost is still far higher than if you just apply proper planning.
  * The approach you should take varies by project. If the requirements are stable and well-defined, risk is low, and the design is fairly simple, sequential is a good option. If requirements are unstable or poorly understood, risk is high, the design is challenging, and changing requirements later is low-cost, go with iterative. Most projects will work with some combination of the two.
* **Problem Definition** - Clearly states the problem the program is supposed to solve
  * It should sound like a problem rather than a solution - "Sauron is too powerful for us to defeat" rather than "We need to send a couple Hobbits to Mordor to destroy the One Ring in order to defeat Sauron"
  * The problem should be stated from the user's perspective, not the programmer's (unless your problem is that something on a computer is buggy or slow)
  * If you do this wrong, you'll put a lot of energy into solving the wrong problem!
* You need a clear set of requirements because they ensure you're making what the user wants, they provide a clear scope for the project, and they minimize major, back-to-the-drawing-board style changes during construction
  * On the other hand, accept that requirements do change, so you need to be flexible
    * Use [this checklist](https://flylib.com/books/en/2.823.1.30/1/) (scroll down to the bottom) to make sure your requirements are high-quality
    * Explain to your customers and your boss the cost of changing requirements later
    * Have a procedure for how to change requirements
    * Use flexible development so you can respond when changes do occur
    * Cancel the project (think very carefully before doing this)
    * Remember to pay attention to how the project is going to be implemented - how much will the proposed change actually improve the value of the project? Is the change still worthwhile when considered in this context?
* Good architecture = easy construction. Without it, you may have the right problem but an ineffective solution
* Architectural components (all should be described alongside alternatives that were considered):
  * Program organization - building block responsibilities, as well as inter-block communication channels, should be well-defined, and building blocks need to fit into the system as a whole.
  * Major classes - again, responsibilities and interactions need to be well-defined, and they need to fit into your end goal
  * Data design - file and table designs; data should only be directly accessed by one subsystem or class
  * Business rules - depend on the requirements of the customer but should be clearly defined in architecture (client may have policy that customer information must be less than 30 seconds out of date, for example)
  * User interface design - needs to be well-designed, but should also be well-separated from other components, so you can substitute new UI's as needed without impacting other components
  * Resource management - you gotta have a plan for use of scarse resources like database connections and memory
  * Security - describe security approaches and how secure various elements need to be
  * Performance - goals are important, often related to resource use
  * Scalability - how will the system address growth?
  * Interoperability - does system have to work with other software or hardware? How will it do so?
  * Internationalization (I18N)/Localization (L10N) - esp. important for interactive systems
  * Input/Output - requirements and how to detect errors
  * Error processing - super important - there are estimates that only 10% of a program's code is dedicated to nominal cases
    * Corrective or detective processing? Does the program try to recover or does it just move on from detected errors?
    * Active or passive detection? Check input for validity or respond only when input has caused a mess?
    * How to deal with detected errors? Discard offending data, process the error, or notify the user after finishing processing?
    * How to handle error messages? You need standardization here.
    * How to handle exceptions? When will code throw them? How will they be caught, logged, documented, etc.?
    * At what level to handle errors?
    * What is each class's responsibility here?
    * Should you use your environment's default exception-handling system?
  * Fault tolerance - how to detect, fix, and contain errors
  * Architectural feasibility - demonstration that the system can feasibly be constructed
  * Overengineering - how robust does your system need to be? Should classes fulfil the bare minimum or should they be overengineered?
  * Buy-vs.-Build decisions - if you aren't buying components like GUI controls and databases, why not? What will your custom-built components do that off-the-shelf components can't?
    * Reuse decisions - how will any pre-existing software you use conform to your project's requirements?
  * Change strategy - flexibility! But how much?
  * General architectural quality - architectural specification "should be a polished conceptual whole with few ad hoc additions" (pg 52). It should fit the problem and explain why the solution proposed is the right one. And why each decision is made.
    * Here's an abbreviated version of the example given here - Beth wants to make pot roast, and her husband tells her he's always made pot roast by cutting both ends off before putting it in the pot. Why? Because his mom did it that way. He asks his mom why she did it that way. Because her mom did it that way. She asks her mom why she does it that way. Because it was too big to fit in her pot! Obviously it was unnecessary for Beth, with a bigger pot, to cut off the ends.
* How much time should you spend on upstream prerequisites? Base your answer on stability of requirements and size and formality of the project
  * When requirements are unstable, treat them as their own project

4\. Key Construction Decisions
--

* Your choice of programming language for a given language *matters*.
  * It impacts both productivity and quality of work
* Factors to consider when selecting a language: 
  * your familiarity with a language
  * high- or low-level language
    * Higher level languages like C++, Java, Smalltalk, and Visual Basic increase productivity
* Programmers used to working in a certain language will often, when forced to code in a different one, write code in the syntax of the latter, but with the structure of the former.
* Descriptions of languages:
  * Ada - general-purpose; high-level; developed by Department of Defense; used in military, space, avionics applications
  * Assembly Language - low-level; each statement corresponds to a single machine instruction, so it is specific to a certain processor
  * C - general-purpose; mid-level with some high-level features; developed at Bell Laboratories; de facto standard for microcomputer and workstation programming in 1980s-90s
  * C++ - object-oriented; based on C and also developed at Bell Labs
  * C# - general-purpose; object-oriented; developed by Microsoft; similar syntax to C, C++, and Java
  * Cobol - English-like language; developed by Department of Defense around 1960; generally used for business applications; one of today's most widely-used languages
  * Fortran - the first high-level programming language; used mainly in science/engineering applications
  * Java - object-oriented; similar syntax to C and C++; developed by Sun Microsystems; used for Web applications
  * JavaScript - scripting language; used for client-side programming such as adding online applications to webpages; loosely related to Java
  * Perl - string-handling language; used for system administration and Web applications
  * PHP - open-source scripting language; syntax similar to Perl; runs on all major operating systems for server-side interactive functions; fun fact: they changed their acronym from Personal Home Page to PHP: Hypertext Processor
  * Python - interpreted, interactive, object-oriented; generally used for scripts and small Web applications
  * SQL - de facto standard for querying, updating, and managing relational databases; declarative language - good explanation of what that means [here](https://www.britannica.com/technology/computer-programming-language/Visual-Basic#ref248126)
  * Visual Basic - high-level; object-oriented; visual (as you would expect); based on Basic, which was originally developed at Dartmouth College in the '60s; developed by Microsoft; originally used for Windows applications, now also used for customization of desktop applications and creation of Web programs
* Make sure you determine your coding conventions before you start construction, otherwise your code will end up as a jumbled mess of different conventions
  * he gives the example of a fantastic painting, but part of it is classical, another cubist, and another impressionist
* Your location on the technology wave will impact how you spend your days 
  * Is the technology you're working with brand-new or has it been around awhile?
  * When working with mature technology, you have access to reliable languages, debugging tools, etc., as well as other programmers' expertise on online forums. You'll spend most of your time writing new code.
  * When working with new technology, the opposite is true - the languages are buggier, but you have fewer resources to figure out how to fix the bugs. You'll spend a lot of time just figuring out how to use the language
* Your programming tools don't have to determine your code
  * Programming in a language vs programming into a language
    * The difference is whether you limit your thoughts to what your programming language directly suppports or whether you decide what thoughts you want to express, then express them in that language

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
