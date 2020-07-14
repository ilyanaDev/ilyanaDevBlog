---
templateKey: blog-post
title: Notes from Design Patterns Overview Pluralsight Course
date: 2020-07-01T15:04:10.000Z
featuredpost: false
featuredimage: /img/design-patterns-overview.png
description: I found Steve Smith's Design Patterns Overview course on Pluralsight very useful and informative.
tags:
  - software development
  - coding
  - design patterns
  - pluralsight
---

I recently completed the Pluralsight course [**Design Patterns Overview**](https://app.pluralsight.com/library/courses/design-patterns-overview/table-of-contents) by Steve Smith, which was very informative as a bird's eye view of design patterns as a general topic.

Why learn design patterns?
--

* So you don't reinvent the wheel
* They allow for increased clarity of communication
* They often lead to better software
* Advance your career

How to learn design patterns?
--

* be familiar with a wide array of patterns
* have a shallow understanding of several other patterns
* have a deep knowledge/mastery of several patterns

What makes up a design pattern?
--

* **name/classification**
* **intent**
* aka's
* **motivation/problem to be solved**
* **applicability/context**
* structure
* participants (classes, objects, etc.)
* collaboration between participants
* consequences/design tradeoffs
* implementation
* sample code
* known uses
* related patterns

Bolded points above indicate bare minimum required for broad knowledge of a particular pattern.

Design pattern structure
--

* Often described by a UML diagram
  * boxes represent classes or interfaces
  * lines represent some kind of relationship - inheritance, implementation, calls, etc.

When to apply design patterns?
--

* Practice with a coding exercise/kata, testing, repeat with variations
  * Gilded rose kata good for practicing Proxy pattern, Rules Engine pattern, Builder pattern, Template Method pattern
* In real code, follow refactoring fundamentals, make sure you have test coverage, do your work in a separate branch, and verify consistent behavior after completing the refactoring. Be prepared to delete what you've got and start over if this pattern really doesn't fit with this code

A few good design patterns in C#
--

* Strategy
* Repository - data-access pattern; works well with Strategy and other patterns
* Adapter
* Factory
* Proxy and Decorator patterns
  * closely related structurally but have different intents
  * work well with other patterns
* Singleton

Summary
--

* Design patterns = general solutions to existing problems
* Avoid reinventing the wheel
* Higher-level communication with your team
* T-shaped knowledge of patterns
* Practice!
* Use refactoring to apply patterns
* Look for ways to combine patterns

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
