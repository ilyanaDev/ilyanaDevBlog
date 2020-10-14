---
templateKey: blog-post
title: The Unit of Work Pattern
date: 2020-10-14T06:04:10.000Z
featuredpost: true
featuredimage: /img/unit-work-pattern.png
description: Like the Repository Pattern, the Unit of Work Pattern is commonly found in data access applications. The Unit of Work provides a means of keeping track of changes to objects from a database (or other data store), so that the application can send the proper information back to the database when the time comes to save those changes.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Unit of Work Pattern from Scott Allen.

The main goals of the Unit of Work Pattern are to make data access more efficient, check for concurrent changes, and manage transactions with a database.

The Unit of Work is intended to keep track of the business logic's changes so that the business logic doesn't have to. The business logic is abstracted from the lower-level work of knowing which pieces of state it is changing. Instead, the Unit of Work can keep track of this and commit those changes when the time comes.

It is often a good idea to define an `IUnitOfWork` interface in the implementation of the Unit of Work Pattern. This interface should define a `Commit()` method.

It is also common for an application applying the Unit of Work Pattern to have some sort of controller orchestrating all business activities. This controller is responsible for calling `Commit()` when all changes are complete in a set of related changes.

The Unit of Work Pattern is commonly implemented by persistence frameworks like Entity Framework.

Keep in mind that a Unit of Work's lifetime typically lasts the lifetime of the database transaction. A [Singleton](https://ilyana.dev/blog/2020-08-18-singleton-pattern/) Unit of Work is a bad idea!

The Unit of Work Pattern is related to the [Repository Pattern](https://ilyana.dev/blog/2020-10-12-repository-pattern/).

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
