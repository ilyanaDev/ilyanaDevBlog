---
templateKey: blog-post
title: The Bridge Pattern
date: 2020-08-27T08:03:10.000Z
featuredpost: true
featuredimage: /img/bridge-pattern.png
description: The Bridge Pattern is useful in a system where both implementation and abstraction are likely to change (and thus, should be encapsulated).
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman provides a quick overview of the Bridge Pattern in its appendix.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Bridge Pattern from John Sonmez.

The Bridge Pattern's goal is to decouple an implementation and an interface such that abstraction and implementation can be altered independently.

Structure
--

In the Bridge Pattern, two class hierarchies are created, one for the abstraction and one for the implementation.

An instance of the abstraction composes an instance of the implementation; thus, the abstraction and implementation can be varied independently.

Within the abstraction, methods in the base class are implemented in terms of the implementation, while subclasses are implemented in terms of the abstraction.

Common Uses
--

The Bridge Pattern is commonly used in user interfaces, as well as in systems related to object persistence.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
