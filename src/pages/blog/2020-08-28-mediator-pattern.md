---
templateKey: blog-post
title: The Mediator Pattern
date: 2020-08-28T03:04:10.000Z
featuredpost: false
featuredimage: /img/mediator-pattern.png
description: The Mediator Pattern is useful for decoupling objects in a system that must communicate with one another but which do not need to know about the implementations of one another. This pattern allows the communication between those objects to be altered independently of those objects.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman provides a quick overview of the Mediator Pattern in its appendix.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Mediator Pattern from Donald Belcham.

The principles of object-oriented design tell us that tight coupling is bad. So in a system with many objects all working together and interacting with one another, the objects will be tightly coupled, and all the inter-object connections can make the system very complex.

The solution? A mediator object can be inserted between all the other objects in the system, completely decoupling them from one another. When Object1 needs to send a command to or query information from Object2, the mediator object, well, mediates that interaction. Now, whenever changes are made to the relationships between the non-mediator objects (now known as colleagues), the only code that needs to change is encapsulated in the mediator object.

It is often useful for the concrete mediator object to implement a mediator interface. This way, the other objects in the system depend only on the mediator interface and not on the concrete mediator object; if behavior needs to change, a new concrete mediator object can be easily swapped in.

One drawback to this pattern is that, especially if you started out with a very complex system with lots of inter-object connections, you're essentially transplanting that complexity into the mediator object, rather than reducing that complexity. As a result, the mediator object itself may grow exceedingly complex and difficult to maintain.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
