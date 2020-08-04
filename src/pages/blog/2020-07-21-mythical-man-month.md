---
templateKey: blog-post
title: The Mythical Man-Month
date: 2020-07-21T07:04:10.000Z
featuredpost: false
featuredimage: /img/mythical-manmonth.png
description: The Mythical Man-Month by Fred Brooks is considered somewhat of a classic in the world of books about software.
tags:
  - software development
---

Indeed, it is near-impossible to read a book about software without some mention of *The Mythical Man-Month*. So I decided to read it and see what it was all about. I read the 1995 edition, which adds a few chapters at the end. Here's what I learned:

Firstly, practically every (if not every) chapter contains some method of the concept of conceptual integrity, the idea that software, like an airplane or a building, should have a consistency to its design and not be a hodge-podge of different designers' creations. To that end, Brooks argues that every software project have only a single architect, except in cases of massive projects which might require a team of architects.

Chapter 1: The Tar Pit
--

* Simple programs are easy and complete in themselves. But components of programming systems, programming products, and programming system products are far more complex because each component must be tested in conjunction with all other components
* "The magic of myth and legend has come true in our time. One types the correct incantation on a keyboard, and a display screen comes to life, showing things that never were nor could be."
* "Woes of the Craft" of software creation:
  * you must perform your "incantation" perfectly
  * other people set your objectives
  * you spend a lot of time searching for tiny bugs
  * your project always seems to grow obsolete quickly

Chapter 2: The Mythical Man-Month
--

* Why are we so bad at estimating how long a project will take and at dealing with the effects of poor estimates?
  * we assume everything will go well
  * effort is confused with progress
  * software managers are unwilling to make the customer wait
  * schedule progress is poorly monitored
  * the immediate response to a project falling behind schedule is to add manpower
* "the man-month as a unit for measuring the size of a job is a dangerous and deceptive myth."
  * it assumes constant returns to scale
  * the man-month is only accurate when a task can be divided among the workers with no communication between them
  * in the presence of sequential constraints, added manpower or effort will not cut down the schedule
  * when lots of communication is required (as is often the case in software), you end up with decreasing and even negative returns to scale
* Allow **LOTS** of time for testing - way, way more than you think you'll need
  * managers and customers don't want unexpected bad news right before the deadline
* It's important to give customers a less optimistic completion date, rather than trying to promise an overly optimistic schedule
* **"Adding manpower to a late software project makes it later."**
* "More software projects have gone awry for lack of calendar time than for all other causes combined."

Chapter 3: The Surgical Team
--

* A small team of really good programmers is theoretically ideal but is impractical when trying to build large systems quickly (this small team is an efficient but slow method)
* Harlan mills said you should break a large job up into segments, each to be tackled by a "surgical team" where one person does the cutting and everyone else supports
  * surgeon = chief programmer - defines specifications; designts, tests, codes program; writes documentation; very experienced and talented
  * copilot - less talented surgeon
  * administrator - deals with personnel, raises, space, and interactions with the rest of the organization
  * editor - edits documentation
  * secretaries for administrator and editor
  * program clerk - responsible for machine-readable and human-readable files; logs computer input/output
  * toolsmith - builds custom tools for project
  * tester - devises test cases, plans testing sequences
  * language lawyer - knows all the ins and outs of a given language
* This organization allows for **conceptual integrity** of the work and less time wasted on communication
* How to scale up? Have more 10-man teams, resulting in each component having conceptual integrity. Then, only surgeons have to coordinate. You'll also need a system architect to ensure conceptual integrity for the whole system

Chapter 4: Aristogracy, Democracy, and System Design
--

* Brooks claims that "conceptual integrity is *the* most important consideration in system design
* **conceptual integrity** leads to system straightforwardness leads to ease of use
* A system must be built from one mind for conceptual integrity but many hands for schedule
  * either separate fully architecture and implementation
  * or use surgical approach
* "Good features and ideas that do not integrate with a system's basic components are best left out"

Chapter 5: The Second-System Effect
--

* The architect interacts with the builder, sometimes suggesting cheaper or more effective implementations
* When the architect first designs the system, it is clean and spartan, but in the process embellishments are conceived of to be added "next time.
* "The second system is the most dangerous system a man ever designs."
* How to avoid the second system effect? Be aware of the hazards and be prepared to self-discipline

Chapter 6: Passing the Word
--

* How do you have 10 architects maintain the conceptual integrity of a system being built by 100 programmers?
* Written specifications - the manual
  * describes UI, avoids descriptions of implementation
* Formal definitions
  * English isn't designed for precise definitions
  * formal definitions lead to precision but lack comprehensibility
* direct incorporation
  * I think here he more or less describes self-documenting code?
* conferences and courts - hold meetings!
* multiple implementations
* implementators need to contact architects if they have questions; architect keeps telephone log of these questions and answers and distributes it to team (like an FAQ)
* product testing

Chapter 7: Why did the Tower of Babel Fail?
--

* Prerequisites for success:
  * clear mission
  * manpower
  * materials
  * time
  * technology
  * communication
  * organization
* vast majority of failures in software projects because "left hand doesn't know what the right hand is doing"
* How can teams communicate with each other?
  * in as many ways as possible - informally, meetings, formal project workbook, etc.
* Workbook = structure imposed on documents produced by the project
  * leads to crafted, rather than haphazard, documentation
  * leads to control of information distribution
* Each programmercan have a loose leaf copy of the workbook, which is easily maintained and added to
  * with today's (30+ years ago) tech, best done with direct access file marked with change bars and revision dates
* "The purpose of organization is to reduce the amount of communication"
  * division of labor and specialization of function result in communication being obviated
* tree organization is poor (yet effective?) approximation of communication organization
  * each sub tree = staff group, force, committee, etc.
    * contains a misssion, a producer, a technical director/architect, a schedule, a division of labor, and interface definitions among the parts
* producer assembles team, divides work, establishes schedule
  * big role in communication outside the team
* Technical director conceives design, identifies subparts and interface, preserves conceptual integrity
  * communications inside team, technical work
* 3 possible relationships between successful producer-director team:
  * producer and director = same person
    * only workable on tiny teams (<6 people)
  * producer = boss, director = right-hand man
  * director = boss, producer = right-hand man

Chapter 8: Calling the Shot
--

* How to estimate the length and number of programmers needed for a programming project?
  * take non-programming activities (meetings, paperwork, sick time, etc.) into account
  * keep time spent on communication in mind
* programming productivity increases when a higher-level language is used

Chapter 9: Ten Pounds in a Five Pound Sack
--

* "Aside from running time, space occupied by a program is a principal cost"
* set both total size budgets and resident-space budgets
* define a module's exact requirements when you specify its size
* if all else fails in your search to make your program smaller, try to optimize your data instead

Chapter 10: The Documentary Hypothesis
--

* documents for a software project - objectives, product specs, space allocation, organization chart
* the manager has lots of things to do, and having documentation greatly increases communication clarity

Chapter 11: Plan to Throw One Away
--

* plan the time you'll inevitably spend on a pilot/throwaway system anyway
* the only constancy is change
* plan the system itself (not just your process) for change

Chapter 12: Sharp Tools
--

* Teams should share tools and develop efficient ways of sharing communal equipment
* Using high-level language leads to increased productivity and debugging speed

Chapter 13: The Whole and the Parts
--

* Designing bugs out of a system
  * careful definition, architecture, specifications, etc.
  * testing of specification
  * argues that top-down design leads to fewer bugs
  * structured programming - use only "normal" while, for, etc. loops and if-else statements; no gotos or case statements
* System debugging
  * use debugged components
  * build plenty of scaffolding
  * control changes
  * add one component at a time
  * quantize updates

Chapter 14: Hatching a Catastrophe
--

* **How does a project get to be a year late? One day at a time**
* How to control a project on a tight schedule? The first step is to have a schedule
  * set *concrete* and overly specific milestones. These should be unambiguous and verifiable
* Create a critical-path schedule to track which pieces are on the critical track (i.e. any delay in these pieces delays the completion date of the project)
  * involves identifying dependencies

Chapter 15: The Other Face
--

* Programs have two readers - people and machines
* Program attributes useful to note in documentation:
  * purpose
  * environment
  * domain/range (of input/output)
  * functions realized and algorithms used (what does it do?)
  * input-output formats
  * operations
  * instructions
  * options that the user has
  * running time
  * accuracy and checking
* 3 types of test cases to run after modifications to program:
  * mainline cases testing normal program functions on nominal data
  * barely legitimate (almost outside range of valid data) test cases
  * barely illegitimate (just outside range of valid data) test cases
* Flow charts of a program's decision structure can be pretty useful - if they can be limited to 1 page
  * but they really aren't terribly useful
* It's really hard to maintain two parallel yet independent documents at the same time
  * Thus, self-documenting code far superior

Chapter 16: No SIlver Bullet - Essence and Accident in Software Engineering
--

* avoid constructing what can be bought
* use rapid prototyping to help establish software requirements
* grow systems organically - don't try to build oodles of features before you've fully tested the basic functionality
* **there's no silver bullet to magically make software development *significantly* easier**
* 2 types of difficulties in software engineering:
  * essence - difficulties inherent in the nature of software
  * accidents - non-inherent difficulties currently associated with software production
* Conceptual errors are orders of magnitude more important than syntax errors
* essence problems:
  * complexity (there are no repeated elements in good software)
  * conformity (to real-world interfaces)
  * changeability
  * invisibility/intangibility
* scaling up software != adding repetitions of already extant components
* solved accidental difficulties:
  * high-level languages
  * time sharing (as opposed to batch programming)
  * unified programming environments/IDEs
* Proposed Silver Bullets:
  * Ada and other high-level languages
    * deal with accidental issues, provide incremental progress (i.e. not going to be silver bullet)
  * object-oriented programming
    * abstract data types and hierarchical types (classes)
    * deals with accidental difficulties, provides incremental progress
  * AI
    * maybe it could be a silver bullet?
  * "Automatic" programming
    * user provides problem specs, program spits out code to solve it
    * unlikely to happen (Brooks thinks), but would be very useful if it worked
  * Graphical programming
    * use computer graphics for software design
    * Brooks predicts this won't provide any significant gains
  * Program verification
    * can really only establish that a program meets its specification, not the validity of the specificationitself
  * Environments and tools
    * can provide marginal improvements on accidental difficulties
  * Workstations
    * marginal; programmer "think-time" takes too big a slice of the pie for even large gains in compile speed, etc. to matter much
* Productivity Equation:
  * T = sum(f x t)
    * T = time of task
    * f = frequency of a component
    * t = time that component takes
* Promising Silver Bullets:
  * buy components rather than reinventing the wheel
    * LOTS of potential
  * requirements refinement and rapid prototyping
  * incremental development - "growing" software rather than "building" it
    * in the 1950s the language moved from "writing" software to "building" it. Brooks argues we must now make the transistion to "growing" software. Though, personally, I think the construction metaphor seems likely to stick around for awhile
    * necessitates top-down design
  * great designers
    * following good design practices
    * companies should put more effort into cultivating great designers and less into cultivating great managers

Chapter 17: "No Silver Bullet" Refined
--

* this chapter is dedicated to Brooks revisiting chapter 16 and people's responses to it after a decade
* essentially, marginal improvements can be made, but a silver bullet to bestow orders-of magnitude improvements upon software development doesn't exist. But that means we should devote lots of time to the pursuit of many different marginal improvements, rather than following the siren call of the silver bullet
  * by all means pursue the techniques analyzed in chapter 16, just don't expect any of them to work magic in isolation
* mass-market software packages are, in reality, far more customizeable than originally predicted
* object-oriented design could be a brass bullet
* object-oriented techniques lead to easy reuse
* reuse requires both good design and excellent documentation
* "Now, perhaps, we can get on with the incremental improvements to software productivity that are possible, rather than waiting for the breakthroughs that are not likely to ever come." -R.L. Glass

Chapter 18: Propositions of *The Mythical Man-Month*: True or False?
--

* coming back 20 years after the original publishing
* mostly a summary of the other chapters, with a few notes here and there
  * e.g. noting the existence of "electronic mail"
* notes that with regards to Chapter 11: Plan to Throw One Away, most programming projects are "now" (mid-1990s, though still true today as far as I know) rolled out in beta versions first

Chapter 19: *The Mythical Man-Month* After 20 Years
--

* **Conceptual integrity**
  * central to product quality
  * achieved via a *single* architect
* personal computer revolution means more general-purpose applications are being developed and sold
  * paradoxically, these are harder to design than custom systems
  * these often feature from featuritis - adding so many features that performance and ease of use are negatively impacted
* The WIMP interface "now" exists
  * Windows, Icons, Menuse, Pointing interface
  * essentially what everything uses
  * has great conceptual integrity
  * Brooks predicts WIMP will soon be a thing of the past
* "Plan to throw one away" from ch. 11 is flawed because it assumes perfect architecture
* incremental building and progressive refinement are good stuff
* consider a software product's place in a *family* of related products
  * lateral extensions and different versions of a project
  * in the family tree, the design decisions least likely to change should reside near the root
* concedes ch. 7's assertion that all team members should see all documentation was incorrect.
* the quality of a project's people, organization, and management have a greater impact on project quality than the tools and techniques used
* computers' widespread use have granted a previously lacking fluidity to art, architectural designs, manuscripts, photographs, etc.
* the "shrink-wrapped code" industry and startup culture flourished together
* buy and build - shrink-wrapped packages can be used as components

Epilogue: Fifty Years of Wonder, Excitement, and Joy
--

The industry is continuing to grow at an unslackening rate. Opportunities to learn more abound.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
