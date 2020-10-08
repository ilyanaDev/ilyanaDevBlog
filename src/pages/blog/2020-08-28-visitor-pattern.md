---
templateKey: blog-post
title: The Visitor Pattern
date: 2020-08-28T06:04:10.000Z
featuredpost: false
featuredimage: /img/visitor-pattern.png
description: The Visitor Pattern is used to create an operation to be performed on elements of a data structure (a list or tree, for example). It essentially creates a new method for each component of that structure, while still adhering to the Open-Closed Principle.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman provides a quick overview of the Visitor Pattern in its appendix.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Visitor Pattern from John Sonmez.

For the Visitor to be able to perform its operation on the elements of the data structure, it needs to be able to call a `getState()` method on each element. In the Visitor Pattern, a Traverser object is usually implemented to guide the Visitor through the data structure (this way the Visitor adheres to the Single Responsibility Prinicple because it doesn't have to deal with performing its operation *and* iterating through the data structure).

As with other patterns, it is useful to implement a Visitor interface and one or more concrete Visitors. Each concrete Visitor represents one operation, and these can be swapped in and out as needed.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
