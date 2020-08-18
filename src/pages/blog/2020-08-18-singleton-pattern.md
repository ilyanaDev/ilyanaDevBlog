---
templateKey: blog-post
title: The Singleton Pattern
date: 2020-08-18T04:04:10.000Z
featuredpost: true
featuredimage: /img/singleton-pattern.png
description: The Singleton Pattern provides a means of building a class with one and only one instance ever initialized, and that instance is globally available. This seems fairly simple at first, but there are some complicating factors that the pattern helps us consider.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman provides an excellent explanation of the Singleton Pattern in its fifth chapter.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course also has a great module on the Singleton Pattern by Steve Smith.

Steve Smith also has a good synopsis of the pattern in [one of his blog posts](https://ardalis.com/the-singleton-design-pattern/).

Why would I want just one instance of a class?
--

Well, what if you have a class `PrinterAssigner` that assigns jobs among several printers. If you accidentally instantiate a second `PrinterAssigner`, you might end up assigning a printer too many jobs or running duplicate jobs. There are many other examples of objects (often involved in managing other classes, like an operating system's window manager or file manaager) where having multiple instances instantiated can lead to hard-to-find errors.

The naive implementation of Singleton
--

On its surface, Singleton is very simple. If you don't care about thread safety in your program (which you should! But more on that later), the naive implementation of Singleton is fine:

```csharp
// code from Head First Design Patterns

public class Singleton
{
    private static Singleton oneSingletonToRuleThemAll;

    private Singleton()
    {
    }

    public static Singleton getInstance()
    {
        if(oneSingletonToRuleThemAll == null)
        {
            oneSingletonToRuleThemAll = new Singleton();
        }
        return oneSingletonToRuleThemAll;
    }

    // other methods
}
```

You'll notice that `Singleton` has a private constructor, which is called by `getInstance()` *if and only if* there is not already a Singleton instance stored in `oneSingletonToRuleThemAll`.

Well, this seems great! It ensures we can only ever have one Singleton, and it eliminates any overhead that might result from instantiating that Singleton before it is actually needed. Are we done yet?

Nope!

Thread-Safe Implementations
--

Thread-safe?

Imagine you have two threads running your program at once. Within miliseconds of one another, they each call `Singleton.getInstance()`. At this point, `oneSingletonToRuleThemAll` is null in both threads, so they both enter the `if` block! Since they're both in the `if` block, each thread can instantiate a Singleton. Thus, the naive implementation is not thread-safe.

Now, this is only a problem the *first* time a Singleton is instantiated, because after that `oneSingletonToRuleThemAll` will never be null. So, if performance is not a priority or if instantiating your Singleton does not have a major impact on performance of your overall program, you could just instantiate `oneSingletonToRuleThemAll` to begin with and not worry about it after that.

However, for a more elegant solution, you can use the LazySingleton approach that Steve Smith covers in [his Pluralsight module on Singleton](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents). Here, you can trick the C# compiler into lazily compiling your one Singleton instance by using a nested class which returns that instance when the Instance property of the Singleton class calls on it.

These are just a few examples. Depending on your language and environment, you'll likely find other ways to manipulate the Singleton Pattern into being thread-safe.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
