// Fails with Error "Timeout - Async callback was not invoked within timeout specified"
test('Done: the list should contain 7', (done) => {
  function callback(data) {
    expect(data).toContain(7);  // Timeout error! if the expect statement does not pass
    done();
  }
  setTimeout(() => {
    callback([1, 2, 7, 9]);
  }, 500);
});

test('Promise: the list should contain 7', () => {
  const promise = new Promise((resolve, reject) => {
    resolve([1, 2, 7, 9]);
  });

  expect.assertions(1);  // verify that a certain number of assertions are called

  // Test fails if promise is rejected
  return promise.then(data => {
    expect(data).toContain(7);  // Fails immediately (no Timeout) if the expect statement does not pass
  });
});

test('Promise: intentional reject', () => {
  const promise = new Promise((resolve, reject) => {
    reject('Reject my promise!');
  });

  expect.assertions(1);

  // Test fails if promise is resolved
  return promise.catch(e => expect(e).toMatch('my'));
});

test('Promise-resolves: the list should contain 7', () => {
  const promise = new Promise((resolve, reject) => {
    resolve([1, 2, 7, 9]);
  });

  expect.assertions(1);

  // Test fails if promise is rejected
  // Be sure to return the assertion
  return expect(promise).resolves.toContain(7);
});

test('Promise-rejects: intentional reject', () => {
  const promise = new Promise((resolve, reject) => {
    reject('Reject my promise!');
  });

  expect.assertions(1);

  // Test fails if promise is resolved
  // Be sure to return the assertion
  return expect(promise).rejects.toMatch('my');
});

// NOTE: Preferred way!
test('Promise-async/await: the list should contain 7', async () => {
  const promise = new Promise((resolve, reject) => {
    resolve([1, 2, 7, 9]);
  });

  const data = await promise;
  expect(data).toContain(7);
});

test('Promise-async/await: intentional reject', async () => {
  const promise = new Promise((resolve, reject) => {
    reject('Reject my promise!');
  });

  try {
    await promise;
  } catch (e) {
    expect(e).toMatch('my');
  }
});

// you can combine async and await with .resolves or .rejects
test('Promise-async/await-resolves: the list should contain 7', async () => {
  const promise = new Promise((resolve, reject) => {
    resolve([1, 2, 7, 9]);
  });

  expect.assertions(1);

  // similarly for .rejects
  await expect(promise).resolves.toContain(7);
});
