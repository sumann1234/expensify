import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import ExpenseListItem from'../../components/ExpenseListItem';

test('should render ExpenseList with expense', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
})