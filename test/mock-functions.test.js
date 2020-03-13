/**
 * mock 数据测试
 */

/**
 * 假设现在要测试一个 forEach 函数，为提供的数据循环调用 callback 函数
 * 这时 jest 需要模拟一个 callback 函数，来测试 forEach 的执行是否正确
 */
function forEach(arr, callback) {
  for (let i = 0, l = arr.length; i < l; i++) {
    callback(arr[i])
  }
}

/**
 * 由 jest 创建出的函数，有 mock 属性，可以获取函数的参数，运行实例，返回值等信息
 */
const mockFunc = jest.fn(num => 5 + num)

forEach([1, 2, 3], mockFunc)

describe('测试 forEach 函数执行情况', () => {
  test('调用次数是否正常', () => {
    expect(mockFunc.mock.calls.length).toBe(3)
  })

  test('传参是否正确', () => {
    expect(mockFunc.mock.calls[0][0]).toBe(1)
    expect(mockFunc.mock.calls[1][0]).toBe(2)
    expect(mockFunc.mock.calls[2][0]).toBe(3)
  })
})

/**
 * mock return values
 * - mockFunc.mockReturnValueOnce(xxx) 执行一次返回的值，可以链式调用
 * - mockFunc.mockReturnValue(xxx)
 */
const myMockFunc = jest.fn();
myMockFunc.mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValue(3);

const filterNum = [1, 2, 3, 4].filter(myMockFunc);

describe('mock return values', () => {
  test('函数调用次数情况', () => {
    expect(myMockFunc.mock.calls.length).toBe(4)
  })

  test('函数返回值是否正确', () => {
    expect(myMockFunc.mock.results[0].value).toBe(1)
    expect(myMockFunc.mock.results[1].value).toBe(2)
    expect(myMockFunc.mock.results[2].value).toBe(3)
    expect(myMockFunc.mock.results[3].value).toBe(3)
  })
})

/**
 * mock modules
 * - mockResolvedValue(xxx)
 * - mockImplementation(() => {})
 * 
 * 模拟 axios 库
 */
// import Users from '../src/users'
// import axios from 'axios'

/** 
 * 优先查找 __mocks__ 下是否有 axios mock 模块文件
 */
// jest.mock('axios')

// it('mock axios 库', () => {
//   const users = [{
//     name: "Xuer"
//   }]

//   const resp = { data: users, code: 200}
//   axios.get.mockResolvedValue(resp)
//   // axios.get.mockImplementation(() => Promise.resolve(resp))

//   return Users.all().then(res => {
//     expect(res).toEqual(users)
//   })
// })

/**
 * mock 接口实现
 * - mockName 可以设置 mock 的函数名，在控制台输出展示
 */
jest.mock('../src/add')
import {add as mathFunc} from '../src/add'

mathFunc.mockImplementation(() => 6).mockName('mock add()');
mathFunc(3, 3)


