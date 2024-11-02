import { selector } from 'recoil';

import testState from './atom';

const testWithComma = selector({
  key: 'testWithComma',
  get: ({ get }) => {
    const abcArr = get(testState);

    return abcArr.join(',');
  },
});

export default testWithComma;
