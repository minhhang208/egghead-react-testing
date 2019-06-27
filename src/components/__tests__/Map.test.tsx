import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Map from '../Map';

describe("Map", () => {
  let mountedMap: ShallowWrapper;

  beforeEach(() => {
    mountedMap = shallow(<Map />);
  });

  it('renders without crashing', () => {
    let mountedMap = shallow(<Map />);  
  });

  it('contains an image', () => {
    const image = mountedMap.find('img');
    expect(image.length).toBe(1);
  });

  it('displays the none map when no params are given', () => {
    const defaultMap = mountedMap.find('img[src="images/none.png"]');
    expect(defaultMap.length).toBe(1);
  })

  
});


