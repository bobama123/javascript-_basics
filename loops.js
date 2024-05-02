for (let i = 1 ; i <= 20 ; i++) {
    if (i%2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}


// refactored with a function
const getParity = (number) => {
    if (number % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

for (let i = 1 ; i <= 20 ; i++) {
    const parity = getParity(i);
    console.log(`${i} is ${parity}`);
}