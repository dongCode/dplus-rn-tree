const generatedTreeData = (
  data: any,
  idKey = 'id',
  parentKey = 'parent_id',
) => {
  const arr: any = [];
  const storeMap: any = {};

  data.forEach((item: any) => {
    storeMap[item[idKey]] = item;
    storeMap[item[idKey]].items = [];
  });

  data.forEach((item: any) => {
    if (item[parentKey] !== 0 && item[idKey] !== 0) {
      item.parent = storeMap[item[parentKey]];
      storeMap[item[parentKey]].items.push(item);
    } else {
      arr.push(item);
    }
  });
  return arr;
};

export default generatedTreeData;
