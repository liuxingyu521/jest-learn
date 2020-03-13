/**
 * snapshot 快照比较
 */

it('snapshot compare, must be the same 1', () => {
  const user = {
    id: 8,
    name: 'blob',
  };

  expect(user).toMatchSnapshot();
});

it('snapshot compare, must be the same 2', () => {
  const user = {
    date: new Date(),
    id: 20,
    name: 'Aliced',
  };

  expect(user).toMatchSnapshot({
    date: expect.any(Date),
    id: expect.any(Number)
  });
});