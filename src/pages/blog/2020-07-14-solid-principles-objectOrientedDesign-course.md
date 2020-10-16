---
templateKey: blog-post
title: Notes from SOLID Principles of Object Oriented Design Pluralsight Course
date: 2020-07-14T04:04:10.000Z
featuredpost: true
featuredimage: /img/solid-principles-pluralsight.png
description: Steve Smith's Pluralsight course on SOLID Principles of Object Oriented Design is a great overview of the 5 SOLID principles, as well as the Don't Repeat Yourself Principle.
tags:
  - software development
  - coding
  - SOLID
  - principles
  - pluralsight
---

I recently completed **[SOLID Principles of Object Oriented Design](https://app.pluralsight.com/library/courses/principles-oo-design/table-of-contents)** by Steve Smith. Here are my notes:

Single Responsibility Principle
--

* **Every object should have a single responsibility, and that responsibility should be entirely encapsulated by the class**
* Strive for cohesion - strong focus of responsibilities within a module or class
* Strive for loose coupling - the degree to which each program module relies on each of the other modules
* Responsibilities = axes of change
  * more responsibilities = higher likelihood of change
  * multiple responsibilities within a class couple together those responsibilities
  * more classes sharing a responsibility leads to a higher likelihood of errors when that responsibility changes
* You can use inheritance in object-oriented programming to achieve this
* Many small classes, each with distinct responsibilities -> more flexible design
* Related to Open/Closed Principle, Interface Segregation Principle, and Separation of Concerns
* Recommended reading: *Clean Code* by Robert C. Martin

Open/Closed Principle
--

* **Software entities should be open for extension, but closed for modification**
  * You should not have to dig around in the internals of your software just to extend it/change its behavior
  * "Open chest surgery is not needed when putting on a coat"
* New behavior/behavioral changes can be added in the future, but changes to source code should not occur
* Rely on abstractions -> no limit to implementations of each abstraction
  * abstractions = interfaces, abstract base classes, parameters, etc.
* Messing with source code introduces bugs which can cascade through many modules of the project
* Writing new classes is less likely to introduce problems because nothing in your project depends on those classes
* 3 approaches to achieving the OCP
  * Parameters (in procedural programming) - allow client to control behavior specifics via a parameter (passing a state string, etc.); can be combined with delegates/lambda
  * Inheritance/Template Method Pattern - child types override behavior of a base class or interface
  * Composition/Strategy Pattern - client code depends on abstraction; provides a plug in model; implementations utilize inheritance, client utilizes composition
* When to apply OCP? What does your experience tell you?
  * If you know from experience that a certain type of change is likely to occur, apply OCP up front
  * Otherwise, don't apply OCP at first. Don't apply it the first time the module changes. Apply it if the module changes a second time
  * TANSTAAFL - There Ain't No Such Thing As A Free Lunch
    * OCP adds complexity and shouldn't be used unless it's actually adding value
* OCP yields flexibility, reusability, maintainability
* Related to Single Responsibility Principle, Strategy Pattern, Template Method Pattern
* Recommended Reading: *Agile Principles, Patterns, and Practices in C#* by Robert C. Martin and Micah Martin

Liskov Substitution Principle
--

* **Subtypes must be substitutable for their base types**
* Substitutability requires that:
  * Child classes must not remove behavior from their base class
  * Child classes must not violate base class invariants
  * Child classes must not require calling code to know they are different from their base type
* Inheritance: "Is a" relationship vs. "is substitutable for" relationship suggested by LSP
* Invariants - related to integrity of model that classes represent
  * consist of reasonable assumptions of behavior by clients
  * can be expressed as preconditions and postconditions for methods
  * unit tests are often used to specify expected behavior of given method or class
  * Design by Contract - technique that requires explicit definitions of pre- and postconditions within code
  * to follow LSP, derived classes must not violate any constraints defined by or assumed by clients of the base classes
* Non-substitutable code breaks polymorphism
  * Fixing this with if/then or case statements violates OCP
* LSP Violation Smells
  * if/else statements looking to figure out what type of subclass an object is
  * child type inherits from base class but does not fully implement it
    * Follow Interface Segregation Principle to prevent this
* When to fix LSP violations?
  * if you notice obvious smells
  * if you find yourself being repeatedly bitten by OCP violations
* "Tell, Don't Ask" - don't interrogate objects for their internals, move behavior to the object; tell the object what you want it to do
* Consider refactoring to a new base class, given classes that share a lot of behavior but are not substitutable (Square and Rectangle, for example)
  * create a third class both can derive from
  * ensure substitutability is retained between each class and the new base
* LSP allows for proper use of polymorphism and produces more maintainable code
* "Is Substitutable For"
* Related to polymorphism, inheritance, interface segregation principle, open/closed principle
* Recommended Reading: *Agile Principles, Patterns, and Practices in C#* by Robert C. Martin and Micah Martin

Interface Segregation Principle
--

* Leads to more cohesive modules with fewer hidden dependencies
* **Clients should not be forced to depend on methods they do not use**
  * Prefer small, cohesive interfaces to fat interfaces
* Smells that indicate violation of ISP:
  * unimplemented interface methods (also violate LSP)
  * client references a class but uses only a small portion of it
* When to fix ISP:
  * Once you're experiencing problems
  * If you are depending on a "fat" interface you own, and this is causing problems
    * create smaller interface with just what you need
    * have fat interface implement your new interface
    * use new interface with your code
  * If you find "fat" interface that is problematic but you don't own it
    * create smaller interface with just what you need
    * implement this interface using adapter that implements full interface
  * Keep interfaces small, cohesive, and focused
  * Let client define interface whenever possible
  * Package interface with the client whenever possible
    * Alternately package in a third assembly that both client and implementation depend upon
    * Last resort: package interfaces with their implementation
  * Don't force client code to depend on things it doesn't need
  * Refactor large interfaces so they inherit from smaller interfaces
  * Related to polymorphism, inheritance, LSP, Facade Pattern
  * Recommended Reading: *Agile Principles, Patterns, and Practices in C#* by Robert C. Martin and Micah Martin

Dependency Inversion Principle
--

* Really important for object-oriented software
* **High-level modules should not depend on low-level modules. Both should depend on abstractions.**
* **Abstractions should not depend on details. Details should depend on abstractions.**
* What are dependencies?
  * The framework you're writing in
  * Third-party libraries being used
  * Database
  * File system
  * Email
  * Web services
  * System resources (like a clock, for example)
  * Configuration
  * The `new` keyword (except when instantiating primitive types)
  * Static methods
  * Thread.Sleep
  * Random - it's hard to test code that's supposed to give random results!
* Traditional Coding -> Lots of dependencies!
  * High level modules call low level modules
    * i.e. UI depends on Business Logic depends on Database, etc.
  * Static methods are used for convenience
  * Class instantiation/call stack logic is scattered through all modules
    * Violates Single Responsibility Principle
* Class constructors should require any dependencies the class needs
  * This creates *explicit* dependencies
  * When dependencies are not made clear in this way, the result is *implicit*, or hidden dependencies, which can be dangerous, or frustrating at the very least
* Dependency injection - a technique used to allow calling code to inject the dependencies a class needes when it is instantiated
  * The Hollywood Principle: "Don't call us; we'll call you"
  * 3 Primary Ways of doing this:
    * Constructor Injection
      * Use Strategy Pattern
      * Dependencies passed in via constructor
      * Classes are self-documenting what they need and always in a valid state once constructed
      * This can result in many parameters in a constructor
    * Property Injection
      * Dependencies passed in via a property
      * aka setter injection
      * Very flexible
      * Objects are in an invalid state between construction and setting of dependencies via settings
      * Less intuitive
    * Parameter Injection
      * Dependencies passed in via a method parameter
      * Granular and flexible
      * Requires no change to rest of class
      * Breaks method signature and can result in many parameters
      * Consider this if only one method has the dependency; otherwise prefer constructor injection
* Refactoring for Dependency Inversion Principle:
  * Extract dependencies into interfaces
  * Inject implementations of interfaces into class
  * Reduce class's responsibilities using SRP
* Smells that indicate violation of DIP:
  * Use of the `new` keyword a lot
  * Use of static methods/properties
    * e.g. `DateTime.Now`
    * You should only use static methods that only care about data that is passed in as parameters; if it instantiates other classes, you're probably going to run into problems when you start testing
* Where do we instantiate our objects? Using DIP results in a whole bunch of interfaces that need to be instantiated somewhere
  * Create a default constructor which provides a default implementation of the interface
  * Main - manually instantiate whatever is needed in your application's startup routine or main() method
  * IoC Container - "Inversion of Control" container; like instantiating in main but easier to control
* IoC Containers
  * responsible for object graph instantiation
  * initiated at application startup via code or configuration
  * managed interfaces and implementation to be used are *Registered* with the container
  * dependencies on interfaces are *Resolved* at application startup or runtime
  * some common IoC containers: Microsoft Unity, StructureMap, Ninject, Windsor
* Depend on abstractions rather than concrete types wherever possible
* Layered/Tiered Application Design
  * Separate logical (and sometimes physical) layers which each correspond to separate projects in Visual Studio
  * Supports Encapsulation and Abstraction and works at approapriate abstraction level for each layer
  * Provides units of reuse
  * Traditional architecture: UI depends on Business Logic depends on Data Access Depends on a Database
  * You can invert the traditional architecture to have Data Access and UI and Tests depending on Business Logic and the ObjectModel (core, domain objects); the Database can be housed to the side and depended on only by Data Access
  * Dependencies tend to flow towards infrastructure like database, xml files, data access layers in traditional programing
    * Results in tight coupling, OCP violation, and difficulties with testing
  * You want to structure your project such that your core layer is at the center and has the fewest dependencies
* Dependency is transitive
* Don't depend on infrastructure assemblies from your core buisiness layer
  * Apply DIP to reverse dependencies
* Related to Single Responsibility Principle, Interface Segregation Principle, Facade Pattern, Strategy Pattern, Inversion of Control Containers, Open Closed Principle
* Recommended reading: *Agile Principles, Patterns, and Practices in C#* by Robert C. Martin and Micah Martin and [Martin Fowler article on dependency injection](https://martinfowler.com/articles/injection.html)

Don't Repeat Yourself Principle
--

* Results in code that is easier to maintain and easiser to use
* **Every piece of knowledge must have a single, unambiguous representation in the system.**
* **Repetition in logic calls for abstraction. Repetition in process calls for automation.**
* Signals that DRY should be applied:
  * Magic strings/magic numbers
  * Duplicate logic
  * Repeated if-then logic
  * Conditionals instead of polymorphism
    * Flags over objects are an indication of this; they violate the DIP
  * Repeated execution patterns
  * **Copy-Pasted code**
  * Only manual tests (aka the programmer manually runs the code and checks if you're getting the right result)
    * this gets more and more expensive and less and less accurate as new operations are added
    * when writing tests, you can use mock objects so you don't have to initialize a bunch of normal objects just for the purposes of testing
  * Static methods everywhere
    * results in tight coupling and difficulties in testing
* You can consider code generation to apply DRY
  * T4 Templates built into Visual Studio
  * ORM tools reduce repetitive data access code and eliminate common data access errors
  * CodeSmith, CodeBreeze, CodeHaystack
* Repetition in Process
  * Testing by hand = tedious and wasteful
  * Building by hand = tedious and wasteful
  * Performing deployments by hand = tedious and wasteful
* Repetition -> errors and waste
* Refactor code to remove repetition
* Abstract logic in code
* Related to Template Method Pattern, Command Pattern, Dependency Inversion Principle
* Recommended reading: *The Pragmatic Programmer: From Journeyman to Master* and *97 Things Every Programmer Should Know*

Summary
--

* **S**ingle Responsibility Principle: Every object should have a single responsibility, and that responsibility should be entirely encapsulated by the class
* **O**pen/Closed Principle: Software entities should be open for extension, but closed for modification
* **L**iskov Substitution Principle: Subtypes must be substitutable for their base types
* **I**nterface Segregation Principle: Clients should not be forced to depend on methods they do not use
* **D**ependency Inversion Principle: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
* Don't Repeat Yourself Principle: Every piece of knowledge must have a single, unambiguous representation in the system. Repetition in logic calls for abstraction. Repetition in process calls for automation.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
