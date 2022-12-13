// Code before debugging:

// class ShoppingBasket {
//   constructor() {
//     this.discount = 0;
//   }

//   applyDiscount(discount) {
//     discount = this.discount;
//   }

//   getTotalPrice() {
//     let totalPrice = 0;
//     this.candies.forEach((candy) => {
//       totalPrice += candy.getPrice();
//     });

//     return totalPrice - this.discount;
//   }
// }


// Code after debugging:

class ShoppingBasket {
  constructor() {
    this.candies = [];
    this.discount = 0;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }

  addItem(candy) {
    this.candies.push(candy);
    return 'Item added to basket';
  }
}

class Candy {

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

const candy = new Candy('Mars', 4.99);

const basket = new ShoppingBasket();
console.log(basket.addItem(candy));
console.log(`Before discount, total price = ${basket.getTotalPrice()}`);

basket.applyDiscount(2);
console.log(`After discount, total price: = ${basket.getTotalPrice()}`);