const Candy = require('./candy');

describe(Candy, () => {
  describe('getName', () => {
    it('returns the name of the Candy object', () => {
      let candy = new Candy('Mars', 4.99);
      expect(candy.getName()).toBe('Mars');
    });
  });

  describe('getPrice', () => {
    it('returns the price of the Candy object', () => {
      let candy = new Candy('Mars', 4.99);
      expect(candy.getPrice()).toBe(4.99);
    });
  });
});