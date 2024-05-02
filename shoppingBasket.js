const Candy = require('./candy.js')


class ShoppingBasket {

    constructor() {
        this.basket = [];
    }

    addItem(candy) {
        this.basket.push(candy);
    }

    getTotalPrice() {
        let totalPrice = 0
        for (let i = 0; i < this.basket.length; i++) {
            console.log(i + " iteration");
            console.log(this.basket[i]);
            totalPrice += this.basket[i].getPrice();
            console.log(totalPrice);
        }
        return totalPrice;
    }
}

const candy1 = new Candy('Mars', 4.99)
const basket = new ShoppingBasket();

basket.addItem(candy1);
console.log(basket.getTotalPrice());


basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

console.log(basket.getTotalPrice());



module.exports = ShoppingBasket


// ANOTHER METHOD:

// const Candy = require('./candy.js')


// class ShoppingBasket {

//     constructor() {
//         this.totalPrice = 0;
//         this.basket = [];
//     }

//     addItem(candy) {
//         this.basket.push(candy);
//         this.totalPrice += candy.getPrice();
//     }

//     getTotalPrice() {
//         return this.totalPrice;
//     }
// }

// const candy1 = new Candy('Mars', 4.99)
// const basket = new ShoppingBasket();

// basket.addItem(candy1);

// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));

// console.log(basket.getTotalPrice());