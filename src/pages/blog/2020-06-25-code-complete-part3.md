---
templateKey: blog-post
title: Code Complete Part 3 Notes
date: 2020-06-25T15:04:10.000Z
featuredpost: true
featuredimage: /img/code-complete-part3.png
description: Code Complete by Steve McConnell is a well-written explanation of themes in software construction.
tags:
  - codeComplete
  - software development
  - coding
  - books
---

I'm working my way through the second edition of *Code Complete* by Steve McConnell. Here are my notes from **Part 3: Variables**.

Part 3 includes chapters 10-13: General Issues in Using Variables, The Power of Variable Names, Fundamental Data Types, and Unusual Data Types.

10\. General Issues in Using Variables
--

* Implicit declarations - some languages let you use variables without explicitly declaring them
  * This can be pretty dangerous as a programmer because it makes it easy to get confused
  * Languages without implicit declarations require you to make multiple mistakes and make it easier to be careful with data
  * How to reduce risk of error in languages with implicit declarations:
    * Turn off implicit declarations if your compiler allows it
    * Declare all variables
    * Use naming conventions
    * Check variable names
* Uninitialized or improperly initialized variables inevitably cause problems. How to avoid them?
  * Initialize each variable as you declare it
  * If your language doesn't allow you to initialize variables as they're declared, initialize (and declare and define) each variable close to its first use
  * Use `final` or `const` when possible for variables whose values should not change after initialization
  * Pay special attention to counters and accumulators and be sure to reset these when necessary
  * Initialize a class's member data in its constructor
  * Check if a variable will ever need to be reinitialized (such as if it is in a loop or is called several times)
  * Initialize named constants once at the beginning, initialize variables with executable code close to where they're used
  * If your compiler allows it, set it to automatically initialize variables
    * *Document this well*, because if you change environments, this will lead to errors that can be hard to diagnose otherwise
  * Take advantage of your compiler's warning messages
  * Check all input parameters for validity
  * Use a memory-access checker to check for bad pointers
  * Initialize working memory at the beginning of your program
* Scope/visibility - how extensively a variable is known and can be used in a program
  * its "celebrity status"
  * You should limit a variable's span (how many lines between mentions of a variable) in order to improve readability
  * Live time = distance from first mention to last mention of a variable; this should also be minimized for readability and error reduction
  * Scope should be minimized as much as possible
    * Initialize variables in a loop right before the loop, not at the beginning of the routine containing the loop
    * Don't assign a value to a variable until just before the value is used
    * Group related statements
    * Break groups of related statements into separate routines
    * Begin with the most restricted visibility and expand the variable's scope only if necessary
      * keep variables as local as possible
    * "The more information you can hide, the less you have to keep in mind at any one time"
* Persistence - how long a piece of data "lives"
  * stay aware of your variables' persistences and don't assume a variable has longer persistence than it does
* Binding time - when a variable and its value are bound together
  * For flexibility, use the latest binding time possible
    * Instead of coding a variable directly to its value, use a named constant
    * Flexibility is great - to a point; use as much flexibility as your program needs, but if you are too flexible you'll increase complexity
  * Here are some possible binding times:
    * Coding time ("magic numbers" in your code)
    * Compile time (named constant)
    * Load time (read value from external source)
    * Object instantiation time (like reading a value whenever a window is created)
    * Just in time (like reading a value whenever the window is drawn)
* 3 main types of data:
  * Sequential data - clusters of data in a certain order
  * Selective data - a collection of data from which only one piece is used at a given time; controlled by `if` or `case` statements
  * Iterative data - the same type of data repeated several times; controlled by `for`, `repeat`, and `while` structures
* Each variable should be used for exactly one purpose
  * Don't reuse unhelpful variable names like `x` and `temp` because that implies a relationship that doesn't actually exist
  * Avoid variables with hidden meanings ("hybrid coupling")
    * e.g. if `pageCount` means the number of pages *except* if it is negative, and then it means there's an error. Variables should mean what their name says they mean, and nothing else
  * Make sure all declared variables are used
    * not using a variable at all is almost as bad as using it for multiple purposes

11\. The Power of Variable Names
--

* "You can't give a variable name the way you give a dog a name - because it's cute or it has a good sound. Unlike the dog and its name, which are different entities, a variable and a variable's name are essentially the same thing."
* A good name for a variable fully and completely describes what the variable represents
  * Use clear names that *say* what the variable is in clear, precise language
* Avoid names that describe *how* a problem is solved
  * Instead use names that describe *what* the problem is ("computerish" variable names)
  * `printerReady` vs `bitFlag` or `sum` vs `calcVal`
* Names should be as long as they need to be for clarity, but they shoudn't just be camelcase sentences
* Variables with smaller scope can usually get away with shorter names
  * such as `i` in a `for` loop
* Partition the global namespace to avoid some of the issues with global variables
* When working with variables containing values like sums, totals, averages, etc. you should put those qualifiers at the end of a variable name so the more descriptive part is read first
  * `revenueTotal` > `totalRevenue`
* Loop index variables are conventionally named `i`, `j`, and `k`
  * If your loop is longer than a few lines, you should give these index variables better names to avoid confusion
* Status variables should never just be named `flag`
  * Instead, describe the precise status you're testing
* Temporary variables often lead to errors when programmers give them lazy names
  * Technically most variables in your program are temporary - give them names that describe what they are, just as you'd do with any variable
* Boolean variable names should imply true or false
  * You can use "is" at the start of your variable name to imply a question, which helps you determine if you're using a helpful variable name
  * `done` indicates whether something is done; starts false
  * `error` indicates whether an error has occurred; starts false
  * `found` indicates whether a value has been found; starts false
  * `success` or `ok` indicates whether an action was successful
    * try to replace this with a more descriptive name indicating *what*, exactly, success means
  * don't use "not" in your boolean names because this leads to double negatives in if statements and such and causes readability issues
* For enumerated types, you should use a prefix for all members of the group for clarity
  * Unless your language automatically causes this to happen, in which case adding it manually leads to redundancy
* Constants should be named for the abstract concept they refer to, not the value they represent
* Conventions are really great for purposes of consistency, readability, and compensating for weaknesses within certain languages
  * "... any convention is better than no convention. The convention may be arbitrary. The power of naming conventions... [comes from] the fact that a convention exists."
  * You should use naming conventions whenever more than one person (including your future self) will be reading a project
  * Conventions can have different levels of formality
* Guidelines for informal language-independent conventions
  * Differentiate between variable names and routine names
  * Differentiate between classes and objects
  * Identify global variables
  * Identify member variables
  * Identify type definitions
  * Identify named constants
  * Identify elements of enumerated types
  * Identify input-only parameters (function inputs that shouldn't be altered) in languages that don't enforce them
  * Format names to increase readability (usually using either camelcase or underscores)
* Follow the naming conventions of the language you're using
* In a mixed-language environment, use universal conventions for the whole project (even if these go against some conventions for a given language in the project)
* Standardizing prefixes is very helpful and allow for more compact variable names
  * The Hungarian naming convention is the best-known scheme for this, though it isn't used much anymore
  * User-Defined Type (UDT) abbreviations define the data type of the object or variable being named
  * Semantic prefixes describe how the variable or object is used
  * When using standardized prefixes, no matter how descriptive the prefix, make sure it's actually prefixing something
    * some programmers just name variables with descriptive prefixes, which reduces readability
* Older languages mandated short variable names, but that is no longer a constraint, so variable names should not be arbitrarily shortened at the cost of clarity
* Abbreviation guidelines (don't use all at once)
  * use standard abbreviations
  * remove nonleading vowels
  * remove articles
  * use the first letter or first few letters of each word
  * truncate consistently after first n letters of word
  * keep first and last letters of each word
  * use every significant word in the name
  * remove useless suffixes
  * keep the most noticeable sound in each syllable
  * don't change the meaning of the variable
  * don't use phonetic abbreviations (like personalized licence plates - e.g. TRMN8R)
  * don't just remove one character from a word - the extra work of typing one character is justified by the increased readability
  * abbreviate consistently
  * create names you can pronounce - can you read your code to someone on the phone?
  * avoid combinations resulting in misreading or mispronounciation
    * end of B should be `ENDB`, not `BEND`
  * use a thesaurus to resolve naming collisions
  * avoid homonyms
  * avoid numerals in names - if the numerals really matter, use an array
  * avoid misspelled words in names
  * avoid words commonly misspelled in English
  * don't differentiate variable names solely by capitalization
  * avoid multiple natural languages
    * including variations of English - "color" vs. "colour"
  * avoid the names of standard types, variables, and routines
  * don't use names totally unrelated to what the variables represent
  * avoid names with hard-to-read characters - and **NEVER** differentiate names solely with these characters:
    * "l" "1" "I"
    * "." ","
    * ":" ";"
    * "S" "5"
    * "G" "6"
    * "2" "Z"

12\. Fundamental Data Types
--

* Fundamental data types are the building blocks of other data types
  * Numbers - integers, floating-point numbers, etc.
  * Strings and characters
  * Booleans
  * Enumerated types
  * Named constants
  * Arrays
* How to avoid errors with numbers:
  * Avoid "magic numbers" - literal numbers in your code with no explanation of where they've come from (i.e. `3.1415` instead of a variable `pi`)
    * this enhances readability and diminishes errors when a value changes
  * Use hard-coded 0s and 1s if necessary - this is the exception to the "magic numbers" rule
    * 0s and 1s are useful for incrementing and decrementing and initializing loops
  * Anticipate divide-by-zero errors
  * Make type conversions obvious
  * Avoid mixed-type comparisons
  * Heed your compiler's warnings
* When working with integers:
  * Check for integer division
  * Check for integer overflow
  * Check for overflow in intermediate results
* When working with floating-point numbers:
  * Avoid additions and subtractions on numbers that have greatly different magnitudes
  * Avoid equality comparisons
    * Test to within an acceptable range instead
  * Anticipate rounding errors
  * Check language and library support for specific data points (e.g. `Currency` in Visual Basic)
* When working with characters and strings:
  * Avoid magic characters and strings - use named constants or global variables instead
  * Watch for off-by-one errors
  * Know how your language and environment support Unicode
  * Decide on an internationalization/localization strategy early in the lifetime of a program
  * If you know you only need to support a single alphabetic language, consider using an ISO 8859 character set (instead of Unicode)
  * If you need to support multiple languages, use Unicode
  * Decide on a consistent conversion strategy among string types
  * C - specific string issues to watch for:
    * Be aware of the difference between string pointers and character arrays
    * Declare C-style strings to have length CONSTANT+1
    * Initialize strings to null to avoid endless strings
    * Use arrays of characters instead of pointers in C
    * Use strncpy() instead of strcpy() to avoid endless strings
* When working with booleans:
  * Use boolean variables to document your program - boolean names should make it really to know exactly what a test is testing for
  * Use boolean variables to simplify complicated tests
  * Create your own boolean type if working in a language without one
* Enumerated types allow each member of a class of objects to be described in English and are used when you know all possible values of a variable
  * Use enumerated types for readability
  * Use enumerated types for reliability
  * Use enumerated types for modifiability
  * Use enumerated types as an alternative to boolean variables
  * Check for invalid values
  * Define the first and last entries of an enumeration for use as loop units
    * in addition to `Country_China`, etc., have `Country_First = 0` and `Country_Last = n`
  * Reserve the first entry in the enumerated type as invalid to catch improperly initialized variables
  * Define precisely how First and Last elements are to be used in the project coding standard and use them consistently
  * Beware of pitfalls of assigning explicit values to elements of an enumeration
  * In a language without enumerated types, you can simulate them with global variables or classes
* When working with named constants:
  * Keep in mind that the value of a named constant cannot be changed once assigned
  * Named constants allow you to parameterize your program so that fixed values (within the program) that might change over time can easily be altered
  * Use named constants in data declarations to improve readability and maintainability
  * Avoid literals, even "safe" ones
  * Simulate named constants with appropriately scoped variables or classes if your language doesn't support named constants
  * Use named constants consistently
* When working with arrays:
  * Make sure that all array indexes are within the bounds of the array
  * Consider using containers (sets, stacks, etc.) instead of arrays, or think of arrays as sequential
  * Check the end points of arrays
  * If an array is multidimensional, make sure its subscripts are used in the correct order
  * Watch out for index cross-talk - when you switch loop indexes in a nested loop
    * You can use meaningful index names to help prevent this
  * In C, use the ARRAY_LENGTH() macro to work with arrays
* Some languages allow programmers to create their own types (aka type aliasing)
  * Take advantage of this when available
  * It's very useful for information hiding and flexibility
  * Create types with functionally oriented names - refer to the real-world problem, rather than the computer solution
  * Avoid predefined types
  * Don't redefine a predefined type (aka don't reuse the name of a predefined type in your user-defined type)
  * Define substitute types for portability
  * Consider creating a class rather than using a typedef

13\. Unusual Data Types

* Structure = data built up from other types
  * Use structures to clarify data relationships
  * Use structures to simplify operations on blocks of data
  * Use structures to simplify parameter lists
  * Use structures to reduce maintenance
* Pointers are very complicated and error-prone
  * Every pointer = location in memory + how to interpret contents of said location
  * You need to interpret the information in that location correctly or you'll get vastly different results
  * A pointer pointing to the wrong place leads to memory corruption, which is very bad
  * Pointer errors are very hard to find, so be very careful writing them in the first place
  * Isolate pointer operations in routines or classes
  * Declare and define pointers at the same time
  * Delete pointers at the same scoping level as they were allocated
  * Check pointers before using them
  * Check the variable referenced by the pointer before using it
  * Use dog-tag fields to check for corrupted memory
  * Add explicit redundancies (alternative to using tags)
  * Use extra pointer variables for clarity
  * Simplify complicated pointer expressions
  * Draw a picture
  * Delete pointers in linked lists in the right order
  * Allocate a reserve parachute of memory
  * Shred your garbage
  * Set pointers to null after deleting or freeing them
  * Check for bad pointers before deleting a variable
  * Keep track of pointer allocations
  * Write cover routines to centralize your strategy to avoiding pointer problems
  * Use a nonpointer technique
  * In C++ pointers and references are easy to confuse
* Global variables are accessible anywhere in a program
  * using global data is somewhat risky
  * global data can be inadvertently changed
  * when global variables are passed to a routine, things get real wonky - aliasing
  * if you're running multiple copies of the same program, all of which contain a global variable, things get wonky
  * global data makes it hard to reuse code
  * sometimes the order of initialization of global variables is not defined, which messes up values
  * global data tends to throw modularity and reduction of complexity out the window
  * Reasons to use global data:
    * Preservation of global values
    * Emulation of named constants
    * Emulation of enumerated types
    * Streamlining use of extremely common data
    * Eliminating tramp data - data passed to one routine/class just so that it can be passed to another routine/class
  * Alternatives to global data:
    * Start every variable as local until it becomes clear you need to make it global
    * Distinguish between global and class variables
    * Use access routines - centralization is good!
  * Reducing the risks of global data:
    * Develop a naming convention that makes global variables obvious
    * Create a well-annotated list of all your global variables
    * Don't use global variables to contain intermediate results
    * Don't pretend you're not using global data by putting all your data into a monster object and passing it everywhere
* Access routines
  * Advantages - centralization, information hiding, abstraction
  * How to use access routines:
    * make the data you're accessing static (if you're substituting this approach for a global variable)
    * require all code to go through the access routines for the data
    * don't just throw all your global data into the same barrel - put data in an appropriate class
    * in development, use locking to control access to global variables
    * build a level of abstraction into your access routines
    * keep all accesses to the data at the same level of abstraction

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
