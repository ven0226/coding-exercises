const increment = (list) => {
  if (!Array.isArray(list)) {
    throw new Exception('STUPID!');
  }

  if (list.length === 0) {
    return [];
  }

  return [...list, 'x'].reduce(({ min, max, ranges }, e) => {
    if (min === undefined && max === undefined) {
      return { min: e, max: e, ranges: [] };
    }
    if (e === max + 1) {
      return { min, max: e, ranges };
    }
    return { min: e, max: e, ranges: [...ranges,
      min === max ? `${min}` : `${min}-${max}`] };
  }, {}).ranges.join(',');
};

console.log(increment([12, 13, 14, 15, 4, 5, 7, 8, 9, 11]));
console.log(increment([1, 2, 3, 12, 12, 13]));
console.log(increment([-1, -2, -3, 0, 1, 2, 3]));
