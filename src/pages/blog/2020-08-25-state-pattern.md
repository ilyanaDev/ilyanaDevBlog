---
templateKey: blog-post
title: The State Pattern
date: 2020-08-25T07:04:10.000Z
featuredpost: false
featuredimage: /img/state-pattern.png
description: The State Pattern is used to alter object behavior based upon an internal state. In most respects it is virtually identical to the Strategy Pattern, though the two have very different intents.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman gives a pretty good overview of the State Pattern in its tenth chapter.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the State Pattern from John Brown.

Some objects just behave differently in different states. A candy dispenser in an empty state will not dispense any candy, even though it would dispense candy if it were full. A restaurant in a closed state will not serve any food, even though it would serve food if it were open. A car in an out of gas state will not drive, even though it would drive if it had gas.

The beauty of the State Pattern is that these changes can be made internally in the object without a bunch of spaghetti code in the form of if-else and switch statements trying to control different states. Instead, we can use composition to change an object's state based on certain defined state transitions. The State Pattern can increase maintainablity and simplify code and is quite effective in separating concerns.

The State Pattern has a fairly simple structure: concrete states inherit from a state interface. An object whose state will change (the "context") composes implementations of the state interface. When requests are made to the context, they are delegated to its internal state.

Why does all this sound familiar? This is essentially the same structure as the [Strategy Pattern](https://ilyana.dev/blog/2020-08-04-strategy-pattern/), just with different names. However, while the Strategy Pattern is indented to serve as an alternative to inheritance, the State Pattern is intended to avoid excessive conditional logic within classes.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
