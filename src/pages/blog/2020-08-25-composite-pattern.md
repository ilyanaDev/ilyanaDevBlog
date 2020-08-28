---
templateKey: blog-post
title: The Composite Pattern
date: 2020-08-25T06:04:10.000Z
featuredpost: false
featuredimage: /img/composite-pattern.png
description: The Composite Pattern is used to organize objects into tree structures representing part-whole hierarchies. It is often used in combination with the Iterator Pattern.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman gives a pretty good overview of the Composite Pattern in its ninth chapter.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a really informative module on the Composite Pattern from John Sonmez.

Now, onto the explanation of the pattern:

Part-whole hierarchies? What?
--

In a tree structure, there are two types of elements: nodes and leaves. Nodes have child(ren) element(s), and leaves do not. Using the Composite Pattern, each element of the tree diagram can be treated as a part, but the client can still interact with the tree as a whole. Not only that, the Composite Pattern lets the same operations be applied to both compositions of objects (nodes and their children) and objects (leaves). The differences can essentially be ignored by the client.

Structure
--

To apply the Composite Pattern, the client expects to interact with a component interface. This interface is applied by both leaves and composites and provides operations like `add(Component)`, `remove(Component)`, and `getChild(int)`. These operations are obviously intended to be applied to composites. The component interface also provides operations intended for the leaves, and these will of course vary based on what the leaves represent.

Now, the fact that both leaves and composites must each implement methods intended for the other is a bit of a drawback, so it is important that programmers pay attention and don't try to apply operations to components where they don't make sense. These operations can be coded to throw an exception when they are used incorrectly.

However, the tree structure provided by the Composite Patter provides an effective way to ignore the differences between composites and individuals and is very useful in that respect.

When to use the Composite Pattern
--

Each of the following is a good indicator that you should consider composite:

* groups or collections
* trees!
* distribution among groups and individuals

The Composite Pattern is also related to the [Iterator Pattern](https://ilyana.dev/blog/2020-08-25-iterator-pattern/).

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
