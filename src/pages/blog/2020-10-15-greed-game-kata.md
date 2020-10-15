---
templateKey: blog-post
title: The Greed Game Kata
date: 2020-10-15T17:04:10.000Z
featuredpost: true
featuredimage: /img/greedgame.png
description: The Greed Game Kata involves the calculations of scores based on what numbers are rolled in a set of dice. You may also know this game as Farkle.
tags:
  - software development
  - katas
  - coding
  - greed game
  - rules pattern
  - tdd
---

Having recently learned about the [Rules Pattern](https://ilyana.dev/blog/2020-10-15-rules-pattern/), I found the Greed Kata really useful for solidifying that pattern in my mind. The pattern made sense while I was learning about it, but now I really *get* it.

You can find the instructions for this kata [here](https://github.com/ardalis/kata-catalog/blob/master/katas/Greed.md). You'll find that you can complete this kata in a variety of ways. However, it definitely lends itself to test-driven-development (TDD), as well as the application of the Rules Pattern.

If you'd like to see how I completed this kata, you can look at my code [here](https://github.com/ilyanaDev/KataPractice/tree/master/Greed/2020-10-14).

I used TDD for this kata, to make sure that each piece of functionality I added worked as intended.

I also made sure to implement an `IRule` interface that all my rules inherited from, to make sure I could work with them polymorphically when I went to calculate scores.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
