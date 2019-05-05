import React from 'react';
import { shallow } from 'enzyme';
import { FirstGrid } from './FirstGrid.jsx';

test('shallow FirstGrid expect textContent', () => {
  const firstGrid = shallow(<FirstGrid classes={{}} />);

  expect(firstGrid.text()).toEqual('××九九乘法表MULTIPLICATION CHART××');
});
