const sayHello = () => {
    return 'Hello';
};

console.log(sayHello());



const sayHello1 = (name) => {
    return 'Hello ' + name;
};

console.log(sayHello1('Sarah'));



const sayHello2 = (name) => {
    return `Hello ${name}`;
};

console.log(sayHello2('Sarah'));

module.exports = sayHello;