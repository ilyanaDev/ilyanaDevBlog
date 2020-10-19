---
templateKey: blog-post
title: Code Complete Part 7 Notes
date: 2020-07-09T15:04:10.000Z
featuredpost: true
featuredimage: /img/code-complete-part7.png
description: Code Complete by Steve McConnell is a well-written explanation of themes in software construction.
tags:
  - codeComplete
  - software development
  - coding
  - books
---

I recently finshed the second edition of *Code Complete* by Steve McConnell. Here are my notes from the final section, **Part 7: Software Craftsmanship**.

Part 7 includes chapters 31-35: Layout and Style, Self-Documenting Code, Personal Character, Themes in Software Craftsmanship, and Where to Find More Information.

31\. Layout and Style
--

* Fundamental theorem of formatting states that good visual layout shows the logical structure of a program
* "Any fool can write code that a computer can understand. Good programmers write code that humans can understand" - Martin Fowler
* Consistency in layout minutiae is more important than the details themselves
* Aesthetics and readability can clash - prioritize readability
* Objectives of good layout:
  * Accurately represent the logical structure of the code
  * Consistently represent the logical structure of the code
  * Improve readability
  * Withstand modifications
* Layout techniques:
  * Usewhitespacetoenhancereadability
    * grouping - put related statements together
    * blank lines - separate unrelated statements
      * a study found the optimal number of blank lines in a program to be 8% to 16%
    * indentation - show the program's logical structure
  * Use more parentheses than you think you need
* Layout styles -generally have to do with laying out blocks (the groups of statements below control statements)
  * Pure blocks - possible in lanugages like Visual Basic; clear beginning and end of block with body indented past beginning and end
  * Emulating pure blocks - arrange curly braces similarly to positionings of `Then` and `End If` in pure blocks in VB
  * Treat braces as part of the block strucutre, place them right at beginning and end of block itself
  * Endline layout - collection of layout strategies where code is indented to middle or end of a line to align blocks with keywords, subsequent parameters with the first parameter, etc.

Pure Block:

``` vb
If pixelColor = Color_Red Then
    statement1
    statement2
End If
```

Emulating Pure Blocks:

``` vb
if (pixelColor = Color_Red) {
    statement1
    statement2
}
```

Braces as Part of Block Structure:

``` vb
if (pixelColor = Color_Red)
    {
    statement1
    statement2
    }
```

Endline Layout (in a rare coherent example):

``` vb
If (soldCount > 1000) Then
                            markdown = 0.10
                            profit = 0.05
                       Else
                            markdown = 0.05
                       End If
```

* In VB or Java, use pure blocks/pure block emulation, since that's the standard
* Laying out control structures - really important to readability
  * avoid unindented begin-end pairs
    * personally I disagree; I write my code with unindented begin-end pairs (when working with C# at least) and I think it adds to readability
  * avoid indentation between begin and end
    * again, disagree, though his point that this exaggerates the complexity does make some sense
  * use blank lines between paragraphs
  * format single-statement blocks consistently
  * for complicated expressions, put separate conditions on separate lines
  * avoid gotos
    * but if you use them put them an their own line and put the label they go to in all caps and on its own line
  * don't use endline layout for `case` statements - it's a complete mess
* Laying out individual statements:
  * limit lines to around 80 characters for readability (very flexible guideline)
  * use whitespace for readability
    * use spaces to make logical expressions readable
    * use spaces to make array references readable
    * use spaces to make routine arguments readable
  * Formatting continuation lines (when your statement spills over onto the next line):
    * make it blindingly obvious that the portion of the statement on the first line is incomplete on its own (by placing the continuation character at the end of the line)
      * you could also place that character at the beginning of the next line, where it will be easier to scan for
    * keep closely related elements together
    * indent routine-call continuation lines the standard amount
    * make it easy to find the end of a continuation line
    * indent control-statement continuation lines the standard amount
    * do not align right sides of assignment statements
    * indent assignment-statement continuation lines the standard amount
  * Limit yourself to one statement per line! Otherwise your code is a mess
    * This includes side effects - operators like `++`, which are not a statement's main effect but may be included in it
* Laying out data declarations:
  * use only one data declaration per line
  * declare variables close to where they're first used
  * order declarations sensibly
  * in C++ put the asterisk next to the variable name in a pointer declaration or declare pointer types
* Comments formatting tips:
  * indent a comment with its corresponding code
  * set off each comment with at least one blank line
* Laying out routines:
  * use blank lines to separate parts of a routine
  * use standard indentation for routine arguments
* Laying out classes:
  * class interfaces generally presented in following order: header comment describing class and providing notes on overall class usage, constructors and destructors, public routines, protected routines, private routines and member data
  * class implementations:
    * usually ordered: header commment describing contents of file the class is in, class data, public routines, protected routines, private routines
    * if you have more than one class in a file, identify each class clearly
* Laying out files and programs:
  * put one class in one file
  * give the file a name related to the class name
  * separate routines within a file clearly
  * sequence routines alphabetically

32\. Self-Documenting Code
--

* "Code as if whoever maintains your program is a violent psychopath who knows where you live." - Anonymous
* External documentation:
  * Unit development folders (UDFs)/Software development folders (SDFs) - informal document containing notes used by a developer during construction; sometimes projects have formal requirements for UDF content
  * Detailed-design document - low-level document recording class- and routine-level design decisions; sometimes exists only within the code
* Good programming style serves as good documentation
  * includes good structure, variable and routine names, lack of magic numbers, clear layout and formatting, etc.
  * "In well-written code, comments are [just] the icing on the readability cake"
* Essentially, commenting is super helpful, especially in providing a higher level of abstraction than the code itself. But it has to be done right or it'll cause many times more problems than it solves. And comments that just rewrite the code in English are pretty much useless
  * here, McConnell has included a really witty Socratic dialogue style discussion of the merits and shortcomings of comments entitled "The Commento." A fun read.
* Kinds of comments (bolded if acceptable in completed code):
  * Repeat of the code
  * Explanation of the code - used to explain tricky bits of code
    * usually better to improve the code rather than to add comments if the problem is overly complex code
  * Marker in the code - one that is not intended to be left in the code; its purpose is to remind a developer of a spot requiring additional work
    * if you use this, standardize your marker in order to easily search for it and not leave one in by accident
  * **Summary of the code** - slightly different from and more useful than explanations of the code
  * **Description of code's intent** - explains a section of code's purpose; operates at level of problem rather than level of solution
  * **Information that cannot possibly be expressed by the code itself** - copyright/confidentiality notices, version numbers, housekeeping details, etc.
* Techniques for efficient commenting:
  * find a commenting style requiring minimal busy work
    * use styles that don't break down or discourage modification
  * use the pseudocode programming process to reduce commenting time
  * integrate commenting into your development style (instead of just leaving all the commenting to the end)
  * performance is not a good reason to avoid commenting
    * if working in a language where commenting has a measurable performance impact, create a release version of the code without the comments
* Commenting techniques:
  * Commenting individual lines - rare and only really necessary if the single line is rather complicated and/or if the line once had an error and you'd like a record of it
    * avoid self-indulgent comments - "inside joke" type comments - as they'll just confuse anyone maintaining your code down the line
  * Endline comments - appear at the ends of lines of code
    * hard to format and a pain to maintain
    * often cryptic to save space, or just repeat the code in English
    * avoid endline comments on single lines
    * avoid endline comments for multiple lines of code
    * avoid endline comments for maintenance notes
    * use only to:
      * annotate data declarations
      * mark ends of blocks
  * Commenting paragraphs of code - most common good way of commenting
    * write comments at the level of the code's intent - describe the what/why, not the how; you can do this by considering what you would name a routine containing only the target block of code
    * focus your documentation efforts on the code itself first - make it self-documenting to the best of your ability, then check if you still need a comment
    * use comments to prepare the reader for what is to follow
      * going along with this, always put comments above the code which is being described
    * make every comment count
    * document surprises - e.g. if you've used a tricky technique for the purpose of improved performance
    * avoid abbreviations
    * differentiate between major and minor comments
    * comment anything that gets around an error or undocumented feature in a language or an environment
    * justify violations of good programming style
    * don't comment tricky code - rewrite it!
      * unless you're maintaining code, in which case you're more likely to be ok just to comment it
  * Commenting data declarations:
    * describe aspects of the variable that cannot be described by the variable name
    * comment the units of numeric data - or just embed the units in the variable names
    * comment the range of allowable numberic values; you can also use assertions for this purpose
    * comment coded meanings - or just use enumerated types
    * comment limitations on input data
    * document flags to teh bit level
    * stamp comments related to a variable with the variables name - helps ensure that comments are updated when a variable is updated
    * document global data
  * Commenting control structures:
    * put a comment before each `if`, `case`, loop, or block of statements
    * comment the end of each control structure - supplements visual cues regarding nesting provided by indentation
      * treat such comments as a warning indicating complicated code, though
  * Commenting routines:
    * avoid heavy routine headers - they are a pain and often serve only to discourage factoring, since they add an unnecessary barrier to creating routines
    * keep comments close to the code they describe
    * describe each routine in one or two sentences at the top of the routine
    * document parameters where they are declared
    * take advantage of code documentation utilities such as Javadoc
    * differentiate between input and output data
    * document interface assumptions
    * comment on the routine's limitations
    * document the routine's global effects
    * document the source of algorithms that are used
    * use comments to mark parts of your program
  * Documenting classes - use a block comment to describe:
    * design approach to the class
    * limitations, usage assumptions, etc.
    * the class interface
      * don't document implementation details in the class interface - information hiding!
  * Documenting files - give the file a name related to its contents and use a block comment including:
    * purpose and contents of each file
    * authorship and how to contact you with questions
    * a version-control tag
    * legal notices - copyright statements, confidentiality notices, etc.
* The IEEE (Institute for Electric and Electrical Engineers) has developed many Software Engineering Standards that can be very useful for construction and documentation

33\. Personal Character
--

* The thing about programming is you're the one holding yourself accountable - your boss doesn't always know what, exactly, you're working on, and in some cases they may be in no position to judge whether you're a good programmer
* There is only a loose relationship between intelligence and programming skill - "nobody is really smart enough to program computers"
  * It's more about how you focus that intelligence
  * Indeed, programmers who recognize that they aren't *really* smart enough to program computers are better programmers than those with big egos who think they can understand everything without tools like decomposition, abstraction, program reviews, and conventions
* Curiosity is super important to being a good programmer. How to exercise curiosity and prioritize learning:
  * Build your awareness of the development process
  * Experiment - learn how to make mistakes and **learn from them** in low-stakes situations
  * Read about problem-solving
  * Analyze and plan before you act
  * Learn about successful projects
    * "Thomas Kuhn points out that a part of any mature science is a set of solved problems that are commonly recognized as examples of good work in the field and that serve as examples for future work"
  * Read! Read documentation! RTFM! Read books! Read articles!
  * Affiliate with other professionals
  * Make a commitment to professional development
* Intellectual honesty - "Any fool can defend his or her mistakes - and most fools do" - Dale Carnegie
  * Refuse to pretend you're an expert when you're not
  * Readily admit your mistakes
  * Try to understand compiler warnings rather than suppressing the messages
  * Clearly understand your program - don't just compile it to see if it works
  * Provide realistic status reports
  * Provide realistic schedule estimates and hold your ground when management asks you to adjust them
* Communication and cooperation are essential
  * "Programming is communicating with another programmer first and communicating with the computer second."
* Creativity and Discipline
  * Disciplined standards actually enhance creativity - think about websites with consistent formatting and poetic forms; you need some structure to avoid wandering from creativity to chaos
  * "Form is liberating" is the saying
* Laziness
  * "True laziness" - procrastinating, putting off unpleasant tasks by doing meaningless and unnecessary tasks
  * "Enlightened laziness" - avoiding the unpleasant tasks by finishing them as soon and as fast as possible
  * "Long-term laziness" - writing a tool to do the unpleasant task for you; "undoubtedly the most productive kind of laziness"
  * Don't confuse motion/making an effort with actual progress
    * work smarter, not harder
* Characteristics that don't matter as much as you'd think:
  * Hustle - extra, unnecessary effort - you're good at working but not at getting things done
  * Persistence - good when it doesn't go to the point of pigheadedness; you have to know when to give up and try a new approach, rather than "persistently" trying the same approach for hours and hours. Better to be persistent in pursuing *a* solution, rather than any given solution in particular
  * Experience - software changes so rapidly that what you learn today on the job doesn't necessarily help you do your job better tomorrow; as a result, "experienced" programmers only benefit from that experience when they've made a commitment to ongoing learning as new techniques and technologies emerge - "if you wrk for 10 years, do you get 10 years of experience or do you get 1 year of experience 10 times? You have to reflect on your activities to get true experience."
  * Gonzo Programming - programming all night, thinking only about the program, being super excited about your project for a blaze of glory... before you burn out and then start noticing all the problems you've installed during those 4am programming sessions
* "Good habits matter because most of what you do as a programmer you do without consciously thinking about it."
  * "When you first learn something, learn it the right way."
  * If you already have a bad habit, you have to replace it with a good one rather than with no habit at all

34\. Themes in Software Craftsmanship
--

* Conquer complexity
  * Using: subsystems, careful class interfaces, **abstraction**, carefully designed error handling approach, systematic use of exception mechanism, short routines, clear variable names, minimal routine parameters, conventions
  * Not using: global data, deep inheritance, deep nesting, gotos, monster classes
* Pick your process
  * Lay a solid foundation before you jump into building the rest
  * Pay attention, conscious attention to exactly *how* you write software, from the pseudocode to the code itself
* Write programs for people first, computers second
  * Readability means your program is probably better-written to begin with and far easier to maintain in the future
  * Never favor write-time convenience over read-time convenience
* Program into your language, not in it
  * Decide what you want to do, then figure out how to do it using the tools available to you in xyz language
  * Just because your language supports a global data, gotos, etc. doesn't mean you have to use them
    * Conversely, just because your language lacks asserts, enumerated types, etc. doesn't mean you can't write a version of these tools yourself
* Focus your attention with the help of conventions
  * Conventions prevent programmers from having to devote brain power to answering arbitrary questions again and again
  * Conventions make low-level operations more predictable
* Program in terms of the problem domain
  * i.e. work in the highest level of abstraction
  * Information hiding!
  * 5 levels of abstraction:
    * Level 0: OS operations and machine instructions (dealt with automatically in high-level languages)
    * Level 1: Programming-language structures and tools - primitive data types, control structures, etc. built into the language
    * Level 2: Low-level implementation structures - stacks, queues, linked lists, search/sort algorithms, etc., etc.
    * Level 3: Low-level problem-domain terms - primitives for working in terms of the problem domain; using the vocabulary of the problem area, etc.
    * Level 4: High-level problem-domain terms - high enough abstraction to solve a problem on its own terms; code here depends on tools written at Level 3, rather than those provided by the programming language
  * Low-level techniques for working in the problem domain:
    * use classes to implement structures meaningful in problem-domain terms
    * hide information about low-level data types and implementation details
    * use named constants to document meanings of strings and numeric literals
    * assign intermediate variables to document the results of intermediate calculations
    * use boolean functions to clarify complex boolean tests
* Watch for falling rocks
  * Programming falls somewhere between art and science
  * One thing important to good programming is having good judgement and being sensitive to warning signs
  * "This is really tricky code" = "this is bad code"
  * a class with more errors than average = a class that will continue having more errors than average
  * lots of debugging on a project = flawed process for writing said project
  * you, the programmer, struggle to understand the program you are writing = other people will struggle even more
  * design metrics often serve as heuristic warning signs - there isn't necessarily anything wrong, but there are more likely to be problems if:
    * a class contains >7 members
    * a routine has >10 decision points
    * a loop has >3 levels of nesting
    * classes have poor cohesion
* Iterate, reapeatedly, again and again
  * Iterate through requirements, design, code tuning, reviews, etc., etc.
* Thou shalt rend software and religion asunder
  * Don't use the latest software miracle fad blindly and forget all the old, dependable methods you know; experiment with the new technique, but don't be afraid to go back to the old methods if they work better
  * Don't have blind faith in one method you've been using forever, and don't be afraid to try a new approach when the old one is running you into stumbling blocks
  * Keep an open mind about all aspects of software development

35\. Where to Find More Information
--

* "People have already made all the mistakes that you're making now"
* Information about software construction:
  * *Pragmatic Programmer* by Hunt and Thomas - testing, debugging, etc.
  * *Programming Pearls" by Jon Bentley - essays describing effective construction techniques
  * *Extreme Programming Explained: Embrace Change* by Kent Beck - construction-centric approach to software development
  * *Writing Solid Code - Microsoft's Techniques for Developing Bug-Free C Software* by Steve Maguire
  * *The Practice of Programming* by Brian Kernighan and Rob Pike - nitty gritty, practical aspects of programming
  * *Programmers at Work* by Susan Lammers - interviews with high-profile programmers; out of print but worth the search
* Topics beyond construction:
  * *Facts and Fallacies of Software Engineering* by Robert L. Glass - introduction to conventional wisdom of software development
  * *Professional Software Development* by Steve McConnell
  * *Swebok: Guide to the Software Engineering Body of Knowledge* by Abran - detailed decomposition of software-engineering body of knowledge
  * *The Psychology of Computer Programming* by Gerald Weinberg - lots of informational anecdotes about programming
  * *The Mythical Man-Month* by Brooks - programming = people first, computers second
  * *PeopleWare* by DeMarco and Lister - programming = people first, computers second
  * *Software Creativity* by Glass - creativity vs. discipline, theory vs. practice, heuristics vs. methodology, etc.
  * *Software Engineering: A Practitioner's Approach* by Roger S. Pressman - explanation of requirements, design, quality validation, management, high-level software engineering topics
  * *Software Engineering* by Ian Sommerville - high-level overview of software development
* Periodicals:
  * *Software Development* magazine - not environment-specific
  * *Dr. Dobb's Journal* magazine - lots of code
  * *IEEE Software* journal
  * *IEEE Computer* journal
  * *Communications of the ACM* journal
* A Software Developer's Reading Plan:
  * Introductory Level:
    * *Conceptual Blockbusting: A Guide to Better Ideas* by James L. Adams
    * *Programming Pearls* by Jon Bentley
    * *Facts and Fallacies of Software Engineering* by Robert L. Glass
    * *Software Project Survival Guide* by Steve McConnell
    * *Code Complete* by Steve McConnell - done!
  * Practitioner Level:
    * *Software Configuration Management Patterns: Effective Teamwork, Practical Integration* by Stephen P. Berczuk and Brad Appleton
    * *UML Distilled: A Brief Guide to the Standard Object Modeling Language* by Martin Fowler
    * *Software Creativity* by Robert L. Glass
    * *Testing Computer Software* by Cem Kaner, Jack Falk, and Hung Q. Nguyen
    * *Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and the Unified Process* by Craig Larman
    * *Rapid Development* by Steve McConnell
    * *Software Requirements* by Karl Wiegers
    * "Manager's Handbook for Software Development" from NASA Goddard Space Flight Center from [here](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19840015082.pdf)
  * Professional Level
    * *Software Architecture in Practice* by Len Bass, Paul Clements, and Rick Kazman
    * *Refactoring: Improving the Design of Existing Code* by Martin Fowler
    * *Design Patterns* by Erich Gamma
    * *Principles of Software ENgineering Management* by Tom Gilb
    * *Writing Solid Code* by Steve Maguire
    * *Object-Oriented Software Construction* by Bertrand Meyer
    * "Software Measurement Guidebook" from NASA Goddard Space Flight Center from [here](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19980228474.pdf)
* Where to find where to find more information:
  * *ACM Computing Reviews*
  * Construx Software's Professional Development Ladder website
* Join a professional organization

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
