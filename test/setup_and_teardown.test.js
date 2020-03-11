/**
 * 测试前和测试后的钩子函数
 * 1. beforeEach
 * 2. afterEach
 * 3. beforeAll
 * 4. afterAll
 * 
 * 钩子函数在测试块 describe 当中也可以使用
 */

 beforeAll(() => console.log('第一层 beforeAll runs here'))
 afterAll(() => console.log('第一层 afterAll runs here'))

 beforeEach(() => console.log('第一层 beforeEach runs here'))
 afterEach(() => console.log('第一层 afterEach runs here'))

describe('测试块', () => {
  beforeAll(() => console.log('第二层 beforeAll runs here'))
  afterAll(() => console.log('第二层 afterAll runs here'))

  beforeEach(() => console.log('第二层 beforeEach runs here'))
  afterEach(() => console.log('第二层 afterEach runs here'))

  it('内层钩子函数测试', () => {
    console.log('内层测试输出')
    expect(1 + 1).toBe(2)
  })
})

it('外层钩子函数测试', () => {
  console.log('外层测试输出')
  expect(1 + 1).toBe(2)
})

/**
 * 输出示例
 * ✓ 外层钩子函数测试 (3ms)
 * 测试块
 *   ✓ 内层钩子函数测试 (13ms)
 *
 * console.log test/setup_and_teardown.test.js:11
 *   第一层 beforeAll runs here
 *
 * console.log test/setup_and_teardown.test.js:18
 *   第二层 beforeAll runs here
 *
 * console.log test/setup_and_teardown.test.js:14
 *   第一层 beforeEach runs here
 *
 * console.log test/setup_and_teardown.test.js:21
 *   第二层 beforeEach runs here
 *
 * console.log test/setup_and_teardown.test.js:25
 *   内层测试输出
 *
 * console.log test/setup_and_teardown.test.js:22
 *   第二层 afterEach runs here
 *
 * console.log test/setup_and_teardown.test.js:15
 *   第一层 afterEach runs here
 *
 * console.log test/setup_and_teardown.test.js:19
 *   第二层 afterAll runs here
 *
 * console.log test/setup_and_teardown.test.js:14
 *   第一层 beforeEach runs here
 *
 * console.log test/setup_and_teardown.test.js:31
 *   外层测试输出
 *
 * console.log test/setup_and_teardown.test.js:15
 *   第一层 afterEach runs here
 *
 * console.log test/setup_and_teardown.test.js:12
 *   第一层 afterAll runs here
 */
