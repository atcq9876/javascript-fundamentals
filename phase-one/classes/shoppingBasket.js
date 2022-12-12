class ShoppingBasket {

  constructor() {
    this.items = []
  }

  addItem(item) {
    return items.push(item);
  }

  getTotalPrice() {
    return items.map((item) => {
      return item.price;
    })
  }
}

module.exports = ShoppingBasket;