---
templateKey: blog-post
title: Notes from Strategy Pattern Pluralsight Course
date: 2020-07-20T04:04:10.000Z
featuredpost: true
featuredimage: /img/strategy-pattern-pluralsight.png
description: The Strategy Pattern is a common pattern that allows the program to select an algorithm/strategy at runtime.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

I recently finished going through the course [C# Design Patterns: Strategy](https://app.pluralsight.com/library/courses/c-sharp-design-patterns-strategy/table-of-contents) by Filip Ekberg on Pluralsight.

Strategy Pattern -> extensible, robust, and testable software

This pattern allows you to select an algorithm at runtime.

Strategy Pattern Characteristics:

* Context has reference to and invokes strategy
* IStrategy defines interface for strategy
* Strategy is the concrete implementation of the strategy

Like many other patterns, the Strategy Pattern does tend to add complexity, so be cautious with it.

Anytime you implement an interface, you can say you're implementing the Strategy Pattern.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
