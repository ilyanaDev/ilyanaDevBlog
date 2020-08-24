---
templateKey: blog-post
title: The Command Pattern
date: 2020-08-20T06:04:10.000Z
featuredpost: false
featuredimage: /img/command-pattern.png
description: The goal of the Command Pattern is to allow queueable and undoable requests by representing an action as an object, much the same way a customer's order at a restaurant is encapsulated in an order slip. Thus, the clients are decoupled from the commands.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman gives a pretty good overview of the Command Pattern in its sixth chapter.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Command Pattern from Keith Brown.

In the Command Pattern, every concrete command implements a command interface, which requires implementation of an `execute()` method. Because every concrete command implements this interface, various invoker classes can compose command objects without worrying about the what exactly the command does, only that it will `execute()` when that method is called.

Because of the structure of this pattern, adding new commands is easy - you just add a new class implementing the command interface. This allows your code to adhere to the Open-Closed Principle.

Note: It can be useful for the [Null Object Pattern](ilyana.dev/blog/2020-08-20-nullobject-pattern/) to be implemented for the command interface such that invoker objects can compose a null command object if necessary. It can also be convenient to utilize a [Factory Pattern](https://ilyana.dev/blog/2020-08-14-factory-pattern/) as well.

Another benefit of the Command Pattern is the ease with which undo functionality can be achieved. In addition to the `execute()` method, the command interface can also require an `undo()` method to be implemented by the concrete command classes. Similar implementations can be applied to achieve logging and/or validation functionality.

Something to keep in mind: since commands do not allow the client to pass in any arguments, they must be completely self-contained.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
