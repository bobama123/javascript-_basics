// Assign an array to the constant numbers
const numbers = [1, 2, 3, 4];

const newNumbers = numbers.concat(5); // adds one element and return a new array

// We can access elements with []
console.log(numbers[0]); // 1

console.log(numbers); // [1, 2, 3, 4]

console.log(newNumbers) // [1, 2, 3, 4, 5]

console.log(numbers.length) // 4

console.log(newNumbers.length) // 5

// Loop through the array and execute code for each element
numbers.forEach((number) => {
    console.log(number);
})


const names = ['bob', 'john', 'jack'];

console.log(names.length);

console.log(names[1]);

const newNames = names.concat('lol');
console.log(newNames);




const numbersToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;
numbersToTen.forEach((number) => {
    count += number;
})
console.log(count);



