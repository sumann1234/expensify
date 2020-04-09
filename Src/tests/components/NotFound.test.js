import React from 'react';
 import {shallow} from 'enzyme';
import DoesNotExist from '../../components/NotFoundPage';


test('testing the NotFoundPage',() =>{
    const wrapper= shallow(<DoesNotExist/>);
    expect((wrapper)).toMatchSnapshot();
})