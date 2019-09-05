const helper = require('./helpers');

describe('helpers module', () => {
  describe('Test sum()', () => {
    it('Should return sum of two values', () => {
      const actualOutput = helper.sum(5, 5);
      expect(actualOutput).toBe(10);
    });

    it('Should not be return 7', () => {
      const actualOutput = helper.sum(5, 5);
      expect(actualOutput).not.toBe(7);
    });

    it('Should return defined', () => {
      const actualOutput = helper.sum(5, 5);
      expect(actualOutput).toBeDefined();
    });

    it('Should add three numbers', () => {
      const actualOutput = helper.sum(5, 5, 5);
      expect(actualOutput).toBe(15);
    });
  });
});
