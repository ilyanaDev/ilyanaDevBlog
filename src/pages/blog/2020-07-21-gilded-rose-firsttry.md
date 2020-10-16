---
templateKey: blog-post
title: The Gilded Rose Kata - First Attempt
date: 2020-07-21T05:04:10.000Z
featuredpost: true
featuredimage: /img/gilded-rose-1.png
description: The Gilded Rose kata is an excellent way for anyone to work on their refactoring skills.
tags:
  - software development
  - coding
  - gilded rose
  - katas
  - refactoring
---

The Gilded Rose kata is a great kata for practicing refactoring. At the start of the kata, you are provided with legacy code for the Gilded Rose, a fantasy-style shop full of such items as Aged Brie, Backstage passes, legendary items, and normal items, each of which behaves differently when the `UpdateQuality()` method is called on it. Since the person who wrote the code did not write any unit tests, it is your job to write those tests, refactor `UpdateQuality()`, and then add behavior for a new set of items: Conjured items.

The instructions for the Gilded Rose kata can be found [here](https://github.com/ardalis/kata-catalog/blob/master/katas/Gilded%20Rose.md), and the starting code in a variety of languages can be accessed [here](https://github.com/emilybache/GildedRose-Refactoring-Kata).

This attempt took me almost an hour to complete, and I'm not entirely satisfied with the refactoring I did, but it's a start. Next time I approach this kata, I will definitely make an attempt to have some cleaner refactoring, as well as significantly DRY-er tests. However, as my first real refactoring exercise, I think this went pretty well. If you'd like to view my code, you can find it on [my GitHub](https://github.com/ilyanaDev/KataPractice/tree/master/GildedRose/2020-07-20).

Another great resourse for anyone new to refactoring is Steve Smith's [Refactoring Fundamentals](https://app.pluralsight.com/library/courses/refactoring-fundamentals/table-of-contents) course on Pluralsight. He gives a great overview of common code smells, as well as tips on how to approach the Gilded Rose kata and refactoring in general. You can also find my notes from that course [here](https://ilyana.dev/blog/2020-07-20-refactoring-fundamentals-course/) on my blog.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
