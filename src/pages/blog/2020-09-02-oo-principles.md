---
templateKey: blog-post
title: Object-Oriented Principles Dictionary
date: 2020-09-02T06:04:10.000Z
featuredpost: true
featuredimage: /img/oo-principles-dictionary.png
description: This is a list of important principles of object-oriented programming with definitions, which I will add to as I learn about additional principles.
tags:
  - software development
  - coding
  - principles
  - pluralsight
---

These principles and definitions come from *Head First Design Patterns* by Eric Freeman and Elizabeth Freeman and Steve Smith's Pluralsight course, [Solid Principles of Object-Oriented Design](https://app.pluralsight.com/library/courses/principles-oo-design/table-of-contents).

**Dependency Inversion Principle** - both high- and low-level modules should depend on abstractions; abstractions should not depend on details; details should depend on abstractions

**Don't Repeat Yourself Principle (DRY)** - self explanatory; avoid copy-pasted code, magic numbers/strings, static methods, duplicate logic, etc.

**Encapsulate what Varies** - self explanatory; encapsulate code that is likely to change so that these changes do not have ripple effects throughout your application

**Favor Composition Over Inheritance** - composition can improve flexibility

**The Hollywood Principle** - "Don't call us, we'll call you"; low-level components can be hooked into a system, but only the high-level components get to determine if, when, and how to call on those low-level components

**Interface Segregation Principle** - clients should not depend on methods they do not use; usually becomes a problem when interfaces are too large/not cohesive

**Liskov Substitution Principle** - subtypes should be substitutable for their base types

**Loose Coupling** - classes that interact should be loosely coupled, wthout interacting too much; this increases flexibility by reducing dependencies

**Open/Closed Principle** - classes should be open for extension and closed to modification

**Principle of Least Knowledge** - talk only to your friends; i.e. be careful how many other classes each class in your design needs to interact with

**Program to an Interface, not an Implementation** - this allows clients to depend on the interface, rather than on the concrete implementation being used

**Single Responsibility Principle (SRP)** - every object should have a single responsibility, no more and no less; a class should have only one reason to change

For more information on the Dependency Inversion Principle, DRY, Interface Segregation Principle, Liskov Substitution Principle, Open/Closed Principle, and SRP, check out [this blog post](https://ilyana.dev/blog/2020-07-14-solid-principles-objectOrientedDesign-course/).

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
