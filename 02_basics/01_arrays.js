const myArray = [10, 20, 30, 40, 50];
    
console.log("Original array:", myArray);

// Accessing elements
console.log("First element:", myArray[0]);
console.log("Third element:", myArray[2]);

// Modifying elements
myArray[1] = 25;
console.log("Modified array:", myArray);

// Adding elements
myArray.push(6);
console.log("Array after adding an element:", myArray);

// Removing elements
const removedElement = myArray.pop();
console.log("Removed element:", removedElement);
console.log("Array after removing an element:", myArray);

// Array length
console.log("Array length:", myArray.length);

// Iterating over the array

console.log("Iterating over the array:");
for (let i = 0; i < myArray.length; i++) {
    console.log(`Element at index ${i}:`, myArray[i]);
}

// Using forEach method
console.log("Using forEach method:");
myArray.forEach((element, index) => {
    console.log(`Element at index ${index}:`, element);
});
// using shift and unshift

myArray.unshift(5);
console.log(myArray);

myArray.shift();
console.log(myArray)

// using splice to remove and add elements
myArray.splice(2, 1, 35); // removes 1 element at index 2 and adds 35
console.log(myArray);

// using slice to create a sub-array
const subArray = myArray.slice(1, 4); // elements from index 1 to 3
console.log("Sub-array:", subArray);

// using indexOf to find the index of an element
const index = myArray.indexOf(40);
console.log("Index of element 40:", index);

// using includes to check if an element exists
const exists = myArray.includes(50);
console.log("Does element 50 exist in the array?", exists);

// using join to create a string from the array
const arrayString = myArray.join(", ");
console.log("Array as a string:", arrayString);
