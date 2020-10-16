---
templateKey: blog-post
title: The Repository Pattern
date: 2020-10-12T06:04:10.000Z
featuredpost: true
featuredimage: /img/repository-pattern.png
description: The Repository Pattern is used to maintain DRY code in the business logic of applications that need to interact with a data source. It does this by providing an interface between the business logic and data source.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Repository Pattern from Scott Allen.

The Repository Pattern can be used in applications which perform data access. No matter the data source, Repository can be used to interface between your logic code and that data source (Kind of like an [adapter](https://ilyana.dev/blog/2020-08-21-adapter-pattern/)). This prevents you from duplicating data access logic in your higher-level business logic code, thus keeping your code DRY. Additionally, a repository allows you to mimic real data access in your unit tests, since you don't want to actually interact with your data source in testing.

Depending on an application's size and complexity, you may need to create a number of repositories (one for each entity, for example). However, no matter the number of repositories, it remains true that these repositories sit between the business logic and the data source. The business logic should interact with the repository as though the data just lives in the repository, rather than knowing the repository has to go through data access procedures to retrieve the data.

It is obviously important that repositories be able to access and read data from the data source (I mean... that's their job). They should generally provide full CRUD (Create, Read, Update, Delete) functionality, though this does depend on your specific application. Also, you can usually implement queries using [LINQ](https://ilyana.dev/blog/2020-09-18-linq/), which makes queries pretty convenient, though this may depend on your data source.

One drawback to the Repository Pattern is that, since you are now a level above the data, it can be harder to optimize your data access.

The Repository Pattern is related to the Unit of Work, Specification, Identity Map, and Decorator Patterns.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
