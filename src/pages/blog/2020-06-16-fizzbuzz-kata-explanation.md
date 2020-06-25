---
templateKey: blog-post
title: The FizzBuzz Kata Step-By-Step
date: 2020-06-16T17:04:10.000Z
featuredpost: false
featuredimage: /img/fizzbuzz.png
tags:
  - software development
  - katas
  - coding
  - fizzbuzz
---

Here are my notes on how to do the FizzBuzz code kata, which is great for test-driven development, starting from just creating the file in the Command Prompt. To get the most out of this, do steps 1-4, do the rest of the kata on your own, then use these notes if you get stuck.

1. Open Terminal in VS Code, navigate to desired folder.
   1. use "cd.." to navigate up a directory, use  "cd " + folder name to navigate down a directory.
   2. You'll need VS Code installed, if you don't already. Download [here](https://code.visualstudio.com/).
2. Use "dotnet new xunit" to create your project.
3. Use "code ." to open that project in VS Code.
   1. You'll now have a project with a sample test already set up, and you're now ready to go!
4. Go to [Ardalis's FizzBuzz Kata Instructions](https://github.com/ardalis/kata-catalog/blob/master/katas/FizzBuzz.md)
5. Create "public class FizzBuzz" under the same namespace as the tests
   1. Don't forget to put curly braces in the weird way c# does (both on their own line)
6. FizzBuzz class contains only method `public String fizzBuzz(int input)`, which contains the line `return "";` 
7. Assemble test: 3 A's - Arrange, Act Assert
   1. Arrange - `int input = 1;` and `var f = new FizzBuzz();`
   2. Act - `String output = f.fizzBuzz(input);`
   3. Assert - `Assert.Equal("1", output);`
   4. Your test should read as follows:
   
   ```
        public class UnitTest1
        {
            [Fact]
            public void Gives1Given1()
            {
                int input = 1;
                var f = new FizzBuzz();
                String output = f.fizzBuzz(input);
                Assert.Equal("1", output);
            }
        }
    ```

8. Use "dotnet test" in Command Prompt to check if your test fails - it should!
   1. You can set up "dotnet watch test" instead to run your test(s) each time you save your code.
   2. Slightly unrelated note - use three of this character ` bracketing code in Discord to format it
9.  If your test fails, good for you! Now, tell your fizzBuzz method to return "1"
10. Now save your code, and your test should pass.
11. Now you need to see if fizzBuzz returns "2" given 2. Copy your first test(Ctrl + C, + V, +V), rename it, and replace relevant numbers (1 -> 2). 
12. Save your code, and you should have 1 passing test and one failing test
13. Change your fizzBuzz method to `return input.ToString();`. Save, and both tests should pass.
14. Now we repeat steps (7-10) with 3, except 3 should return "Fizz"
15. Now we look back at our tests for inputs of 1 and 2 and realize they are quite repetitive. How do we fix this? A theory! A theory allows us to convert this code:

        [Fact]
        public void Gives1Given1()
        {
            // Arrange
            int input = 1;
            var f = new FizzBuzz();

            // Act
            String output = f.fizzBuzz(input);

            // Assert
            Assert.Equal("1", output);

        }

        [Fact]
        public void Gives2Given2()
        {
            // Arrange
            int input = 2;
            var f = new FizzBuzz();

            // Act
            String output = f.fizzBuzz(input);

            // Assert
            Assert.Equal("2", output);

        }

    To this much simpler code:

        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        public void GivesInputGivenInput(int input)
        {
            
            var f = new FizzBuzz();
            String output = f.fizzBuzz(input);
            Assert.Equal(input.ToString(), output);
        }

16. Now we just have to modify our `fizzBuzz` method to return "Buzz" for multiples of 5 and "FizzBuzz" for multiples of 3 and 5. Your final kata code will probably look something like this:

```
using System;
using Xunit;

namespace _2020_06_03
{
    public class FizzBuzz
    {
        public String fizzBuzz(int input) 
        {
            if (input % 3 == 0 && input % 5 == 0)
            {
                return "FizzBuzz";
            }
            if (input % 3 == 0) 
            {
                return "Fizz";
            }
            if (input % 5 == 0) 
            {
                return "Buzz";
            }
            return input.ToString();
        }
    }
    
    public class UnitTest1
    {
        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        public void GivesInputGivenInput(int input)
        {
            
            var f = new FizzBuzz();
            String output = f.fizzBuzz(input);
            Assert.Equal(input.ToString(), output);
        }
        
        [Theory]
        [InlineData(3)]
        [InlineData(6)]
        public void GivesFizzGivenMultipleOf3(int input)
        {
            // Arrange
            var f = new FizzBuzz();

            // Act
            String output = f.fizzBuzz(input);

            // Assert
            Assert.Equal("Fizz", output);

        }

        [Theory]
        [InlineData(5)]
        [InlineData(10)]
        public void GivesBuzzGivenMultipleOf5(int input)
        {
            // Arrange
            var f = new FizzBuzz();

            // Act
            String output = f.fizzBuzz(input);

            // Assert
            Assert.Equal("Buzz", output);

        }

        [Theory]
        [InlineData(15)]
        [InlineData(30)]
        public void GivesFizzBuzzGivenMultipleOf3and5(int input)
        {
            // Arrange
            var f = new FizzBuzz();

            // Act
            String output = f.fizzBuzz(input);

            // Assert
            Assert.Equal("FizzBuzz", output);

        }
    }
}
```

 See my final code in GitHub [here](https://github.com/ilyanaDev/KataPractice/blob/master/FizzBuzz/2020-06-03/UnitTest1.cs).

Helpful Hints

* If your test is failing and should not, your test might be broken. Be sure that you changed all the necessary numbers when copying and pasting tests, for example.
* It's important to make sure your tests fail before trying to make them succeed. This helps you ensure that your code actually works, and there isn't something wrong with the test generating a false positive.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
