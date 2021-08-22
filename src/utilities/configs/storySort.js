const SORT_OPT_1 = 'Sort by';
const SORT_OPT_2 = 'Score ASC';
const SORT_OPT_3 = 'Score DESC';
const SORT_OPT_4 = 'Date ASC';
const SORT_OPT_5 = 'Date DESC';

const NUM_ASC = 'numAsc';
const NUM_DESC = 'numDesc';

export const sortValueMap = {
  [SORT_OPT_1]: '',
  [SORT_OPT_2]: 'scoreAsc',
  [SORT_OPT_3]: 'scoreDesc',
  [SORT_OPT_4]: 'dateAsc',
  [SORT_OPT_5]: 'dateDesc',
};

export const sortTypeMap = {
  [sortValueMap[SORT_OPT_2]]: NUM_ASC,
  [sortValueMap[SORT_OPT_3]]: NUM_DESC,
  [sortValueMap[SORT_OPT_4]]: NUM_ASC,
  [sortValueMap[SORT_OPT_5]]: NUM_DESC,
};

export const sortPropMap = {
  [sortValueMap[SORT_OPT_2]]: 'score',
  [sortValueMap[SORT_OPT_3]]: 'score',
  [sortValueMap[SORT_OPT_4]]: 'time',
  [sortValueMap[SORT_OPT_5]]: 'time',
};

export const sortOptionList = [
  {
    name: [SORT_OPT_1],
    value: sortValueMap[SORT_OPT_1],
  },
  {
    name: [SORT_OPT_2],
    value: sortValueMap[SORT_OPT_2],
  },
  {
    name: [SORT_OPT_3],
    value: sortValueMap[SORT_OPT_3],
  },
  {
    name: [SORT_OPT_4],
    value: sortValueMap[SORT_OPT_4],
  },
  {
    name: [SORT_OPT_5],
    value: sortValueMap[SORT_OPT_5],
  },
];

export const sortByWrapper = (value, lookup) => {
  const prop = sortPropMap[value];
  if (sortTypeMap[value] === NUM_ASC) {
    return (a, b) => {
      if (lookup[a] && lookup[b]) {
        return lookup[a][prop] - lookup[b][prop];
      }
    };
  }
  return (a, b) => {
    if (lookup[a] && lookup[b]) {
      return lookup[b][prop] - lookup[a][prop];
    }
  };
};
