const lib = require('../index');

describe('String length', () => {
  it('should return at least 1 character or less than 10 characters.', () => {
    const result = lib.stringLength('test');
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)
  });
});

describe('string reverse', () => {
  it('should return the string reverse', () => {
    const result = lib.reverseString('moise');
    expect(result).toEqual('esiom')
  });
});


describe('calculator method', () => {
  const result = new lib.Calculator(2,2)
  it('should return the sum', () => {
    expect(result.add()).toBe(4);
  });
  it('should return the rest', () => {
    expect(result.substract()).toBe(0);
  });
  it('should return the quotient', () => {
    expect(result.divide()).toBe(1);
  });
  it('should return the factor', () => {
    expect(result.multiply()).toBe(4);
  });
});

describe('capitalize string ', () => {
  it('should return the capitalize string', () => {
    const result = lib.capitalizeString('moise');
    expect(result).toEqual('Moise')
  });
});
