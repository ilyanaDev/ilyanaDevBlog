---
templateKey: blog-post
title: The Template Method Pattern
date: 2020-08-24T05:04:10.000Z
featuredpost: false
featuredimage: /img/templatemethod-pattern.png
description: The Template Method Pattern allows for encapsulation of algorithms by defining the skeleton of a method, where some steps are deferred to subclasses. Thus, the subclasses can make necessary changes to the algorithm without altering its overall structure.

tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman gives a pretty good overview of the Template Method Pattern in its eighth chapter.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Template Method Pattern from Steve Smith, who also has a short [course on the Template Method Pattern](https://app.pluralsight.com/library/courses/c-sharp-design-patterns-template-method/table-of-contents).

There are all kinds of examples of real-life processes where all the steps are roughly the same, but a few small alterations can make a big difference.

To grow tomatoes versus growing peppers, for example, the basic steps are:

* plant seeds
* water daily
* wait x days
* harvest

However, some of these steps will vary between different kinds of vegetables. At the most basic level, you'll need to plant tomato seeds if you want tomatoes, and pepper seeds if you want peppers. It might take tomatoes 60 days to produce fruit after planting, but peppers might require 70. Still, the steps of watering and harvesting remain constant. How could this algorithm be encapsulated so the program doesn't have too much duplicate code, but it still allows different kinds of vegetables to override some steps?

The Template Method Pattern, of course!

In the Template Method Pattern, an abstract class holds a template method. In this example, the abstract class will be `Vegetable` and the template method will be `growVeggies()`. `growVeggies()` will simply execute steps 1-4, in order, essentially providing a skeleton framework for the algorithm of growing vegetables.

`Vegetable` will provide either final implementations of the steps or abstract versions of the steps, depending on whether the subclasses need to provide their own implementations. Since `Vegetable` does not want its subclasses messing with the methods `waterDaily()` or `harvest()`, it will define final, concrete implementations of these. This will also be true for the `growVeggies()` method, since the subclasses should not be able to alter the steps of the algorithm. On the other hand, the subclasses are expected to provide their own implementations of `plantSeeds()` and `waitXDays()`, so these will be left as abstract methods.

That's about all there is to it! Algorithm encapsulation is that easy!

Additionally, if there are optional steps in the algorithm, which some subclasses, will require and some will not, there's an easy fix for that. These are called hooks. Let's say tomatoes need fertilizer, but peppers don't. `growVeggies()` will call `fertilize()` after `plantSeeds()`. `Vegetable` will provide an implementation of `fertilize()` like this:

```csharp
//hook
public void fertilize()
{
    // do nothing
}
```

This implementation, since it is not declared as final, can be overriden by any subclass that requires fertilization capability.

The Template Method Pattern also allows for adherance to the Hollywood Principle ("Don't call us; we'll call you.") because high-level components do not depend on low-level components. The abstract class (high-level component) does not have to wait for the subclasses (low-level components) to call it; the base class calls the subclasses, and clients depend only on the base class.

Some drawbacks of the Template Method Pattern:

* you must know the algorithm steps in advance
* reliance on inheritance, rather than composition

Because of the above, the Template Method Pattern is less flexible than the [Strategy Pattern](https://ilyana.dev/blog/2020-08-04-strategy-pattern/). However, Template Method does provide greater reuse.

The Template Method Pattern is often used in combination with the [Factory Method Pattern](https://ilyana.dev/blog/2020-08-14-factory-pattern/).

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
