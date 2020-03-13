/**
 * manual mock
 * - __mocks__ 目录层级
 * - 使用 jest.mock('moduleName') 时要和 'require/import' 在同一个作用域
 */
import Users from "../src/users";

jest.mock("axios");

it('jest.mock("axios") 验证', () => {

  // Users 里有引用 axios
  return Users.all().then(res => {
    expect(res).toEqual([{
      name: "Xuer"
    }])
  });
});
