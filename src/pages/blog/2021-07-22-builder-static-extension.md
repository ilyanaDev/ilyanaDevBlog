---
templateKey: blog-post
title: Implementing a Static Builder using Extension Methods in C#
date: 2021-07-22T18:05:10.000Z
featuredpost: true
featuredimage: /img/builder-static-extension.png
description: While not technically following the Builder Pattern, a static builder implemented with extension methods is another way to achieve the same functionality.
tags:
  - software development
  - coding
  - testing
  - c#
---

## Typical Builder

In the typical Builder Pattern, the Builder class has a number of methods which return itself, then a `Build` method which returns an instance of the class being built:

```csharp
// adapted from https://deviq.com/design-patterns/builder-pattern
public class SaladBuilder()
{
    private Salad _salad = new();

    public SaladBuilder WithLettuce(Lettuce lettuce)
    {
        _salad.Lettuce = lettuce;
        return this;
    }

    public SaladBuilder WithDressing(Dressing dressing)
    {
        _salad.Dressing = dressing;
        return this;
    }

    public SaladBuilder WithTomatoes()
    {
        _salad.Tomatoes = true;
        return this;
    }

    public SaladBuilder WithCroutons()
    {
        _salad.Croutons = true;
        return this;
    }

    public Salad Build()
    {
        return _salad;
    }
}
```

To get a `Salad` with certain properties, you would call:

```csharp
var builder = new SaladBuilder();

var salad = builder.WithLettuce(iceberg).WithDressing(italian).WithCroutons().Build();
```

If you're unfamiliar with the Builder Pattern and/or want a more in-depth explanation, you can read [my previous post on the Builder Pattern](https://ilyana.dev/blog/2020-07-21-builder-pattern/).

## Static Builder with Extension Methods

A similar result can be achieved by implementing a static "builder" with extension methods. The only real reason this builder is static is that extension methods need to be static. This implementation is not technically an implementation of the Builder Pattern, but it does almost exactly the same thing.

*Extension methods are methods that use the `this` keyword in their parameters and can be called on a class that is not the class in which they are defined. Odds are that even if you've never heard of them, you've used extension methods before without even knowing it. Some common built-in extension methods in C# are included in `System.Linq`, for example.*

```csharp
public static class SaladBuilderWithExtensionMethods()
{
    public static Salad BuildDefaultSalad()
    {
        return new Salad();
    }

    public static Salad WithLettuce(this Salad salad, Lettuce lettuce)
    {
        salad.Lettuce = lettuce;
        return salad;
    }

    public static Salad WithDressing(this Salad salad, Dressing dressing)
    {
        salad.Dressing = dressing;
        return salad;
    }

    public static Salad WithTomatoes(this Salad salad)
    {
        salad.Tomatoes = true;
        return salad;
    }

    public static Salad WithCroutons(this Salad salad)
    {
        salad.Croutons = true;
        return salad;
    }
}
```

To get a `Salad` with certain properties with this implementation, you would call:

```csharp
var salad = SaladBuilderWithExtensionMethods.BuildDefaultSalad().WithLettuce(iceberg).WithDressing(italian).WithCroutons();
```

## Conclusion

The main difference in how these implementations are used is that the `Build`/`BuildDefaultSalad` method is called first in the second implementation, rather than last, as in the typical Builder Pattern.

Otherwise there's not a ton of difference, although the second implementation is perhaps a bit more flexible than the first, since the `SaladBuilder`'s methods all return `SaladBuilder`s, and all I want is a salad. I don't want to eat a `SaladBuilder`! The `SaladBuilderWithExtensionMethods` gives me `Salad`s, not `SaladBuilderWithExtensionMethods`, so it is probably a more flexible implementation.

Personally, I like the second implementation; it just makes more sense to me. But as I've only been coding for a few years - and only for a little over a year in C# - I wonder what the drawbacks might be to that implementation and whether there are different applications in which one implementation or the other might be preferred. I'd really love to know what you think, so if you have any thoughts, please comment on this article or submit something through the [Contact page](https://ilyana.dev/contact)!

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
