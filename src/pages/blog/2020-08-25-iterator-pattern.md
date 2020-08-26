---
templateKey: blog-post
title: The Iterator Pattern
date: 2020-08-25T05:04:10.000Z
featuredpost: false
featuredimage: /img/iterator-pattern.png
description: The goal of the Iterator Pattern is to provide an interface which allows the client to iterate through an aggregate object without having to know the implementation of the object. You may also know iterators as cursors.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman gives a pretty good overview of the Iterator Pattern in its ninth chapter.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Iterator Pattern from Steve Smith.

Information hiding and encapsulation of change are pretty essential characteristics of good software. These can be tricky to adhere to, though, if your program is working with several different types of aggregate objects. The Iterator Pattern can help in this scenario.

The goal of the Iterator Pattern is to hide the implementation of each aggregate object behind one consistent interface.

To achieve this, concrete iterators implement an iterator interface, which requires methods `hasNext()` and `next()`, and sometimes others.

Each aggregate that implements the iterator pattern must implement an aggregator interface. This interface ensures that the aggregate is responsible for creating its own instance of a concrete iterator, which the client can then call upon when it wants to iterate through the aggregate object.

C# actually provides some implementation of this pattern through the `IEnumerable` (aggregate) and `IEnumerator` (iterator) interfaces. C#'s foreach feature functions on any type that implements `IEnumerable`. Other languages, like Java, also have built-in implementations of the Iterator Pattern.

The Iterator Pattern can be used pretty effectively in combination with the [Factory Pattern](https://ilyana.dev/blog/2020-08-14-factory-pattern/); a factory method is often used in the aggregate to construct iterators.

The Iterator Pattern is also related to the [Composite Pattern](https://ilyana.dev/blog/2020-08-25-composite-pattern/).

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
