const numbers = ['1381794719', '1173918749817491', 'abfkjsbfskajfbaskjfbakjfbak', '123456']

const checkLength = (number) => {
    if (number.length <= 10) {
        return true
    }
    else {
        return false
    }
}

const filterLongNumbers = numbers.filter(checkLength);
console.log(filterLongNumbers)


module.exports = filterLongNumbers


const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];

const generateMessages = (namesAndDiscounts) => {
    return (`Hi ${namesAndDiscounts.name}! ${namesAndDiscounts.discount}% off our best candies for you today!`);
}

const sentMessages = namesAndDiscounts.map(generateMessages);
console.log(sentMessages)
