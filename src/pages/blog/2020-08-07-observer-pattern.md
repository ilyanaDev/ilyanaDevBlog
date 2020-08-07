---
templateKey: blog-post
title: The Observer Pattern
date: 2020-08-07T04:04:10.000Z
featuredpost: true
featuredimage: /img/observer-pattern.png
description: TThe Observer Pattern is a design pattern that allows objects to react to changes in another object's data while maintaining loose coupling. In this pattern, observer objects can decide at runtime whether to receive data from the subject object.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman provides an excellent explanation of the Observer Pattern in its second chapter.

John Brown also has a Pluralsight module on the Observer Pattern in the [Strategy Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course.

Why use the Observer Pattern?
--

It is not at all uncommon in object-oriented programming to run into a situation where you have an object in your code that collects/outputs data and other objects that care about that data. That object might be a thermometer, a stock ticker, a speedometer, etc. Whatever the case, the object's job is to take those measurements of tempurature, stock prices, or speed. This object is the subject. It has data, but it does not care which other classes care about its data or what those classes might do with that data.

Separation of concerns is violated if the subject is asked to analyze the data or otherwise violate its purpose as a measurement/data output device.

However, other objects *do* care about those measurements and may need to perform logic on them. But they might only care about when temperature exceeds 100 degrees or a specific stock's price changes. These objects are the observers. The observers do not care what class gives them the data, only that they receive the data as it changes.

Signs you may want to refactor your code to utilize the Observer Pattern include an object that is dependent on another object or a change to one object requires a change to many others.

So how does it work?
--

According to *Head First Design Patterns*, "The Observer Pattern defines a one-to-many relationship between a set of objects." i.e. The Observer Pattern defines the one subject's relationship with its many observers.

The Observer Pattern allows you to separate the subject from its observers while still allowing the observers to react to changes in the subject's data. In this pattern, the subject can register, unregister, and notify observers. The observers provide a method that allows the subject to inform them of the updates. This pattern allows for loose coupling between the subject and observers - they can interact, but they know next-to-nothing about one another.

Traditionally, the Observer Pattern is implemented via an abstract subject class and an abstract observer class, from which a concrete subject and some concrete observers inherit. That concrete subject *has* (i.e. composition) a list of those concrete observers which have registered with it.

Alternatively, the .NET framework provides events and delegates which can be used to implement the Observer Pattern without using abstract classes. The Observer Pattern can also be implemented in the .NET framework using `IObserver<T>`. IObservable is all about having an external environment push changes to observers, which process the changes. This is the dual of the IEnumerable pattern, where an external environment pulls changes from an IEnumerable and processes those changes.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
