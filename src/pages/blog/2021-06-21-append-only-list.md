---
templateKey: blog-post
title: Creating an Append-Only List Wrapper in C#
date: 2021-06-21T18:05:10.000Z
featuredpost: true
featuredimage: /img/append-only-list.png
description: Sometimes, you need a list, but you don't want people messing with the things you've added once they're added.
tags:
  - software development
  - coding
  - testing
---

I was working on a project recently where I needed exactly this functionality. Towards that end, I created a `AppendOnlyStringList` wrapper class. There are other ways I could have done this (and if you have other ideas on how to implement this, let me know in the chat below!), but as I'm comfortable with using Lists I decided to take the following approach:

My `AppendOnlyStringList` has a `private List<string> _messages`, which can be added to using the public `Append(string message)` method:

```csharp
public void Append(string message)
{
  _messages.Add(message);
}
```

`AppendOnlyStringList` also needed to implement `IEnumerable<string>` in order for things to "just work" so I could pass around and test my class just as I would if using a `List<string>`. The implementation of `IEnumerable` required two methods, which both used `_messages` to implement them.

The full class ended up looking like this:

```csharp
public class AppendOnlyStringList : IEnumerable<string>
{
  private List<string> _messages = new();

  public IEnumerator<string> GetEnumerator()
  {
    return _messages.GetEnumerator();
  }

  public void Append(string message)
  {
    _messages.Add(message);
  }

  IEnumerator IEnumerable.GetEnumerator()
  {
    return _messages.GetEnumerator();
  }
}
```

As you can see, this was very easy to implement, as all the methods just used the `List<string>` functionality.

For good measure, because [testing is important](https://ardalis.com/what-are-you-working-on-what-test-are-you-trying-to-make-pass/), I added a quick test to make sure my class is doing what it's supposed to do and works as expected:

```csharp
[Fact]
public void AppendsStringsToList()
{
  var list = new AppendOnlyStringList();
  var testString = "I am a test string";
  var anotherTestString = "Look! I'm another test string!";
  var oneMoreTestString = "Wow, this is probably overkill, but no matter!";

  list.Append(testString);
  list.Append(anotherTestString);
  list.Append(oneMoreTestString);

  Assert.Contains(testString, list);
  Assert.Contains(anotherTestString, list);
  Assert.Contains(oneMoreTestString, list);
}
```

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
