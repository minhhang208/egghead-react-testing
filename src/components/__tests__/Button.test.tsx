import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Button from '../Button';

describe("Button", () => {
  let mountedButton: ShallowWrapper;
  
  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });
  
  it('renders without crashing', () => {
    let mountedButton = shallow(<Button />);  
  });
  
  it('renders a button', () => {
    const button = mountedButton.find('button');
    expect(button.length).toBe(1);
  })
});

