---
templateKey: blog-post
title: The Interpreter Pattern
date: 2020-08-28T02:04:10.000Z
featuredpost: false
featuredimage: /img/interpreter-pattern.png
description: The Interpreter Pattern strives to define a representation for a language's grammar in order to interpret sentences in that language. This pattern requires the identification of a language and that language's rules, as well as the creation of an interpreter for that language.
tags:
  - software development
  - coding
  - pluralsight
  - design patterns
---

*Head First Design Patterns* by Eric Freeman and Elisabeth Freeman provides a quick overview of the Interpreter Pattern in its appendix.

Pluralsight's [Design Patterns Library](https://app.pluralsight.com/library/courses/patterns-library/table-of-contents) course has a module on the Interpreter Pattern from John Sonmez.

Overview
--

The "language" part of the definition above can be applied to practically anything that functions as a means of communication - spoken languages, programming languages, mathematical symbols, and the list goes on. What these all have in common is known rules (i.e. grammar) for their use. The Interpreter Pattern is used to translate sentences/commands in a given language into comprehensible actions, based on those known rules.

One great example of a real-world implementation of this idea is a barcode, which fulfils all the criteria listed above (language = vertical bars; rules/grammar = organization of vertical bars; interpreter = barcode scanner).

The Interpreter Pattern does *not* have many contexts in which it should be applied. However, in the correct circumstance, this pattern can be very powerful.

But how does this work?
--

Once you have a language (let's stick with the barcode example) and a set of rules, these rules need to be specified (see "BNF Notation" below). Once that is taken care of, it's time to build the interpreter!

The Interpreter Pattern is often used in conjunction with the [Composite Pattern](https://ilyana.dev/blog/2020-08-25-composite-pattern/); essentially each "sentence" that will be plugged into the interpreter consists of terminal expressions (the "leaves" in the Composite Pattern's tree) and nonterminal expressions that are composed of other expressions (the "nodes" in the Composite Pattern's tree).

BNF Notation
--

The rules for the Interpreter Pattern are often defined in BNF notation. This is a syntax used to define the rules of a language when precision is needed. Here is an example of what that notation looks like for describing a postal address in the United States:

```bnf
 <postal-address> ::= <name-part> <street-address> <zip-part>

      <name-part> ::= <personal-part> <last-name> <opt-suffix-part> <EOL> | <personal-part> <name-part>

  <personal-part> ::= <initial> "." | <first-name>

 <street-address> ::= <house-num> <street-name> <opt-apt-num> <EOL>

       <zip-part> ::= <town-name> "," <state-code> <ZIP-code> <EOL>

<opt-suffix-part> ::= "Sr." | "Jr." | <roman-numeral> | ""
    <opt-apt-num> ::= <apt-num> | ""
```

Source: [Wikipedia](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form). This article has a pretty informative and well-explained overview of BNF notation if you're looking to learn more.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
