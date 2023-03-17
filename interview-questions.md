# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:
Instead of running functions, OOP instead processes data and behavior by using objects.  It differs from functional programming because it doesn't rely on functions or logic.

Researched answer:
In order to make larger projects more manageable, Object-oriented Programming takes large amounts of code and breaks it down into smaller classes.  The classes directly affect the behavior of the objects and are resuable.  The difference between OOP and Functional Programming lies in the how the two techniques interact with the state of the code.  In Functional Programming, the state stands alone and can't be changed unless the logic calls for a return in the set State.  In Object-oriented Programming, the state, along with code behavior, is contanied within the class.

1. What is the difference between a Float and an Integer in Ruby?

Your answer:
An integer in Ruby is any whole number, for example, 1, 2, or 3.  A float is a number followed by a decimal, for example, 1.0, 2.0, or 3.0.

Researched answer:
An integer in Ruby is any whole number, for example, 1, 2, or 3.  A float is a number followed by a decimal, for example, 1.0, 2.0, or 3.0.  It should be of note that floats yield more accurate returns, since using decimals offers more precise data.

1. Ruby has an implicit return. What does that mean?

Your answer:
Implict return means the last line of code will be returned without the need for a Return statement.

Researched answer:
Implict return means the last line of code will be returned without the need for a Return statement.  This can be of value to developers, making the code short and sweet.  However, it should be noted that without the expressed return, it can cause confusion upon discovery of problems with the return of the last lines of code.

1. What is a block in Ruby?

Your answer:
In Ruby, a block is a method that can be used as an argument.

Researched answer:
In Ruby, a block is a method that can be used as an argument. Defined as Def (define), do (instructions) and end (end of block), a block can contain specific instructions for data and/or behavior. 

1. How do you extract a value in a Ruby hash?

Your answer:
The value can be extracted from a hash in Ruby within brackets ([]).  After inputting the key within those brackets, the value will be extracted.

Researched answer:
The value can be extracted from a hash in Ruby within brackets ([]).  After inputting the key within those brackets, the value will be extracted. An alternative technique is .fetch, (ex. h = { "a" => 100, "b" => 200 }
h.fetch("a") --> 100). 

## Looking Ahead: Terms for Next Week

1. Class Inheritance:
Inheritance allows the inherititance of the characteristics of one class into another class.

2. RSpec:
RSpec (request specification) is a domaine specific language used for testing the behavior of objects in the Ruby programming language. Developers can use RSpec to create specifications or specs that describe the desired output.

3. CRUD:
CREATE - creates new hases, READ - return data in hash, UPDATE - add content to hash, DELETE - delete content in hash

4. Test-driven development:
Software development that focuses on an iterative development cycle where the emphasis is placed on writing test cases before the actual feature or function is written

5. HTTP:
The Hypertext Transfer Protocol is an application protocol for distributed, collaborative, hypermedia information systems that allows users to communicate data on the World Wide Web