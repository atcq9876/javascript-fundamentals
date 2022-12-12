class ShoppingBasket {

  constructor() {
    this.items = [];
  }

  addItem(item) {
    return this.items.push(item);
  }
  
  getTotalPrice() {
    if (this.items.length === 0) {
      return 0;
    } else {
      let totalPrice = 0
      this.items.forEach((item) => {
        totalPrice += item.price
      })
      return totalPrice;
    } 
  }
}

module.exports = ShoppingBasket;

// class Candy {

//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   getName() {
//     return this.name;
//   }

//   getPrice() {
//     return this.price;
//   }
// }


// const candy = new Candy('Mars', 4.99);

// console.log(candy.getName());
// console.log(candy.getPrice());

// const basket = new ShoppingBasket();
// console.log(basket.getTotalPrice());

// basket.addItem(candy);
// console.log(basket.getTotalPrice());

// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));

// console.log(basket.getTotalPrice());