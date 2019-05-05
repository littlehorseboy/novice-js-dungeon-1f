import React from 'react';
import { shallow } from 'enzyme';
import { GridList } from './GridList.jsx';

test('shallow GridList expect textContent', () => {
  const gridList = shallow(<GridList classes={{}} />);

  expect(gridList.text()).toEqual('<Jss(FirstGrid) /><Jss(OtherGrid) /><Jss(OtherGrid) /><Jss(OtherGrid) /><Jss(OtherGrid) /><Jss(OtherGrid) /><Jss(OtherGrid) /><Jss(OtherGrid) /><Jss(OtherGrid) />');
});
