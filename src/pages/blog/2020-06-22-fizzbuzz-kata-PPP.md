---
templateKey: blog-post
title: The FizzBuzz Kata Step-By-Step Using the Pseudocode Programming Process
date: 2020-06-22T17:04:10.000Z
featuredpost: false
featuredimage: /img/fizzbuzzppp.png
description: For my second attempt at the FizzBuzz kata, I used the Pseudocode Programming Process.
tags:
  - software development
  - katas
  - coding
  - fizzbuzz
---

I recently tried the FizzBuzz kata again, this time using the Pseudocode Programming Process [described by Steve McConnell in *Code Complete*](https://ilyana.dev/blog/2020-06-19-code-complete-part2/). [The last time I tried this kata](https://ilyana.dev/blog/2020-06-16-fizzbuzz-kata-explanation/) I used test-driven development instead.

1. Open Terminal in VS Code, navigate to desired folder
2. run `dotnet new xunit` to create project
3. use `code .` to open that project
4. Go to [Ardalis's FizzBuzz Kata Instructions](https://github.com/ardalis/kata-catalog/blob/master/katas/FizzBuzz.md)
5. Create `public class Formatter` under the same namespace as the class `UnitTest1` is declared under
6. Create `public string FizzBuzz(int input)` in `Formatter`
7. Write pseudocode in `FizzBuzz`
   1. See how I did this step [here](https://github.com/ilyanaDev/KataPractice/commit/90fe350cc930bd78663178bae04d1c77c4effd96#diff-0e32d6fa4b1fd6c6b3bcfb86ca9a320c) (note my first line of pseudocode here is unnecessary)
8. Write code fulfilling the kata instructions
   1. Your pseudocode should be thorough enough that this step is fairly mechanical
   2. Leave your pseudocode as comments - it should be thorough and specific enough to serve as documentation (especially in such a simple program)
   3. See how I did this step [here](https://github.com/ilyanaDev/KataPractice/commit/7154e3406d28818172271d2fd695c8a83cfd9910#diff-0e32d6fa4b1fd6c6b3bcfb86ca9a320c)
9. Write and run tests
   1. Use Act, Arrange, Assert
   2. For more in-depth descriptions of writing tests, read [my previous step-by-step of the FizzBuzz kata](https://ilyana.dev/blog/2020-06-16-fizzbuzz-kata-explanation/)
10. Done!
    1. See my final code [here](https://github.com/ilyanaDev/KataPractice/blob/master/FizzBuzz/2020-06-19/UnitTest1.cs)

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
