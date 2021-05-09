import React from 'react';
import { shallow } from 'enzyme';
import { Privacy } from './Privacy';

it('should call onSubmit for empty form submission', () => {
  const handleSubmitSpy = jest.fn();
  // @ts-ignore
  const wrapper = shallow(<Privacy handleSubmit={handleSubmitSpy} />);
  wrapper.find('form').simulate('submit');
  expect(handleSubmitSpy).toHaveBeenCalled();
});
