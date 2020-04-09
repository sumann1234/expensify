import React from 'react';
 import {shallow} from 'enzyme';
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage';


test('testing the ExpenseDashBoardPage',() =>{
    const wrapper= shallow(<ExpenseDashBoardPage/>);
    expect((wrapper)).toMatchSnapshot();
})