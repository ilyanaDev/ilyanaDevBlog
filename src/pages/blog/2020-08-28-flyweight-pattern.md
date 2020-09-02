---
templateKey: blog-post
title: The Flyweight Pattern
date: 2020-08-28T01:04:10.000Z
featuredpost: false
featuredimage: /img/flyweight-pattern.png
description: The Flyweight pattern is intended to improve performance by having one instance of a class provide many virtual instances.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman provides a quick overview of the Flyweight Pattern in its appendix.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Flyweight Pattern from Niraj Bhatt.

If an application has many instances of a class where all of the logic and controls between them are identical, this is a good sign that the Flyweight Pattern could be implemented.

Instead of having a single `Object` class where each instance maintains its own state and performs the necessary logic, the idea of the Flyweight Pattern is to have a stateless `Object` class (called a flyweight) that only provides the logic, as well as an `ObjectManager` class that holds an array for all the different object states. The `ObjectManager` class should also have methods to call each of object's methods for all instances in the array.

Flyweight is often implemented in conjunction with the [Factory Pattern](https://ilyana.dev/blog/2020-08-14-factory-pattern/), in order to prevent many flyweights being initiated. It also works well with the [Composite Pattern](https://ilyana.dev/blog/2020-08-25-composite-pattern/), [Strategy Pattern](https://ilyana.dev/blog/2020-08-04-strategy-pattern/), and [State Pattern](https://ilyana.dev/blog/2020-08-25-state-pattern/).

One drawback is that different logical objects will not be able to behave independently of one another.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
