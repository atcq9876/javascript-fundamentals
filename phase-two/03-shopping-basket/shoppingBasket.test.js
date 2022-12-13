const ShoppingBasket = require('./shoppingBasket');

const marsDouble = {
  getName: () => 'Mars',
  getPrice: () => 4.99
};

const skittlesDouble = {
  getName: () => 'Skittles',
  getPrice: () => 3.99
};

describe(ShoppingBasket, () => {
  describe('addItem', () => {
    it('adds an item to the basket and returns a success message', () => {
      let basket = new ShoppingBasket;
      expect(basket.addItem(marsDouble)).toBe('Item added to basket');
    });
  });

  describe('getTotalPrice', () => {
    it('returns the 0 when basket is empty', () => {
      let basket = new ShoppingBasket();
      expect(basket.getTotalPrice()).toBe(0);
    });

    it('returns the correct value when a Mars is added to basket', () => {
      let basket = new ShoppingBasket();
      basket.addItem(marsDouble);
      expect(basket.getTotalPrice()).toBe(4.99);
    });

    it('returns the correct value when a Mars is added to basket', () => {
      let basket = new ShoppingBasket();
      basket.addItem(marsDouble);      
      basket.addItem(skittlesDouble);
      basket.addItem(skittlesDouble);
      expect(basket.getTotalPrice()).toBe(12.97);
    });
  });
});