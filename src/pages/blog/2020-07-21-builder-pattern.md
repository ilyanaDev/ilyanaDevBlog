---
templateKey: blog-post
title: The Builder Design Pattern
date: 2020-07-21T06:04:10.000Z
featuredpost: true
featuredimage: /img/builder-pattern.png
description: The Builder Pattern is a useful pattern of object-oriented software that separates the construction of an object from its representation.
tags:
  - software development
  - coding
  - design patterns
---

The Builder Design Pattern can be used in many ways throughout object-oriented programming. However, one of its most useful applications is in simplifying unit tests. In unit tests, you tend to care only about one or two properties of an object, even though its constructor might require many parameters to be passed. Since many of these parameters are irrelevant, your tests can end up being rather cluttered. The Builder Pattern can help.

The Builder Pattern
--

Separates the construction of a complex object from its representation so that the same construction process can create different representations.

Essentially, the Builder Pattern allows you to separate logic from data in order to reuse constructor logic to create the exact same thing, just with different data.

Things like `StringBuilder` and fluent APIs are *not* the Builder Pattern.

Implementation
--

The Builder Pattern entails creating a class of name `SomeTypeBuilder`, which has various methods `WithSomeParameter(var someParameter)` and `Build()`. Using the parameter methods - each of which returns `this` - and the build method, you can return an instance of `SomeType` with the parameters you care about set, and all other parameters set to default values. Using this pattern in unit testing declutters your tests, thus increasing readability.

In the formal definition, you have a Builder, which is used by a Director and implemented by a Concrete Builder, which produces a Product.

* Director - controls logic, puts steps in order
  * uses Concrete Builder
  * knows how to build (needs ingredients; already knows what the steps are)
  * called directly by client code
* Builder - defines steps
  * abstract interface/class
  * director can depend on certain names being in place for various methods
  * defines steps
  * holds isntance of Product
* Concrete Builder - provides implementation
  * there should be multiple
  * provides implementation of Builder interface
  * a set of ingredients/data
* Product - produced by the preceding three components
  * what is being built
  * not a different type (there's no inheritance hierarchy in the products), but different data

Uses
--

* Cleaner unit tests
* Ensures that a complex object with many parameters is always constructed correctly, even if a parameter is forgotten or irrelevant
* Putting order-dependent steps in the right order

Resources
--

* The Builder Pattern more generally
  * DevIQ provides a [succinct explanation of the Builder Pattern](https://deviq.com/builder-design-pattern/).
  * Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Builder Pattern by John Sonmez. This course is technically retired but can be viewed from the link provided.
* Unit testing
  * For an explanation of the Builder Pattern's usefulness in writing unit tests, see [Kenneth Truyers's blog post](https://www.kenneth-truyers.net/2013/07/15/flexible-and-expressive-unit-tests-with-the-builder-pattern/).
  * Ardalis covers an application of the Builder Pattern in [his blog post](https://ardalis.com/improve-tests-with-the-builder-pattern-for-test-data/).
* Kata
  * Ardalis has a [Builder Pattern kata](https://github.com/ardalis/BuilderTestSample) available on his GitHub, and you can watch a video of Brendan Enrick going through the kata [here](https://www.youtube.com/watch?v=0FYthBodusg).

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
