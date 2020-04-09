import onSelector from '../../selectors/expenses';
import moment from 'moment';
import expense from '../fixtures/expenses'


test('this test shows the data filtered through text',()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDte:undefined
    }
    const result =onSelector(expense,filters);
    expect(result).toEqual([expense[2],expense[1]])
})

test('this test shows data filtered through date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=onSelector(expense,filters);
    expect(result).toEqual([expense[2],expense[0]])

})

test('this test shows data filtered through date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=onSelector(expense,filters);
    expect(result).toEqual([expense[2],expense[0],expense[1]])

})


test('this test shows data filtered through date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result=onSelector(expense,filters);
    expect(result).toEqual([expense[0],expense[1]])

})

test('this test shows data filtered through amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=onSelector(expense,filters);
    expect(result).toEqual([expense[2],expense[0],expense[1]])

})