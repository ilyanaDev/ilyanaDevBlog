---
templateKey: blog-post
title: Code Complete Part 2 Notes
date: 2020-06-19T15:04:10.000Z
featuredpost: true
featuredimage: /img/code-complete-part2.png
description: Code Complete by Steve McConnell is a well-written explanation of themes in software construction.
tags:
  - codeComplete
  - software development
  - coding
  - books
---

I'm working my way through the second edition of *Code Complete* by Steve McConnell. Here are my notes from **Part 2: Creating High-Quality Code**.

Part 2 includes chapters 5-9: Design in Construction, Working Classes, High-Quality Routines, Defensive Programming, and the Pseudocode Programming Process.

5\. Design in Construction
--

* Design is inevitably a part of construction
* "Recognizing design as an explicit activity maximizes the benefit you will receive from it."
* Design is about trial and error in many cases - "Even the small program developments shown in textbooks and papers are unreal. They have been revised and polished until the author has shown us what he wishes he had done, not what actually did happen." -- David Parmas and Paul Clements
* Design is a "wicked problem" because you often have to solve the problem (i.e. design the code) in part or in whole before you can actually fully understand the problem and then solve it.
  * Not really true in school assignments, but definitely true professionally
* Design entails making a lot of mistakes
* Design is about tradeoffs - for example, is it more important to develop the code faster or give the code a faster response time?
* In design, you put limits on your project
* Make sure you have a variety of tools in your toolbelt - no one tool can solve every design problem
* According to Fred Brooks, there are two types of problems in developing software - essential and accidental
  * Essential properties are properties a thing must have in order to be that thing (i.e. two wheels, handlebars, pedals, and a seat to be a bicycle)
  * Accidental properties are properties a thing just happens to have but that have no impact on whether that thing is that kind of thing (i.e. the color, number of gears, width of tires, etc. for a bike)
  * Most accidental difficulties in software have been solved - languages have good syntax, etc. - low-level problems
  * Essential problems in software are far harder to address because software must interact with the unpredictable and complex real world
* Projects generally fail not for technical reasons but because of poor design, planning, or management
  * When they do fail for technical reasons, the reason is usually complexity - the code has grown so complex that no one really understands what it does or what effect changes to one area will have on the program as a whole
* Managing complexity is one of the biggest pieces of any modern software project
* Modern software is so complex that no one human brain could possibly hold all of it at once
  * Projects need to be well-organized so that a programmer can focus on one area at a time
  * "Humans have an easier time comprehending several simple pieces of information than one complicated piece."
* 3 sources of costly and ineffective designs:
  * complex solution to simple problem
  * simple, incorrect solution to complex problem
  * inappropriate, complex solution to complex problem
* Desirable characteristics of a design:
  * Minimal complexity
  * Ease of maintenance - "design the system to be self-explanatory"
  * Loose coupling - as few connections as possible between different parts of the program
  * Extensibility - you can expand or make changes to your system without damaging the base framework
  * Reusabilty - design so that pieces can be reused in other systems
  * High fan-in - you have a lot of classes utilizing a given class; the system makes good use of utility classes at lower levels
  * Low-to-medium fan-out - a given class uses a small number of other classes, otherwise it may be unnecessarily complex
  * Portability - you can easily move the system to another environment
  * Leanness - the system has no extra parts
  * Stratification - keeping levels of decomposition stratified so you can view the system at any single level to get a consistent view
    * for example, if your program needs to use old, messy code, design a layer to interface with that code, then the layer on top of that will use only classes from the interfacing layer and not interact at all with the old code
  * Standard techniques
* 5 levels of design:
  * Software system
  * Division into subsystems/packages
  * Division into classes within packages
  * Division into data and routines within classes
  * Internal routine design
* When designing your subsystems, keep in mind that if all subsystems can communicate with all other subsystems, you lose the benefit of separating them at all
* Common Subsystems
  * Business rules - laws regulations, policies, procedures, etc. encoded in the system
  * User interface - should be isolated so that you can update your UI without damaging the rest of the program
  * Database access - you can contain the low-level procedures of database access to a single subsystem
  * System dependencies - isolate your program's interfacing with the operating system so that you can easily move your program to a different OS if desired
* Internal routine design is often left to the programmer. It should be done consciously in order for it to be done well
* Some heuristics for good design:
  * Find real-world objects
    * identify objects and attributes
    * determine what can be done to each object
    * determine what each object can do to other objects
    * determine the parts of each object that will be visible to other objects
    * define each objects public interface
  * Form consistent abstractions
    * important to managing complexity
  * Encapsulate implementation details
    * encapsulation means you are forbidden to examine irrelevant details of a complex concept
  * Inherit - when inheritance simplifies the design
    * inheritance fits very well with the concept of abstraction because it allows you to view objects at different levels of detail
    * polymorphism - the ability of a language to support operations (with a door object, for example) like `Open()` or `Close()` without knowing until runtime what kind of door you're dealing with
      * supported by object-oriented languages like C++, Java, and Visual Basic
  * Hide secrets (information hiding)
    * it's all about hiding complexity
    * your class should be like an iceberg, with most of the inner workings concealed
    * information hiding also means that functions are well-isolated, so if you need to make changes to the function, you can do that within the function itself rather than making changes throughout your code
    * there are two categories of information you should hide - details that add complexity and sources of change (in order to localize the effects of said change)
    * Barriers to information hiding - both mental blocks and other issues
      * excessive distribution of information
      * circular dependencies
      * class data mistaken for global data
      * perceived performance penalties
  * Identify areas likely to change
    * isolate unstable areas so changes to those won't require changes to the rest of the system
    * Some common areas of change:
      * business rules
      * hardware dependencies
      * input and output
      * nonstandard language features
      * difficult design and construction areas
        * difficult things might be done poorly and need to be redone
      * status variables
      * data-size constraints
    * design your system such that the scope of effects of likely changes is small, and the scope of effects of unlikely changes can be larger
  * Keep coupling loose
    * coupling = how tightly a class or routine is related to other classes or routines
    * modules should have the same level of attachment to one another as business associates do, as opposed to Siamese twins
    * couplings should be small (i.e. small interfaces of classes, and therefore few connections between them), visible (blatantly obvious), and flexible (easy to change, like a USB, rather than something you have to solder together)
    * Kinds of Coupling:
      * Simple-data-parameter coupling - good; all data passed are primitive and data is passed through parameter lists
      * Simple-object coupling - fine; class instantiates an object
      * Object-parameter coupling - when `Object1` requires `Object2` to pass it an `Object3`; tighter than simple-data-parameter coupling
      * Semantic coupling - bad; when a module has semantic knowledge of another module's inner workings. When this is done wrong, it's very subtle, which makes debugging very painful
  * Look for common design patterns
    * "Most problems are similar to past problems"
    * common patterns: Adapter, Bridge, Decorator, Facade, Factory Method, Observor, Singleton, Strategy, Template Method
    * patterns reduce complexity because they provide abstractions
    * patterns reduce errors because you're using a solution developed from others solving a similar problem many times
    * considering patterns suggests design alternatives
    * using patterns rasies your communication of your design to a higher level
    * **don't** force your code to fit a certain pattern, though
  * Aim for strong cohesion
    * ensure that all routines in a class or all code in a routine is working toward the same central goal
  * Build hierarchies
    * have a higher level for the big picture and reserve the details for the lower levels
  * Formalize class contrasts
    * a class says, essentially, supply me a, b, and c with properties x, y, z, and I'll output w
  * Assign responsibilities
  * Design for test
  * Avoid failure
    * don't just follow previous successes; look at the ways your system might fail and account for them
  * Choose binding time consciously
    * binding time = the time a specific value is bound to a variable
    * earlier binding = simpler and less flexible
  * Make central points of control
    * only one right place to find any nontrivial piece of code
  * Consider using brute force
    * "a brute-force solution that works is better than an elegant solution that doesn't work"
  * Draw a diagram
  * Keep your design modular
    * each routine is a black box - you know what goes in and what comes out; that's it.
* If you're getting stuck on your design, try another approach, diagram it in a different way, or just leave the problem entirely and take a walk to clear your head
  * You also don't have to resolve all the issues in the design process. If you leave 20% of issues to be resolved later, they'll be much more clear later and you'll devise better solutions
* Design *practice* heuristics (how to actually go about designing something):
  * Iterate
    * continuously switch between examining different levels of the issue so that the dynamic between areas becomes clear
    * when you think your design is good enough, design the whole thing again
  * Divide and conquer
  * Top-down and bottom-up design approaches
    * when following a top-down approach, keep decomposing your program until it would be easier to code the next level than to decompose it - the solution should be mind-numbingly clear at this point
      * top-down allows you to defer design details
    * bottom-up is best when you need something more tangible to deal with before you move on to higher levels of abstraction
      * often results in a compact and well-factored design
      * very hard to use exclusively - but that's ok because it's fine to use other approaches too
      * sometimes you'll hit a dead end with this when you realize you can't fit a program together from the low-level pieces you've assembled
  * Experimental prototyping
    * again, sometimes you need to solve part of the problem before you fully understand it
    * prototyping in this case is writing a bare minimum of throwaway code needed to answer a *specific* design question
      * For example, do some performance testing on tables populated with junk data to answer "Will this database framework support 1,000 transactions per second under assumptions X, Y, and Z?" rather than to answer "Will this database framework work?"
      * keep in mind that this is *throwaway* code. Don't go trying to implement it in your final product. You can prevent this by doing your prototyping in a different technology (Python for a Java project, etc.) or prefixing all prototype file names with "prototype"
  * Collaborative design
    * whether it's an informal chat with a coworker or a formal meeting, or you leave the design in your desk drawer for a week and then reexamine it yourself, collaboration allows errors to be found and new approaches to be suggested
* How to capture design work
  * formal design document
  * insert design documentation into the code itself
    * great for other programmers bc the documentation for a given segment of code is readily available and the documentation will probably stay up-to-date
  * capture design discussions and decisions on a Wiki
    * especially good if you have a geographically distributed team
  * Write e-mail summaries
    * designate a person after each design discussion to summarize what was decided in an email to the team, which is archived with other design materials
  * Use a digital camera
    * Take pictures of your whiteboard drawings instead of trying to deal with digital drawing tools
  * Save design flip-charts
    * you can even post them on the walls around the project area for increased accesibility
  * Use CRC (Class, Responsibility, Collaborator) Cards
    * each card has a class name, the class's responsibilities, and other classes it collaborates with
  * Create UML designs at appropriate levels of detail  
    * UML = unified modeling language
    * essentially a standardized way of sketching out design entities and relationships
  
6\. Working Classes
--

* Programming has evolved from being a matter of statements to a matter of routines to, now, a matter of classes
* Class = "collection of data and routines that share a cohesive, well-defined responsiblity" || "a collection of routines that provides a cohesive set of services
* "A key to being an effective programmer is maximizing the portion of a program that you can safely ignore while working on any one section of code"
  * Classes let you do that
* Abstract data type (ADT) = collection of data & operations that work on that data
* Benefits of ADTs
  * You can hide implementation details
  * Changes don't affect the whole program
  * You can make the interface more informative
  * It's easier to improve performance
  * The program is more obviously correct
  * The program becomes more self-documenting
  * You don't have to pass data all over your program
  * You're able to work with real-world entities rather than low-level implementation structures
* The code in any given routine in a simple ADT like `currentFont` is likely to be pretty simple, but you've simplified things by increasing abstraction
* Guidelines for using ADTs
  * Build or use typical low-level data types as ADTs instead
  * Treat common objects such as files as ADTs
  * Treat even simple items as ADTs
  * Refer to an ADT independently of the medium it's stored in
    * Access routines on the ADT interface should refer to data in the ADT by what the data is, not where it's stored
* Apparently in non-object-oriented envrionments like C, having multiple instances of an ADT is a pain but can be done
* "ADTs form the foundation for the concept of classes"
  * Class = ADT + inheritance + polymorphism
* "The first and probably most important step in creating a high-quality class is creating a good interface"
* How to give an interface good abstraction
  * Present a consistent level of abstraction in the class interface
    * A class is a mechanism to implement one and only one ADT
    * Only use inheritance for "is a" relationships
  * Be sure you understand what abstraction the class is implementing
    * When you have to choose between two similar abstractions (i.e. a spreadsheet control vs. a grid control), be sure to pick the right one
  * Provide services in pairs with their opposites
    * `TurnLightOn()` and `TurnLightOff()`
  * Move unrelated information to another class
  * Make interfaces programmatic rather than semantic when possible
    * Programmatic part of interface contains data types and attributes that can be enforced by the compiler
    * Semantic part includes unenforcable considerations like "`RoutineA` must be called before `RoutineB`
      * This should be documented in comments but also minimized
  * Beware of erosion of the interface's abstraction under modification
  * Don't add public members that are inconsistent with the interface abstraction
  * Consider abstraction and cohesion together
* How to have good encapsulation
  * Minimize accesibility of classes and members
  * Don't expose member data in public
  * Avoid putting private implementation details into a class's interface
  * Don't make assumptions about the class's users
    * Just follow the contract
  * Avoid friend classes
  * Don't put a routine into the public interface just because it uses only public routines
  * Favor read-time convenience to write-time convenience
    * Code is read far more often that it is written
  * Be very wary of semantic violations of encapsulation
    * Your encapsulation is only effective if users of the class don't need to look at the implementation to understand how to use the class
    * For example
      * if ClassA's `PerformFirstOperation()` routine calls ClassA's `InitializeOperations()` routine, the user wouldn't call `InitializeOperations()` even though the interface on its own suggests that they should
  * Watch for coupling that's too tight
* Containment = "has a" relationships
  * Class contains primitive data element or object
* "Has a" relationships should be implemented through private inheritance only as a last resort
* Be critical of classes containing more than 7 data members
  * If you're exceeding 7 plus/minus 2 data members in a class, that's a good sign your class might need to be broken up into multiple classes
* Inheritance = "is a" relationships
  * "Design and document for inheritance or prohibit it"
  * Liskov Substitution Principle (LSP) = "subclasses must be usable through the base class interface without the need for the user to know the difference"
    * When adhered to correctly, inheritance provides very good abstraction
  * Only inherit what you want to inherit
    * Do you want implementation, interface, or both?
      * If you only want implementation, use containment
  * Don't reuse names of non-overridable base-class routines in derived classes
  * Move common interfaces, data, and behavior as high as possible in the inheritance tree
  * Be suspicious of classes with only one instance
  * Be suspicious of base classes with only one derived class
  * Be suspicious of classes that override a routine and do nothing inside the derived routine
  * Avoid deep inheritance trees
    * More than 2 or 3 levels of inheritance leads to way too much complexity
  * Prefer polymorphism to extensive type checking
  * Make all data private, not protected
    * If a derived class needs access to the data, have it use a protected accessor function
  * Multiple inheritance should be used sparingly, if at all. It should really only be used to inherit from mixins (abstract classes)
* Guidelines for implementing a class's member functions and data:
  * Keep the number of routines in the class as small as possible
  * Disallow implicitly generated member functions and operators you don't want
    * i.e. constructors or assignment operators
  * Minimize the number of different routines called by a class
  * Minimize indirect routine calls to other classes
    * Law of Demeter = Object A can call any of its own routines. If Object A instantiate an Object B, it can call any of Object B's routines. But it should avoid calling routines on objects provided by Object B
  * Generally, minimize the extent to which a class collaborates with other classes
* Guidelines for constructors:
  * Initialize all member data in constructors if possible
  * Enforce the singleton property by using a private constructor
    * Singleton property = if you want only one instance of a certain class
  * Prefer deep copies to shallow copies until proven otherwise
    * deep copies = member-wise copy of object's member data
    * shallow copy points to or refers to single reference copy
      * motivation for these mainly performance improvement, but it doesn't do that much
* Good reasons for creating a class:
  * Model real-world objects
  * Model abstract objects (e.g. Shape, which is an abstraction of Circle, Square, etc.)
  * Reduce/Isolate complexity
  * Hide implementation details
  * Limit effects of changes
  * Hide globabl data
  * Streamline parameter passing
  * Make central points of control
  * Facilitate reusable code
  * Plan for a family of programs (i.e. isolate parts you expect to change so that large changes will only impact certain areas of the code)
  * Package related operations
  * Accomplish a specific refactoring
* Classes to avoid
  * God classes (omniscient and omnipotent)
  * Irrelevant classes (e.g. if it contains data and no behavior)
  * Classes named after verbs (i.e. it contains behavior and no data)
* Methods for creating polymorphism vary by language, so keep that in mind
* Classes can also be organized into packages (officially in languages like Ada and Java, or you can force it with programming standards in a different language) in order to achieve more abstraction

7\. High-Quality Routines
--

* Good reasons for creating routines:
  * Reduce complexity
  * Introduce an intermediate, understandable abstraction
  * Avoid duplicate code
  * Support subclassing
  * Hide sequences
    * Routines shouldn't have to "know" the order in which another routine is called in order to function properly
  * Hide pointer operations
  * Improve portability
  * Simplify complicated boolean tests
    * increased readability bc complex boolean tests are a pain to read
  * Improve performance
* Don't create a routine simply to keep routines small; if a new routine keeps another class small *and* fulfils one of the above conditions, then you should make it. Otherwise, don't.
* There is often a reluctance to creating whole routines to contain a few lines (or less) of code, but doing so is actually very helpful
  * it reduces errors
  * it increases readability
  * also, "small operations tend to turn into larger operations" so putting a small operation in its own routine makes it easier to make necessary alterations later
* Routines should be cohesive - they should do one thing and one thing only
  * highly cohesive routines increase reliability and decrease complexity
* Types of cohesion
  * Functional cohesion - **the best kind**; when a routine performs one and only one operation
  * Less than ideal types:
    * Sequential cohesion - a routine contains operations that must be done in a certain order and share information from step to step but don't make up a complete function together
    * Communicational cohesion - when operations in a routine are related only in that they use the same data
    * Temporal cohesion - when operations are combined into a routine because they're all done at the same time
      * keeping in mind that *calling* other operations in a routine is acceptable, but don't code for all of them within that routine (and, of course, make sure they're actually relevant)
  * Unacceptable types:
    * Procedural cohesion - when operations in a routine are done in a specified order (for no particular reason)
    * Logical cohesion - when you've got a whole bunch of operations stuffed into a routine in an if or case statement, and one is selected by a flag passed to the program. You should just make several routines
      * *Unless* the if/case statement simply *calls* other routines. That's called an event handler, and it's very useful in GUI especially
    * Coincidental cohesion - when the only relationship between operations in a routine is that they are in a routine together
* Guidelines for routine names:
  * Describe everything the routine does
    * if doing so leads to excessively long routine names, your routine is doing too much
  * Avoid meaningless, vague, or wishy-washy verbs
    * `HandleCalculation()` `ProcessInput()` `DealWithOutput()`
  * Don't differentiate routine names solely by number
  * Make routine names as long as necessary
  * Functions should be named with a description of the return value
  * Procedures should be named with a verb followed by an object
    * Except in object-oriented languages, where you should only need the verb, since you'll call `document.Print()` rather than `PrintDocument()`
  * Use opposites precisely
  * Establish conventions for common operations
    * naming conventions are usually easiest and most reliable
* How to minimize routine interface issues:
  * Put parameters in input-modify-output order
  * Consider creating your own IN and OUT keywords using the preprocessor
  * If several routines use similar parameters, put the similar parameters in a consistent order
  * Use all the parameters
  * Put status or error variables last
  * Don't use routine parameters as working variables
    * use local variables instead
  * Document interface assumptions about parameters
  * Limit the number of routine parameters to about 7
  * Consider an input, modify, and output naming convention for parameters
  * Pass the variables or objects that the routine needs to maintain its interface abstraction
  * Use named parameters
    * associate formal parameters with actual errors to increase reliability/documentation and prevent mismatching
  * Make sure actual parameters match formal parameters
    * formal parameters = "dummy parameters" = variables declared in routine definition
* When creating a function, be sure to check all possible return paths to ensure that you've returned something, and don't return references or pointers ot local data

8\. Defensive Programming
--

* Defensive programming is like defensive driving - always assume that other drivers will do unexpected things, and be prepared
  * in defensive programming, routines should be able to handle being passed bad data
* "Garbage in, garbage out" is the mark of a bad program - don't let any garbage out. To handle garbage in:
  * Check the values of all data from external sources
  * Check the values of all routine imput parameters
  * Decide how to handle bad imputs
* Assertion = code used during development, which allows the program to check itself as it runs
  * very useful especially in large, complicated programs
  * takes two arguments (usually): boolean expression describing the assumption that is supposed to be true and the message to display if said assumption is false
  * many languages (C++, Java, Visual Basic) have built-in support for assertions, but you can also easily build your own
  * Guidelines for using assertions:
    * Use assertions only for conditions that should never occur; use error-handling code for expected conditions
      * It's the difference between whether production code will have to deal with a given condition or not
    * Avoid putting executable code into assertions
      * the compiler will eliminate that code when you turn off the assertions
      * instead, execute the code, assign the value to a variable, and run your assertion on that variable
      * Use assertions to document and verify preconditions and postconditions
      * For highly robust code, assert and then handle the error anyway
        * this is especially useful for very large/complex programs
* Error-handling techniques
  * Return a neutral value (i.e. a value known to be harmless)
  * Substitute the next piece of valid data
  * Return the same answer as the previous time
  * Substitute the closest legal value
  * Log a warning message to a file
    * can be used in conjunction with other techniques
  * Return an error code
    * a code that alerts the rest of the system and tells a higher-up routine to handle the error
  * Call an error-processing routine/object
    * centralizes error handling, though that does have security risks
  * Display an error message whenever the error is encountered
    * can also have security risks
    * increases complexity because now your GUI/UI is not centralized
  * Handle the error in whatever way works best locally
  * Shut down
    * best option in safety-related programs
* Error-handling will usually err either in favor of robustness (returning inaccurate results occasionally in order to keep the program running) or correctness (no result is better than an inaccurate result)
* Error-handling should be consistent throughout the program
* Exceptions = code passes errors/exceptional events along to other parts of the system which might be able to handle it better
* try-catch and try-catch-finally
  * used properly, they can decrease complexity, but used poorly they will increase complexity
* How to use exceptions:
  * Use exceptions to notify other parts of the program about errors that should not be ignored
  * Throw an exception only for truly exceptional conditions (not infrequent events, but events that should never occur)
  * Don't use an exception to pass the buck
    * handle an error condition locally if possible
  * Avoid throwing exceptions in constructors and destructors unless you catch them in the same place
    * there tend to be pretty complicated rules about exceptions in constructors and destructors, so tread carefully
  * Throw exceptions at the right level of abstraction
  * Include in the exception message all information that led to the exception
  * Avoid empty catch blocks
  * Know the exceptions your library code throws
  * Consider building a centralized exception reporter
  * Standardize your project's use of exceptions
  * Consider alternatives to exceptions
* Barricades = damage-containment strategy; if errors occur, their damage is contained
  * in defensive programming, you can designate "safe" areas, and use a barricade to check any data crossing into a safe area. Anything that makes it into the safe area is assumed to be valid
  * you can also think of it as an operating room - anything that enters the operating room needs to be sanitized
  * routines outside the barricade should use error handling since the data cannot be assumed to be safe
  * routines inside the barricade should use assertions since the data should be assumed to be safe
* Convert input to the proper type at input time to reduce complexity and decrease the chance of the program crashing
* Don't automatically apply production constraints to the development version
  * production software runs fast, but development software can be slow
  * production software can't use many resources, but development software can
  * production software shouldn't expose certain operations, but that's fine in development software
* The sooner you introduce a debugging aid, the sooner it'll start helping
* Offensive programming = make exceptional cases obvious during development and recoverable in production software
  * essentially, abort the program/otherwise make problems super obvious in development so they'll actually get fixed and developers can't just ignore them
* Plan to remove debugging aids for any commercial code
  * You can use version-control tools and build tools like ant and make
  * You can also use a preprocessor in languages like C++
  * Write your own preprocessor if you're working in a language without one
  * Use debugging stubs
* How to decide what defensive code should be left in the production code:
  * Leave in code that checks for important errors
  * Remove code that checks for trivial errors
  * Remove code that results in hard crashes
  * Leave in code that helps the program crash gracefully
  * Log errors for your technical support personnel
* All things in moderation; defensive programming is great, but don't overload your code with it

9\. The Pseudocode Programming Process
--

* Steps for building a class (not sequential - you move between them):
  * Create a general design for the class
  * Construct each routine within the class
  * Review & test the class as a whole
* Steps for building a routine (also not necessarily sequential):
  * Design the routine
  * Check the design
  * Code the routine
  * Review & test the code
* Pseudocode = informal, English-like notation for code design
  * How to use pseudocode effectively:
    * precisely describe specific operations
    * avoid syntactive elements from your programming language
    * write pseudocode at the level of intent - what the approach means rather than how it will be implemented
    * write it at a low enough level that generating code from it will feel automatic
  * Good pseudocode can be used as good comments
* Good pseudocode has benefits:
  * reviews are easier
  * iterative refinement: hgih-level design -> pseudocode -> source code
  * changes are easier
  * commenting is easier
  * documentation is easier
* Constructing routines using the Pseudocode Programming Process
  * Design the routine
    * Check the prerequisites
    * Define the problem the routine will solve
      * hidden information, inputs, outputs, preconditions, postconditions
    * Name the routine
    * Decide how to test the routine
    * Research functionality available in the standard libraries
      * don't reinvent the wheel
    * Think about error handling
    * Think about efficiency
      * but this is really more of a high-level consideration in most cases
    * Research the algorithms and data types
    * Write the pseudocode
    * Think about the data
    * Check the pseudocode
    * Try a few ideas in pseudocode, and keep the best
  * Code the routine
    * Write the routine declaration
      * make any notes about interface assumptions here
    * Turn the pseudocode into high-level comments
    * Fill in the code below each comment
      * think about this like writing a paper - first you write the outline, then you fill it in with paragraphs
    * Check whether the code should be further factored
      * if there's a whole bunch of code beneath a single line of pseudocode, you should either further decompose the pseudocode or factor that whole chunk of code into its own routine
  * Check the code
    * Mentally check the routine for errors
      * assume any errors are your code's fault (rather than that of the compiler, OS, etc.)
      * you should understand every one of your lines of code and exactly why it's there
    * Compile the routine
      * try to avoid compiling up to this point - you'll actually make error correction easier on yourself that way
      * use lint and the compiler's warning level to catch additional errors here
      * eliminate the causes of all errors you detect at this stage
    * Step through the code in the debugger
      * make sure every line executes as intended
    * Test the code
    * Remove errors from the routine
  * Clean up leftovers
    * double-check interface, design quality, variables, statements/logic, layout, documentation
    * remove redundant comments
  * Repeat steps as needed
* Alternatives to the PPP
  * Test-first development (a.k.a. test-driven development)
    * test cases are written prior to writing any code
  * Refactoring
    * code is improved through a series of semantic preserving transformation
  * Design by contract
    * preconditions and postconditions for each routine
  * Hacking
    * no systemic approach, just type like mad until you've coded yourself into a corner, then start over
  
Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
