---
templateKey: blog-post
title: The Strategy Pattern
date: 2020-08-04T04:04:10.000Z
featuredpost: false
featuredimage: /img/strategy-pattern.png
description: The Strategy Pattern is a common design pattern that allows the program to select an algorithm/strategy at runtime. Instead of using inheritance to assign behaviors to objects, the Strategy Pattern uses composition.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

You can view my previous post on a Strategy Pattern course I watched on Pluralsight [here](https://ilyana.dev/blog/2020-07-20-strategy-pattern-pluralsight/).

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman provides an excellent explanation of the Strategy Pattern in its first chapter.

David Starr also has a very informative module on the Strategy Pattern in the Pluralsight [Strategy Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course.

Why use the Strategy Pattern?
--

When using inheritance in object-oriented programming, you might have a `Vehicle` superclass with methods like `Drive()`, `Honk()`, `Refuel()`, etc. `Car`, `Boat`, `Motorcycle`, `Bicycle`, `18Wheeler`, and `Plane` might inherit from `Vehicle`. But this can get very complicated very fast. Boats and planes don't really drive. An 18 wheeler will want to refuel with diesel. A bike doesn't take fuel, and it has a bell, not a horn.

However different these vehicles might be, though, you still want to be able to interact with them polymorphically, but you might also want to change their behavior at runtime: What if you add an engine to the bicycle and need to refuel it now? What if flying cars are invented? What about electric vehicles?

Essentially, the Strategy Pattern allows you to deal with all these problems. Instead of implementing `Drive()`, `Honk()`, and `Refuel()` within each subclass, each `Vehicle` would instead **Have a** `DriveBehavior`, `MakeNoiseBehavior`, and `RefuelBehavior`. Each of these behaviors contains subclasses: e.g. `Honk`, `RingBell`, and `MakeNoNoise` might inherit from `MakeNoiseBehavior`. Each `Vehicle` **Has** one of each of these behaviors, all of which can be altered at runtime as needed. This ensures that altering behavior is easy and that adding a new subclass to `Vehicle` does not require much implementation effort.

Some signs that a class might benefit from being refactored using the Strategy Pattern are switch statements being used to determine an algorithm and if adding a new algorithm requires the class itself to be modified (since this violates the open-closed principle).

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
