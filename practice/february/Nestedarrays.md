#### NESTED ARRAYS

An array is an ordered collection of values: each value is called an element, and each element has a numeric position in the array, known as its index.

An element inside an array can be of any type, and different elements of the same array can be of different types : string, boolean, even objects or other arrays. This means that it’s possible to create an array that has a string in the first position, a number in the second, an object in the third, and so on.

Arrays in Javascript are zero-based, which means that the index of the first element is 0. This is very important, because it means that there always will be an offset of one unit: the first element has an index of 0, the second element has an index of 1, and so on.

#### Declare an array

Arrays can be very useful since you can store as many items of data in an array as you want (within the limits of the language, which is 2^(32) elements).

So how do you create an array ? You need to declare a variable with the var keyword, but the syntax to define the values of the array is very specific : you have to tell Javascript that you want it to be an array.

To do so, you have two choices : the array literal [] or the new keyword.

Short syntax : with the array literal notation []
The array literal notation is simply a comma-separated list of array elements within square brackets. 

The array literal notation is simply a comma-separated list of array elements within square brackets.
```javascript
var myArray = [ "Jack", "Sawyer", "John", "Desmond" ];
```

The content of the array is defined between the opening and the closing brackets, and each value is separated by a comma.

Values are introduced in the same way as simple variables, meaning for example that strings must be declared between quotation marks.

To define a new empty array you just have to use empty brackets :
```javascript
var myArray = [];
```

#### Long syntax : with the Array() constructor

```javascript
var lostArray = new Array("Jack", "Sawyer", "John", "Desmond" );
var twinPeaksArray = new Array("Laura", 2, ["Bob", "Leland", "Dale"]);
```

The new keyword of this syntax asks Javascript to define a new Array, whose items are passed as parameters.

If you know in advance how many elements the array will contain, you can pass the count as a parameter to the constructor, and the array will automatically be created with that number of slots for elements (each element will be initialized with the value undefined) :

var myArray = new Array(80);
This will create an empty array with 80 slots initialized with the value undefined.

To define a new empty array with no particular number of items you can just initialize a new array with no parameters :

var myArray = new Array(80);
This will create an empty array with 80 slots initialized with the value undefined.

To define a new empty array with no particular number of items you can just initialize a new array with no parameters :

```javascript
var myArray = new Array();
```

#### Access elements of an array