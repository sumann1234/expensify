import expenseReducer from '../../reducers/expense_reducer';
import expenses from '../fixtures/expenses';
import { stat } from 'fs';


test('should setup default values',()=>{
    const state = expenseReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([])
})

test('remove expense by id testing', () =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state=expenseReducer(expenses, action)
    expect(state).toEqual([expenses[1],expenses[2]])
})

test('remove expense by id testing', () =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    }
    const state=expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('add expense testing', () =>{
    const expense={
        id:'4',
        description:'HGum',
        note:'',
        createdAt:230,
        amount:22
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
        
    }
    const state=expenseReducer(expenses, action)
    expect(state).toEqual([...expenses,expense])
})

test('edit expense by id testing', () =>{
    const amount = 12200
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        update:{
            amount
        }
    }
    const state=expenseReducer(expenses, action)
    expect(state[1].amount).toEqual(amount)
})

test('edit expense by not giving id testing', () =>{
    const amount = 12200
    const action = {
        type:'EDIT_EXPENSE',
        id: 'asasd',
        update:{
            amount
        }
    }
    const state=expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
})
