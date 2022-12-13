// There are three types of variables in JavaScript: var, let, and const.

// However, we should avoid using var and use let and const instead.

// var is function scoped, let and const are block scoped. This means that var is available throughout the function, while let and const are only available within the block they are defined in. A block is defined by curly braces, such as an if statement or a for loop.

// Basic data types in JavaScript include: string, number, boolean, null, undefined, and symbol, but I will not dive into those in this refresh.

// ARRAYS

// Arrays are a special type of object in JavaScript. They are used to store multiple values in a single variable. Arrays are zero-indexed, meaning that the first element in an array is at index 0.

// To create an array, you can use square brackets, and separate each element with a comma.

// To get the length of an array, you can use the .length property.

let myArray = [1, 2, 3, 4, 5]
console.log(myArray.length) // 5

// They also can store different data types.

myArray = [1, "two", true, null, undefined]
console.log(myArray[2]) // true

// SPLIT function

// The split function is a string method that splits a string into an array of substrings, and returns the new array.

let names = "John, Mary, Bob, Jane"
let nameArray = names.split(", ")
console.log(nameArray) // ["John", "Mary", "Bob", "Jane"]

// Even though an array can be declared as const, the elements within the array can be changed. This is because the array is an object, and objects are mutable. The const keyword only prevents the array from being reassigned to a different array or data type.

// FILL function

// The fill function is an array method that fills all the elements of an array from a start index to an end index with a static value. The end index is not included.

myArray = [1, 2, 3, 4, 5]
myArray.fill(0, 1, 3)
console.log(myArray) // [1, 0, 0, 4, 5]

// CONCAT function

// The concat function is an array method that is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = array1.concat(array2)
console.log(array3) // [1, 2, 3, 4, 5, 6]

// indexOf function

// The indexOf function is an array method that returns the first index at which a given element can be found in the array, or -1 if it is not present.

myArray = [1, 2, 3, 4, 5]
console.log(myArray.indexOf(3)) // 2
console.log(myArray.indexOf(6)) // -1

// lastIndexOf function

// The lastIndexOf function is an array method that returns the last index at which a given element can be found in the array, or -1 if it is not present.

myArray = [1, 2, 3, 4, 5, 3]
console.log(myArray.lastIndexOf(3)) // 5

// INCLUDES function

// The includes function is an array method that determines whether an array includes a certain value among its entries, returning true or false as appropriate.

myArray = [1, 2, 3, 4, 5]
console.log(myArray.includes(3)) // true

// JOIN function

// The join function is an array method that joins all elements of an array into a string.

myArray = [1, 2, 3, 4, 5]
console.log(myArray.join(" ")) // "1 2 3 4 5"
console.log(myArray.join(" and ")) // "1 and 2 and 3 and 4 and 5"

// SLICE function

// The slice function is an array method that returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

myArray = [1, 2, 3, 4, 5]
let newArray = myArray.slice(1, 3)
console.log(newArray) // [2, 3]

// SPLICE function

// The splice function is an array method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

myArray = [1, 2, 3, 4, 5]
myArray.splice(1, 2, 6, 7) 
// 1 is the index to start at, 2 is the number of elements to remove, 6 and 7 are the elements to add instead.
console.log(myArray) // [1, 6, 7, 4, 5]

// PUSH function

// The push function is an array method that adds one or more elements to the end of an array and returns the new length of the array.

myArray = [1, 2, 3, 4, 5]
myArray.push(6)
console.log(myArray) // [1, 2, 3, 4, 5, 6]

// POP function

// The pop function is an array method that removes the last element from an array and returns that element. This method changes the length of the array.

myArray = [1, 2, 3, 4, 5]
myArray.pop()
console.log(myArray) // [1, 2, 3, 4]

// SHIFT function

// The shift function is an array method that removes the first element from an array and returns that element. This method changes the length of the array.

myArray = [1, 2, 3, 4, 5]
myArray.shift()
console.log(myArray) // [2, 3, 4, 5]

// UNSHIFT function

// The unshift function is an array method that adds one or more elements to the beginning of an array and returns the new length of the array.

myArray = [1, 2, 3, 4, 5]
myArray.unshift(0)
console.log(myArray) // [0, 1, 2, 3, 4, 5]

// REVERSE function

// The reverse function is an array method that reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

myArray = [1, 2, 3, 4, 5]
myArray.reverse()
console.log(myArray) // [5, 4, 3, 2, 1]

// SORT function

// The sort function is an array method that sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

myArray = [5, 4, 3, 2, 1]
myArray.sort()
console.log(myArray) // [1, 2, 3, 4, 5]

// SORT function with a compare function

// The sort function can also take a compare function as a parameter. The compare function should return a negative, zero, or positive value, depending on the arguments.

myArray = [5, 4, 3, 2, 1]
myArray.sort((a, b) => a - b) // ascending
console.log(myArray) // [1, 2, 3, 4, 5]

// EXERCISES

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// Remove the punctuation from the text

let text_without_punctuation = text.replace(/[.,]/g,"")
console.log(text_without_punctuation) // I love teaching and empowering people I teach HTML CSS JS React Python

let words = text_without_punctuation.split(" ")
console.log(words) // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

console.log(words.join(" ")) // I love teaching and empowering people I teach HTML CSS JS React Python

// forEach and for of loop

// forEach loop

const numbers = [1, 2, 3, 4, 5]

// Takes a callback function as a parameter

numbers.forEach((number, index) => {
  console.log(number, index)
})

// for of loop

for (const number of numbers) {
    console.log(number)
}

// If we don't need the index, we can use the for of loop

// for in loop

// The for in loop is used to loop through the properties of an object.

const person = {
    name: "John",
    age: 25,
    country: "USA"
}

for (const property in person) {
    console.log(property)
}

// name
// age
// country

// OBJECTS

// Objects are a collection of properties. A property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

// Objects are created using curly braces {}.

const joe = {
    name: "John",
    surname: "Doe",
    age: 25,
    country: "USA",
    getFullName: function() {
        return this.name + " " + this.surname
    }
}   

console.log(joe.name) // John
console.log(joe['surname']) // Doe
console.log(joe.getFullName()) // John Doe

// OBJECTS METHODS

// Object.keys() function

// The Object.keys() function returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

console.log(Object.keys(joe)) // ["name", "surname", "age", "country", "getFullName"]

// Object.values() function

// The Object.values() function returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

console.log(Object.values(joe)) // ["John", "Doe", 25, "USA", ƒ]

for (const property in joe) {
    console.log(joe[property])
}

// Object.entries() function

// The Object.entries() function returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

console.log(Object.entries(joe)) // [["name", "John"], ["surname", "Doe"], ["age", 25], ["country", "USA"], ["getFullName", ƒ]]

// Object.hasOwnProperty() function

// The Object.hasOwnProperty() function returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

console.log(joe.hasOwnProperty('name')) // true

// Object.assign() function

// The Object.assign() function copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

const person1 = {
    name: "John",
    surname: "Doe",
    age: 25,
    country: "USA"
}

const person2 = Object.assign({ country: "Canada", phone_number: "12345" }, person1)

console.log(person2) // {country: "USA", phone_number: "12345", name: "John", surname: "Doe", age: 25}


// FUNCTIONS

// To pass an unlimited number of parameters to a function, we can use the rest parameter syntax.

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0)
}

// OR we can use the arguments object

function sumAll() {
    let sum = 0
    for (const number of arguments) {
        sum += number
    }
    return sum
}

console.log(sum(1, 2, 3, 4, 5)) // 15
console.log(sumAll(1, 2, 3, 4, 5)) // 15

// Self-invoking functions

// A self-invoking function is a function that is invoked immediately after it is created.

;(function() {
    console.log("Hello")
})()

