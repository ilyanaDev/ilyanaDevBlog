---
templateKey: blog-post
title: Notes from Refactoring Fundamentals Pluralsight Course
date: 2020-07-20T05:04:10.000Z
featuredpost: false
featuredimage: /img/refactoring-fundamentals-pluralsight.png
description: Steve Smith's Pluralsight course on Refactoring Fundamentals covers a lot of ground and provides a great overview of common code smells and ways to fix them.
tags:
  - software development
  - coding
  - pluralsight
  - gilded rose
  - refactoring
---

I recently completed **[Refactoring Fundamentals](https://app.pluralsight.com/library/courses/refactoring-fundamentals/table-of-contents)** by Steve Smith. He includes a lot of great examples and demos for everything he talks about, so I definitely encourage you to check out the course itself, but here are my notes:

Introducing Refactoring
--

* Refactoring = hygiene for your code
* Like cleaning your room
  * Do it regularly - habit-forming and easy
  * Do it occasionally - time-consuming and unpleasant
* Refactoring definitions:
  * (noun) a change made to the internal structure of software *without changing its observable behavior* (hopefully also makes it easier to understand and cheaper to modify)
  * (verb) to restructure software by applying one or more refactorings *without changing observable behavior*
* Editing : Writing = Refactoring : Programming
* Software has two audiences, and it needs to be readable by both
* Refactoring is preventative maintenance
* Refactoring = eliminate duplication and simplify design
* Why refactor?
  * improves design
  * improves readability
  * reveals defects
  * helps you program faster
    * seems counterintuitive, but it's true
  * keeps technical debt paid down
* What is technical debt?
  * slows down customer responsiveness
  * changes become more expensive bc each new change has to interact correctly with the system's other functionalities
  * interest compounds over time
  * when it grows too high, you declare technical debt bankruptcy and rebuild the application from scratch (very expensive)
* When should you refactor?
  * In test-driven development, you'll refactor periodically: red-green-refactor
    * consider refactoring both tests and code here
  * In pain-driven development, refactor anything causing you pain
  * To make adding a new function easier
  * As part of the bug fixing process, esp. if a bug is hard to find
  * As part of the review process
    * Refactoring here is a way of better understanding the code you're reviewing
* When shouldn't you refactor?
  * Once you've accrued massive technical debt
  * Current code doesn't work
  * Imminent deadline
    * defer refactoring until after deadline by knowingly incurring a bit of technical debt, which you'll pay off later
* Refactoring actually can increase productivity - "not having enough time usually is a sign that you need to do some refactoring." -Martin Fowler
* Refactoring Principles:
  * Keep it simple
    * don't try to be clever
  * Keep it DRY
    * avoid duplication
  * Make it expressive
    * replace intention-conveying comments with names and program structures that provide the same information
    * self-documenting code!
  * Reduce overall code
  * Separate Concerns - SRP
  * Appropriate level of abstraction
  * Kent Beck's rules of simple design (in order):
    * Run all the tests (successfully)
    * Contain no duplicate code
    * Express all the ideas the authors want to express
    * Minimize classes and methods
  * Leave your code better than you found it
* The Refactoring Process (more helpful on more complex refactorings):
  * check in/back up current, functional code!
  * verify existing behavior
  * if no unit tests exist (often the case with legacy code), write characterization tests, which verify system behavior
    * write a test you know will fail
    * use the output of the failing test to determine existing behavior
    * Update the test to assert the existing behavior
    * Run the test again; it should pass
    * Write a test that asserts a system does whatever it does
  * Apply refactoring
  * confirm existing behavior has been preserved by running the tests again
* Refactoring tips:
  * Keep refactorings small - take baby steps
  * One at a time!
  * Make a checklist
  * Make a "later" list to keep current refactoring as small as possible, even as you identify other possible changes
  * Check in (save/commit) frequently
  * Add test cases
  * Review the results
* Refactoring Tools for .net in Visual Studio:
  * Visual Studio itself includes some refactoring support
  * JustCode
  * ReSharper
  * CodeRush
  * Visual Assist X
* Premature Optimization = root of all software evil
  * avoid over-engineering
  * only add new features, optimize flexibility, etc. when necessary, not when you think it could be handy sometime in the future
    * YAGNI - you ain't gonna need it
  * don't spend more time on refactoring than on delivering value
    * maintain consistent internal and external quality
* Don't forget to refactor your tests too!
  * Treat tests like production code
  * Keep tests DRY, but expressive
  * Avoid technical debt
* When refactoring, get rid of magic values and replace them with named constants
* Books on Refactoring: *Refactoring*, *Refactoring to Patterns*, *Working Effectively with Legacy Code*, and *Code Complete*

Bloating Code Smells
--

* Context is really important to deciding whether refactoring is necessary
* Named code smells improve communication between developers, much like named design patterns
* Principle of Least Surprise/Principle of Least Astonishment
  * "Do what users expect."
  * Design your UI and API to behave as users would expect
  * Be simple, clear, and consistent to minimize confusion
* Books about code smells:
  * *Refactoring* by Martin Fowler
  * *Code Complete* by Steve McConnell
  * *Refactoring to Patterns*
  * *Clean Code* by Robert Martin
* Bloater code smells:
  * Sections of code or system design resulting in code base growing needlessly larger
  * Often happens little-by-little, eventually spiraling out of control
  * There's a difference between minimizing your code base to the bare minimum (and thus hampering readability) and avoiding *unnecessary* size increases
* Long Method:
  * prefer short methods to long methods, reducing duplication and increasing ability to share logic between methods
  * small methods can have better names
  * small methods are easier to understand
  * try to keep methods to 10 lines or fewer, or at least be able to view it all on one screen
  * What about performance? Lots of small methods adds overhead that diminishes performance.
    * Yes, but don't prematurely optimize! Do it clearly and right first. If performance is an issue at that point, refactor
  * Related smells: long loops and functions that do more than one thing (violate SRP)
  * Options for refactoring this smell:
    * extract method refactoring
    * compose method refactoring
    * replace nested conditional with guard clauses
    * replace conditional dispatcher with command
    * move accumulation to visitor
    * replace conditional logic with strategy
* Large Class:
  * generally caused by violation of SRP
  * too many instance variables and/or too many private methods ("iceberg class")
  * lack of cohesion - compartmentalized class
  * Options for refactoring this smell:
    * extract method (and hopefully combine duplicate logic)
    * extract class
    * extract subclass/extract interface
    * replace conditional dispatcher with command
    * replace state-altering conditionals with state pattern
    * replace implicit language with interpreter pattern
* Primitive Obsession:
  * over-use of primitives, instead of better abstractions, resulting in excess code
    * guard clauses
    * validation
  * less intention-revealing code
  * don't overload primitive types with excess behavior
  * Refactoring this smell:
    * Replace data value with object
    * Replace type code with class or subclass
    * Extract class
    * Introduce parameter object
    * Replace array with object
    * Replace state-altering conditionals with State Pattern
    * Replace conditional logic with Strategy Pattern
* Long Parameter List:
  * sometimes results from primitive obsession
  * bloats code and reduces readability
  * can result from programming in a procedural style, rather than following an object-oriented approach
  * related smells: message chains (one object asks another object for another object which asks another object and so on), middle man (an object whose methods mostly delegate to another class), more than three parameters in a method, output arguments, flag arguments, and selector arguments
  * prefer more, smaller, well-named methods to fewer methods with behavior controlled by parameters
  * not as big a problem if the method is called in only one place
  * Refactoring this smell:
    * Replace parameter with method
    * Preserve whole object and pass it in instead of its components
    * Introduce parameter object
    * Extract method
* Data clumps
  * a set of data items that are always or almost always used together, but are not organized together in the design
  * similar to primitive obsession
  * often results in long parameter lists
  * Refactor this smell: extract class and introduce parameter object or preserve whole object
* Combinatorial Explosion
  * when the number of cases needed to cover every possible case results in massive number of method signatures required
  * often occurs in relation to data query methods
  * Refactor by replacing implicit language with interpreter, which you can often do with Linq in .net
* Oddball Solution
  * When a common problem is solved in different ways throughout a system
  * Usually indicates duplicate code
  * Fix by choosing your preferred solution and trying to use it consistently throughout the system
  * You can refactor with substitute algorithm or by unifying interfaces via adaptor pattern.
* Class Doesn't Do Much
  * perhaps used to be important, but isn't anymore due to changed requirements
  * consider moving class's contents to another class, then deleting the now-empty class
* Required Setup/Teardown Code
  * when a class/method requires several lines of code before and/or after its use
  * may be ok if class/method is used only once in system, but can become a big problem if class/method is used frequently
  * might indicate improper abstraction level
  * Refactor with: parameter object, replacing constructor with factory method, or implement IDisposable

Obfuscating Code Smells
--

* Obfuscators are coding constructs or techniques that conceal the behavior and/or purpose of code
  * impede clear communication
* Regions:
  * bloater and obfuscator
  * regions are meant to hide bloat, but in doing so, they tend to bloat the code further
    * regions = rugs to sweep smelly code under
  * Regions provide a single line comment and wrap a section of code such that the user can choose whether to hide or display it
  * Useful when:
    * the intent of code is unclear (itself a smell)
    * the code is too long to quickly understand (also a smell)
    * the author prefers an "outline" view of their code (personal preference, though it's generally better to use IDE tools to achieve this rather than cluttering your code)
  * Refactor this smell by:
    * deleting regions
    * cleaning up any smelly code the regions were hiding. Commmonly these include long method, long class, long loop, function that does more than one thing
* Comments:
  * bloater and obfuscator
  * untrustworthy
  * should only be used to say why, not what or how
  * common commenting smells:
    * used to explain difficult code
    * used to hold inappropriate/irrelevant information
      * i.e. legal information, code history, etc. have no place in code and can easily be provided/stored elsewhere
    * obsolete or wrong comments
      * these can lead to misleading assumptions
    * redundant comments
      * often result from a policy requiring commenting
    * poorly written comments
    * commented out code
      * delete it! Its usefulness decays very quickly
  * comments should provide **context**
    * links to instructions, github, etc. would be useful
    * justifications for why code is written the way it is
  * Rules for commmenting
    * should provide information not expressible in code
    * should be deleted when obviated
    * should be obviated whenever possible
* Poor names
  * obfuscator
  * naming recommendations:
    * choose descriptive names
    * choose names at appropriate level of abstraction
    * use standard nomenclature where possible - don't make the reader think too hard about things that really just ought to be standard
    * names should be unambiguous - if the name needs to be longer in order to achieve this, that's ok!
    * use long names for long scopes
    * be ok with using short names for short scopes
    * avoid encoding variable types into variable names
    * names should describe side effects
* Vertical Separation
  * obfuscator
  * variables and functions should be defined near where they are used
    * define local variables just before first use
    * define private functions just below first use
  * avoid forcing reader to scroll to see variable usage and definition
  * exacerbated by long class code smell
* Inconsistency
  * obfuscator
  * follow Principle of Least Surprise
  * Use coding conventions to prevent this
  * arbitrary inconsistency is confusing and distracting
  * consistent code is easier to read and modify
* Obscured intent
  * obfuscator
  * small, dense code is not an end in itself
  * take time to make your code intention *revealing*

Object Orientation Abuser Code Smells
--

* coding constructs or techniques that go against the principles and patterns of object-oriented design
  * break polymorphism
  * introduce repetition
  * create tight coupling
* Switch statements
  * also the if-else if-else if-else chain
  * main symptom is duplication
    * less of an issue if they do not cause duplication
  * often indicate a lack of encapsulation
    * violates tell-don't-ask principle
  * you can use polymorphism as an alternative to switch statements in controlling behavior
* Temporary Field
  * instance variables only used in certain circumstances within a class
  * create confusion and bugs
  * used to pass state between methods to avoid too many parameters
  * common refactorings:
    * introduce null object when field doesn't exist
    * extract class using parameter object or method object
* Refused Bequest
  * when a subclass doesn't use all its parent's methods and data
  * a faint smell and not necessarily worth acting upon for private data and fields
  * definitely worth fixing when the child is refusing a public interface
  * violates Liskov Substitution Principle
  * Common refactorings:
    * push down method
    * push down field
    * repleace inheritance with delegation
* Alternative Classes with Different Interfaces
  * in a system, common operations should share common semantics
  * Refactor by renaming or moving a method or by extracting superclass
* Base Class Depends on Subclass
  * child classes should be deployable independent from parent class
  * Refactor:
    * push method down
    * implement factory
    * use reflection
* Inappropriate Static/Static Cling
  * Static methods/properties do not take advantage of inheritance
  * static should be reserved for:
    * stateless operations
    * behavior that will never change
  * Examples of acceptable static:
    * *simple* math operations
    * global constants

Change Preventer Code Smells
--

* Coding techniques or constructs that make it difficult to change a system
  * touch many parts of a system
  * tight coupling
  * represent poor separation of concerns/responsibilities
    * violate SRP
* Divergent Change
  * when you have a class requiring changes in several areas to make one kind of change and changes in several other areas to make another kind of change
  * violates SRP
  * can be refactored by extracting a class
* Shotgun Surgery
  * when you have to make a whole bunch of small changes in a whole bunch of classes in order to implement a single change in functionality
    * easy to miss a spot
  * inconsistent behavior and bugs
  * refactor with move method and move field to pull all the things that need to change into one spot
    * you can also use inline class
  * aka solution sprawl
* Parallel Inheritance Hierarchies
  * when you have to make a subclass of one class whenver you make a subclass of another class in order to make your system function correctly
  * special case of shotgun surgery
  * can be refactored with move method and move field
    * you can also combine the hierarchies, though this often violates SRP
* Inconsistent Abstraction Levels
  * class interfaces should be small and cohesive and provide a consistent abstraction level
  * interfaces often degrade over time
  * function interfaces should also provide a consistent and appropriate abstraction level
    * should be one level of abstraction below operation defined by function's name
  * Refactor by moving method or extracting methods
* Conditional Complexity
  * easily detected
    * you can use a cyclomatic complexity tool to measure the complexity of methods in your project; general rule - refactor when cyclomatic complexity of routine > 10
    * also indicated by deep nesting, arrow code, or complex conditions
  * avoid negative conditionals
  * refactor:
    * extract method
    * replace conditional logic with Strategy Pattern
    * move embellishment to Decorator Pattern
    * Replace state-altering conditionals with State Pattern
    * Use Null Object Pattern
* Poorly Written Tests
  * tests are meant to help, but badly written tests can prevent change
  * tests are often tightly coupled to the system
  * brittle tests increase cost of refactoring the system
  * tests with poor performance and/or environment affinity are often more trouble than they're worth

Dispensable Code Smells
--

* things in your system with little or no value
  * can be safely removed, resulting in cleaner, more modifiable code base
  * dispensable classes should be removed or have responsibilities increased
  * dispensable code should be removed
* Lazy Class
  * Classes with few responsibilities are actually a good thing, to a point
  * If you are following the Rules of Simple Design (in order), you can avoid this smell being problematic:
    * Runs all tests
    * No duplication
    * Expresses intent
    * (then and only then) minimizes number of classes and methods
  * Common refactorings:
    * collapse hierarchy
    * inline class refactoring - pull class's responsibility into logic of the class calling it
* Data Class
  * class that contains only fields/properties
  * lack of encapsulation
  * good when used as view models or data transfer objects
  * problematic when used for core behavior of system
  * To refactor:
    * look at how other classes are working with the data class
    * use move/extract method
    * try hide method/remove setting method
    * encapsulate fields or collections in properties or inside other methods
  * "Data classes are like children... okay as a starting point, but to [be a] grownup object, need some responsibility" -*Refactoring*
* Duplicate Code
  * violates DRY
  * one of the most common sources of bugs in software applications
  * often results from copy-paste-coding
  * Refactor with extract method and/or pull up method, extract class, or form template method
* Dead Code
  * code that never runs/can't be executed
  * classes that are never used, methods that are never called, condition blocks that can't execute
  * refactor by deleting
  * you can use tools to help you identify dead code
* Speculative Generality
  * when code exists because "someday we might need to be able to do..."
    * all too often, someday never comes
  * if you're using it, keep it. If not, get rid of it
  * refactor with collapse hierarchy, inline class, or remove parameter
  * "Programmers are notoriously bad at guessing what functionality might be needed 'someday.'" -Steve McConnell, *Code Complete*
  * Problems:
    * you'll probably guess wrong on what's needed, so your speculative code will just need to be thrown away
    * even a close guess will probably be wrong about the details and thus, unhelpful
    * other/future programmers may assume speculative code is needed or well-tested
    * speculative code adds to project's overall complexity (and cost)
  * YAGNI!

Coupler Code Smells
--

* coupling is unavoidable, but should be loose and take place through well-defined interfaces
* smells related to coupling result in tight coupling
* Feature Envy
  * When one object is overly interested in another object's state and attempts to implement a feature that belongs in the other object
  * Ideally, objects should package behavior and data
  * Characterized by a method calling getters on another class and then performing operations on the resulting data
  * keep things together that change together
  * However, some design patterns (Strategy and Visitor) break this rule
  * Refactor with move method or extract method
* Inappropriate Intimacy
  * When two or more classes know way too much about each other's implementation details -> tight coupling
  * Use clean interfaces instead of implementation knowledge
  * Inheritance and bidirectional relationships can lead to this smell
  * Refactor via move method, move field, change bidirectional association to unidirectional, extract class, or replace inheritance with delegation
  * Limit your code's surface area
    * small interfaces -> loose coupling
* Law of Demeter: a given object should assume as little as possible about the structure/properties of anything else
  * breaking this -> inappropriate intimacy smell
* Indecent Exposure
  * sometimes classes/methods are public and should not be
  * violates encapsulation
  * leads to inappropriate intimacy
  * Refactor by encapsulating classes with the Factory Pattern
* Message Chains
  * when a client asks an object for another object
    * which asks another object for another object
      * ...
  * Law of Demeter violation -> tight coupling
  * refactor with hide delegate, extract method, or move method
* Middle Man
  * typically the result of decoupling objects gone awry
  * refactor by removing the middle man or replacing delegation with inheritance
* Tramp Data
  * when you pass data to a routine which passes that to another routine
  * might be ok if your abstraction is consistent
  * refactor by removing middle man or extracting method/class
* Artificial Coupling
  * coupled things that shouldn't be coupled
  * fix by decoupling
* Hidden Temporal Coupling
  * class interfaces that do not make explicit order requirements
  * refactor with a template method or intermediate results
* Hidden Dependencies
  * classes should identify and declare dependencies in constructors or method parameters
  * use dependency injection or add parameters to fix this

Environment and Testing Smells
--

* Environment smells are more about *how* you write your code
  * They increase friction and reduce velocity
  * Complex build processes should be streamlined and automated
  * Running tests should be the default, easy, and obvious
  * If your builds take too long, optimize for speed and use modern hardware that runs fast
* Test smells - you should have good tests! Poor tests -> poor productivity. Tests are bad when slow, brittle, tightly coupled, or inconsistent
  * Not enough tests - instead, test everything that can break
  * Tests aren't DRY (Don't Repeat Yourself) or DAMP (Descriptive And Meaningful Phrases)
  * Fragility - tests break too easily
    * fix by decoupling tests from system
  * The Liar - the test doesn't really test what you think it's testing
  * Excessive test setup - common in legacy code systems
  * The Giant - really long test; may indicate "God object" in system
  * The Mockery - test that goes overboard on mocks
  * The Inspector - usually results from attempt to achieve 100% code coverage; very brittle tests
  * Generous Leftovers - temporal coupling of tests
    * Poisonous Leftovers - one test derails another test
  * The Local Hero - test passes on a given machine, but nowhere else
  * The Nitpicker - test that tests a whole bunch of output when it cares about only one detail
  * The Secret Catcher - test that does nothing but wait for an exception to be thrown
  * The Dodger - a test that sets up to do so but never actually tests what it should
  * The Loudmouth - test that generates a gratuitous amount of diagnostic and other output, even when passing
  * The Greedy Catcher - test catches exceptions but does not provide important details
  * The Sequencer - when a test depends on items in an unordered list being in a given order
  * The Hidden Dependency
  * The Enumerator - tests given meaningless sequential names - "Test1, etc."
  * The Stranger - test is testing the wrong thing
  * The OS Evangelist - test that depends on a given operating system
  * Success Against All Odds - test refuses to fail; false positive
    * use red-green-refactor!
  * The Free Ride - a test tagging along with another test
  * The One - test fixture with one method testing the entire functionality of a given object
    * One test to rule them all
  * The Peeping Tom - tests that can see the results of other tests
  * The Slow Poke - very slow test
  * The Contradiction - a failed test returns a message about what should have happened, not what did happen
  * Roll the Dice - tests that make use of random data as test inputs -> inconsistency
  * Hidden/Inheritance Tests - avoid hiding test logic in base classes
  * Second Class Citizens - tests are not kept to the same standard as production code
  * Wait and See - tests that explicitly wait for an action to occur
  * Inappropriate Test Group - too many tests are grouped in a given test fixture
  * The Optimist - only "happy paths" are covered, rather than accounting for errors or unexpected inputs ("sad paths")
  * The Sleeper - a test will definitely fail at some point in the future
  * The Void - not having any tests

Method Refactorings
--

* Extract method - pull out several lines of code, group them together into a method, and replace the code in the original location with a method call
* Rename method
* Inline method - reverse of extract method
* Introduce explaining variable - useful for complex conditional logic
* Inline temp
* Replace temp with query (query = method with no observable side effects)
* Split temporary variable
* Parameterize Method
* Replace Parameter with Explicit Methods - opposite of parameterize method
* Add parameter
* Remove parameter
* Separate query from modifier
* Preserve whole object (when many pieces of information from a single object are used as method parameters)
  * This can increase coupling, however
* Replace parameter with method
* Introduce parameter object
* Remove setting method
* Hide method (make method more private)
* Replace constructor with factory method
* Replace error code with exception
  * helps maintain acceptable abstraction level
* Remove assignments to parameters -> leads to unintended side effects; use a temp instead
* Replace exception with test
  * exceptions should be used only for *exceptional* situations
* Replace method with method object
* Compose method
* Substitute algorithm

Class and Object Refactorings
--

* Encapsulate field
  * your object shouldn't have a public field
* Encapsulate collection
  * methods that return a collection should return a read-only collection
* Move field
* Move method
* Extract class
* Inline class - opposite of extract class
* Extract interface/subclass/superclass
* Hide delegate
* Remove middle man

Class Hierarchy Refactorings
--

* Pull up/push down field
* Pull up/push down method
* Collapse hierarchy
* Replace inheritance with delegation, or vice versa
* Replace numeric type code with class or subclass
* Replace conditional with polymorphism

Pattern-Based Refactorings
--

* Encapsulate Classes with Factory
  * when clients directly instantiate classes that reside in one package and implement a common interface
  * best for relatively stable group of classes
* Form Template Method
  * when you have multiple methods that perform similar (but not identical) steps in the same order
* Introduce Null Object
* Move Accumulation to Visitor - used when a method accumulates information from heterogenous classes
  * fairly complex and uncommon
* Move Embellishment to Decorator
  * when classes that start out simple get embellished with new features
  * Decorator pattern - you push those new features into their own classes
* Replace Conditional Dispatcher with Command
  * conditional dispatcher = switch statement or if tree
* Replace Conditional Logic with Strategy
  * when conditional logic in a method controls which of several variants of a calculation are executed
* Replace State-Altering Conditionals with State - when a conditional controls an object's state transitions and is complex
* Replace Type Code with State (or Strategy)
  * you have a type code that affects the behavior of a class but you cannot use subclassing
* Unify Interfaces with Adapter
  * when clients interact with two or more classes, one of which has a preferred interface
  * unnecessary if you have complete control of all classes involved

Gilded Rose Kata
--

* Gilded Rose is a good kata for practicing refactoring
* This module provides a great explanation and walk-through of how to approach the kata
  * Start with safe refactoring for easier testing (move stuff into different files and classes, extract methods, etc.)
  * Write tests to confirm current behavior
  * Refactor
  * Add additional functionality
  * Refactor some more

Related Pluralsight Resources
--

* Design Patterns Library
* SOLID Principles of Objet Oriented Design
* Test First Development - Part 1

Summary
--

* Refactoring = changes to code that improve design and leave observable behavior constant
* Refactor to avoid technical debt
* Refactor a little bit of a time as you go
* Refactor when system works and no imminent deadlines exist
* Determine current system behavior, make small changes, verify original behavior maintained
* Some tools exist to help automate refactoring
* Code smells indicate something may be amiss in your code
* Principle of Least Surprise - do what your fellow programmers would expect you to do
* software should be malleable, like clay, rather than like concrete
* reduce/eliminate duplication wherever possible
* Common categories of code smells include Bloaters, Obfuscators, Object Orientation Abusers, Change Preventers, Dispensables, Couplers, and Environment and Testing Smells
* There are *many* different ways to refactor methods and classes
* "new" is glue -> `new` = coupling
* Inheritance is really powerful when used right
* Design patterns can often be used for refactoring
* Gilded Rose kata useful for practicing refactoring

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
