const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
];


const searchCandies = (search, maxPrice) => {
    let newArray = [];
    const lowercaseSearch = search.toLowerCase();
    for (let candy of candies) {
        if (candy.name.toLowerCase().startsWith(lowercaseSearch) && candy.price < maxPrice) {
            newArray.push(candy.name);
        }
    }
    return newArray;
}

console.log(searchCandies('Ma', 2))
console.log(searchCandies('Ma', 10))
console.log(searchCandies('S', 10))
console.log(searchCandies('S', 4))


module.exports = searchCandies


// The below function takes the following two arguments: 
// a search string and a maximum price — and returns only the names of 
// candies matching these criteria:

// the candy name starts by the search string
// the candy price is less than the maximum price

const searchCandies = (search, maxPrice) => {
    const lowercaseSearch = search.toLowerCase();
    return candies.filter(candy => candy.name.toLowerCase().startsWith(lowercaseSearch) && candy.price < maxPrice).map(candy => candy.name);
}

const searchCandies = (search, maxPrice) => {
// takes two parameters: search (a string representing the search term) 
// and maxPrice (a number representing the maximum price).
    const lowercaseSearch = search.toLowerCase();
    // new constant variable that converts the search parameter
    // to lowercase using the toLowerCase() method. 
    // This ensures that the search is case-insensitive.
    return candies.filter(
    // The candies array uses the filter method to create a new array containing only the candy objects that meet certain conditions.
    // The filter method takes a callback function that is executed for each element in the array.
    candy => candy.name.toLowerCase().startsWith(lowercaseSearch)
    // The callback function candy => receives each candy object as an argument.
    // candy.name.toLowerCase() converts the name property of the candy object to lowercase.
    // .startsWith(lowercaseSearch) checks if the lowercase version of the candy.name starts with the lowercaseSearch value.
    && candy.price < maxPrice)
    // The && operator combines the condition about with the candy.price < maxPrice condition, which checks if the 
    // price property of the candy object is less than the maxPrice value.
    // The candy object will be included in the filtered array if both conditions are met.
    .map(candy => candy.name);
    // The map method creates a new array with the same length as the filtered array,
    // but with each element transformed according to the provided callback function.
    // The callback function candy => candy.name takes each candy object from the filtered array and returns its name property.
    // So, the resulting array will contain only the names of the candies that passed the filter conditions.
};

module.exports = searchCandies;
