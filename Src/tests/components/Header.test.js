import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';


test('testing the Header',() =>{
    const wrapper= shallow(<Header/>);
    expect((wrapper)).toMatchSnapshot();
    
    // const renderer = new ReactShallowRenderer;
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})