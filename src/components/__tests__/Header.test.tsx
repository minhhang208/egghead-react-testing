import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Header from '../Header';
 
describe("Header", () => {
    let mountedHeader: ShallowWrapper;

    beforeEach(() => {
        mountedHeader = shallow(<Header />);
    });

    it('render without crashing', () => {
        let mountedHeader = shallow(<Header />); 
    })

    it('renders a logo', () => {
        const logoImg = mountedHeader.find('img[src="images/wired-brain-coffee-logo.png"]');        
        expect(logoImg.length).toBe(1);
    })
})
