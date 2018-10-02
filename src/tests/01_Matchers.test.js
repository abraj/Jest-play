test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
  expect(1 + 2).not.toBe(5);
});

// NOTE: describe block is optional, mainly used when scoping is needed (eg. during setup and teardown)
// NOTE: It is a good practice to use only one assertion in a test.
describe('Test Addition', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('adds 1 + 2 to not equal 5', () => {
    expect(1 + 2).not.toBe(5);
  });
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
  expect([1, 2]).toEqual([1, 2]);
});

test('Test: null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('Test: zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);       // This won't work because of rounding error
  expect(value).toBeCloseTo(0.3);   // This works.
  expect(value).toBeCloseTo(0.2998);
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

test('the shopping list has beer on it', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'beer',
    'paper towels',
  ];
  expect(shoppingList).toContain('beer');
});

test('compiling code goes as expected', () => {
  function compileAppCode() {
    throw new Error('you are using the wrong Version');
  }

  expect(compileAppCode).toThrow();
  expect(compileAppCode).toThrow(Error);

  // You can also use the exact/partial error message or a regexp
  expect(compileAppCode).toThrow('using the wrong Version');
  expect(compileAppCode).toThrow(/Ver/);
});
