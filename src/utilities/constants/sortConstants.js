const SORT_OPT_1 = 'Sort by';
const SORT_OPT_2 = 'Score ASC';
const SORT_OPT_3 = 'Score DESC';
const SORT_OPT_4 = 'Date ASC';
const SORT_OPT_5 = 'Date DESC';

export const sortValueMap = {
  [SORT_OPT_1]: '',
  [SORT_OPT_2]: 'scoreAsc',
  [SORT_OPT_3]: 'scoreDesc',
  [SORT_OPT_4]: 'dateAsc',
  [SORT_OPT_5]: 'dateDesc',
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
