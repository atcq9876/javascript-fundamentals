class ShoppingBasket {

  constructor() {
    this.items = [];
  }

  getTotalPrice() {
    let totalPrice = 0
    this.items.forEach((item) => {
      totalPrice += item.getPrice();
    });
    return totalPrice;
  }

  addItem(item) {
    this.items.push(item);
    return 'Item added to basket';
  }

}

module.exports = ShoppingBasket;