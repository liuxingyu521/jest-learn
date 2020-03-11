/**
 * 异步测试
 */

it("callback", done => {
  function callback(data) {
    try {
      expect(data).toBe('callback ok')
      done()
    } catch (error) {
      done(error)
    }
  }

  setTimeout(() => {
    callback('callback ok')
  }, 1000);
});

/**
 * promise 形式
 * 需要 return 一个 Promise
 */
it('promise', () => {
  return new Promise(res => {
    setTimeout(() => {
      res('promise ok')
    }, 1000);
  }).then(res => {
    expect(res).toBe('promise ok')
  })
})

/**
 * async/await 形式
 */
it('async/await', async () => {
  const data = await new Promise(res => {
    setTimeout(() => {
      res('async/await ok')
    }, 1000);
  })

  expect(data).toBe('async/await ok')
})
