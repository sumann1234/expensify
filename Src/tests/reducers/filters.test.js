import filterReducer from'../../reducers/filter_reducer';
import moment from 'moment';
import { stat } from 'fs';

test('should setup default values',()=>{
    const state = filterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date', 
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should setup default values',()=>{
    const state = filterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date', 
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('test sortBy',()=>{
    const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('TEST filter reducer SORT_BY_DATE',()=>{
    const currentState={
        text:'',
        sortBy: 'amount', //amount or date
        startDate:undefined,
        endDate:undefined
    }
    const action ={type:'SORT_BY_DATE'}
    const state = filterReducer(currentState,action)
    expect(state.sortBy).toBe('date')
})

test('TEST filter reducer SET_TEXT',()=>{
    const text='this is my text';
    const action ={type:'SET_TEXT',
                   text     }
    const state = filterReducer(undefined,action)
    expect(state.text).toBe(text)
})

test('TEST filter reducer SORT_BY_AMOUNT',()=>{
    const date= moment(0);
    const action={ type:'SET_START_DATE',
                    date}
    const state=filterReducer(undefined,action)
    expect(state.startDate).toBe(date) 
})

test('TEST filter reducer SORT_BY_AMOUNT',()=>{
    const date= moment(0);
    const action={ type:'SET_END_DATE',
                    date}
    const state=filterReducer(undefined,action)
    expect(state.endDate).toBe(date) 
})