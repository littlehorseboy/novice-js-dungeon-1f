import React from 'react';
import { shallow } from 'enzyme';
import { OtherGrid } from './OtherGrid.jsx';

test('shallow OtherGrid multiplicand={9} expect textContent', () => {
  const otherGrid = shallow(<OtherGrid classes={{}} multiplicand={3} />);

  expect(otherGrid.text()).toEqual('33 × 1 ＝ 33 × 2 ＝ 63 × 3 ＝ 93 × 4 ＝ 123 × 5 ＝ 153 × 6 ＝ 183 × 7 ＝ 213 × 8 ＝ 243 × 9 ＝ 27');
});
