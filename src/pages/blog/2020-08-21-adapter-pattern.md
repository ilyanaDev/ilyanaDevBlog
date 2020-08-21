---
templateKey: blog-post
title: The Adapter Pattern
date: 2020-08-21T04:04:10.000Z
featuredpost: true
featuredimage: /img/adapter-pattern.png
description: Closely related to the Facade Pattern, the purpose of the Adapter Pattern is to wrap one or more objects in order to convert the original interface to another interface. You may have also know adapters as wrappers.

tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman gives a pretty good overview of the Adapter Pattern in its seventh chapter.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Adapter Pattern from Steve Smith.

Much like the power socket adapters you likely carry with you when travelling, the Adapter Pattern can be used to join two incompatible interfaces.

The Adapter Pattern is useful whenever you want to use an existing class whose interface is not compatible with the rest of your system. It can also be applied in order to create reusable code which depends on an adapter interface rather than a concrete implementation.

Object Adapter
--

The subset of the Adapter Pattern used in languages like C# and Java, which do not support multiple inheritance, is the object adapter.

In this structure, the client interacts with a target interface. That interface is implemented by the adapter class, which composes ("Has") an interface of the adaptee class. All requests made by the client to the adapter are delegated to the adaptee.

Class Adapter
--

In languages that support multiple inheritance, a class adapter can be implemented instead.

In this pattern, instead of working with a target interface, the client can work with a target class. The adapter class subclasses both this target class and the adaptee class. The structure here is slightly different, but the idea of the pattern is still maintained.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
