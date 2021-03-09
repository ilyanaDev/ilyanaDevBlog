---
templateKey: blog-post
title: Working Effectively With Legacy Code
date: 2020-10-19T07:04:10.000Z
featuredpost: true
featuredimage: /img/legacy-code.png
description: Here are my notes from Michael C. Feathers's book Working Effectively with Legacy Code. It gives a fantastic explanation of how (and why) to get code under test as safely as possible. If you have the time, I highly recommend reading it all the way through, as there are a lot of specific refactorings I don't get into in these notes.
tags:
  - software development
  - books
  - clean code
---

Feathers gives a "working definition" of legacy code as "code without tests."

4 Reasons to Change Software:

* Add a feature
* Fix a bug
* Improve design (refactoring)
* Optimize resource use

Unit testing is a fantastic way to document what code should do and catch unintentional changes when making changes to your software. Feathers calls tests intended to catch changes a "software vice," because they prevent your software from changing (not "vice" as in opposite of virtue). Unit tests also run fast and make it easy to pinpoint to cause of failure (as opposed to larger integration tests). Unit tests are not unit tests if they have to interact with a network, database, file system, etc. (i.e. they are only unit tests if they are self-contained).

"**The Legacy Code Dilemma**: When we change code, we should have tests in place. To put tests in place, we often have to change code.

* legacy code refactorings in order to break dependencies (and therefore in order to put tests in place) can be done safely if they are done very carefully.
* breaking dependencies and the less-than-beautiful code that can result are often necessary evils when providing test coverage to legacy code

"The Legacy Code Change Algorithm"

* "identify change points"
* "find test points"
* "break dependencies"
* "write tests"
* "make changes and refactor"

2 reasons to break dependencies when adding tests: sensing ("sense when we can't access values our code computes") and separation (separate code in order to get code lines in the test to run). You can achieve sensing by coding a fake collaborator, or a mock object for lots of these tests (mock objects = "fakes that perform assertions internally").

Tests are really about eliminating possible sources when errors are noticed, because you can quickly confirm that certain parts of your code are functional and do not contain the bug.

When using refactoring tools, be aware of whether those tools check for behavior changes (which should not happen during refactoring).

One reason people don't always write tests is that there's no instant gratification for writing them, and it alwasy seems safe to add "just one more thing" and "go back and write tests later," which inevitably doesn't happen.

Sometimes refactoring can make code really ugly at first. But if you continue to make little refactorings, eventually you end up with some nice code.

Test-Driven-Development (TDD) = very powerful technique for adding features. Sometimes described as Red-Green-Refactor (failing test -> passing test -> refactor)

* "write failing test case"
* "get it to compile"
* "make it pass"
* "remove duplication"
* "repeat"

Programming by difference is another technique for adding features: you use inheritance to add the functionality without having to modify the base class. You can go back later to integrate your changes more fully, with the tests in place to make sure this is done correctly.

Sometimes it's a real pain to try to get a class into a test harness. Some common reasons include: instances "can't be created easily," "the test harness won't easily build with the class inside it," "the constructor we need to use has bad side effects," or "significant work happens in the constructor, and we need to sense it."

Test code will never run in your final production system; therefore it can be a little messier than production code. You can bend some rules about encapsulation, etc., but don't slack on readability.

If you have an annoying parameter in a constructor of a class you're trying to test, consider just passing null. The functionality you're testing might not require that parameter, and in that case this technique will save you some work. But **don't** do this in production code (though you might consider the [Null Object Pattern](https://ilyana.dev/blog/2020-08-20-nullobject-pattern/)).

**"Good design is testable, and design that isn't testable is bad."**

"Safety first" - do the messy but safe refactorings necessary to get your code into a test harness, *then* you can make your code cleaner.

Especially in legacy code, a change in one place can make changes in unexpected places. Before making changes, take some time to determine just where your changes might impact the code, and write tests accordingly. Be sure to consider superclasses and subclasses during this process.

If you have to make a number of changes in one area, it can be a good idea to consider testing "one level back;" write tests for a single public method that uses a number of private methods, etc. This allows for refactoring - even prolific structural changes - while still ensuring that behavior is maintained.

Legacy code can be really *hard* to understand. Some tips: sketch out the code, delete unused code, and try scratch refactoring (check in your code, then start messing with it and moving things around and figuring out what different pieces do; just **don't** check in those changes).

Even when it's just a tweak or "just this one tiny feature," think very carefully about adding code to existing classes, when that code might very well belong in its own class. If you ignore this, it's likely you'll start to end up with monster spaghetti classes in your code. Plus, you're breaking the Single Responsibility Principle.

When you're working with a monster class in legacy code, consider method grouping to see whether and how you should break it up; simply write out all the methods in the class and group them by what they do.

Copy Pasta = bad. Removing duplicate code from legacy code is a surprisingly effective means of improving the code. And it's usually not that hard!

* "When two methods look roughly the same, extract the differences to other methods." Now you have two identical methods, and you can get rid of one.

It's a good idea, when working with some really messy legacy code, to make refactorings initially with a refactoring tool (since these refactorings should be safe), then get the code under test, then make additional refactorings.

**"Programming is the art of doing one thing at a time"** - Don't shave a yak. Just don't. Finish the thing you set out to do unless you *really* can't do it without changing something somewhere else first. Write the test. Make the change. Run the test. If you've succeeded in what you were trying to do, move on to the next thing. It's smart to keep a notepad handy so you can write down things you notice need changes while you're doing something else, so you can go back to them later.

When you're breaking dependencies to get code into a test harness, keep your changes as simple as possible. This is where the errors come in - you're changing code that isn't covered by tests. So be careful and don't try any complicated refactorings; those can wait until you've got some tests.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
