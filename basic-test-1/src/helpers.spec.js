const helper = require('./helpers');

describe('helpers module', () => {
  describe('Test sum()', () => {
    it('Should return sum of two values', () => {
      const expectedOutput = 10;
      const actualOutput = helper.sum(5, 5);

      expect(actualOutput).toBe(expectedOutput);
    });
  });
});
