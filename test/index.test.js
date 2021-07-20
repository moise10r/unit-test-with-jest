const lib = require('../index');

describe('absolute', () => {
  it('should return a positive number if number is positve', ()=>{
    const result = lib.absolute(1);
    expect(result).toBe(1)
  });
});

describe('greetings', () => {
  it('should return a string', () => {
    const result = lib.greetings('Moise');
    expect(result).toContain('Hello Moise');
  });
});

describe('Array', () => {
  it('should return the supported currencies', () => {
    const result = lib.array();
    expect(result).toEqual(expect.arrayContaining(['USA'],['AUD'],['EUR']))
  });
});

describe('Oject', () => {
  it('should return a product with the given id', () => {
    const result = lib.object(1);
    expect(result).toMatchObject({ id: 1, price: 10 });
  });
});

