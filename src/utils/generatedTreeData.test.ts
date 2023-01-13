import generatedTreeData from './generatedTreeData';

describe('generatedTreeData', () => {
  test('基本使用', () => {
    const data = [
      {
        name: '1',
        id: 1,
      },
      {
        name: '1-1',
        id: 2,
        parent_id: 1,
      },
      {
        name: '2',
        id: 3,
      },
      {
        name: '2-1',
        id: 4,
        parent_id: 3,
      },
    ];
    const dataTree = [
      {
        name: '1',
        id: 1,
        items: [
          {
            name: '1-1',
            id: 2,
            parent_id: 1,
            items: [],
          },
        ],
      },

      {
        name: '2',
        id: 3,
        items: [
          {
            name: '2-1',
            id: 4,
            parent_id: 3,
            items: [],
          },
        ],
      },
    ];
    expect(generatedTreeData(data)).toEqual(dataTree);
  });
});
