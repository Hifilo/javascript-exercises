In javascript theres parsefloat(), and theres toFixed().

Can you explain them to me?

`ParseFloat()` is a function that takes a string argument and returns a number. It will parse any string that is passed to it and return a number, even if the string contains other characters.

`ToFixed()` is a method that takes a number and returns a string representation of that number rounded to the number of decimal places specified in the argument. This can be useful when you want to display a number with a set number of decimal places.

How do you chain methods and functions in javascript?

Chaining methods and functions is a way to write code that is more concise and easier to read. It is done by calling one method or function on the result of another.

For example, if you wanted to get the first character of a string, you could write:

```js
var firstChar = myString.charAt(0);
```

Or you could write:

```js
var firstChar = myString[0];
```

But you could also write:

```js
var firstChar = myString.charAt(0).toUpperCase();
```

This would get the first character of the string, convert it to uppercase, and store it in the variable firstChar.

What is the difference between == and ===?

The == operator will compare two values and return true if they are equal. The === operator will compare two values and return true if they are equal and of the same type.

For example:

var a = 1;

var b = “1”;

a == b; // returns true

a === b; // returns false

What is the difference between null and undefined?

Null is a value that means nothing.
