import moment from 'moment';
import {setStartDate, setEndDate,setTextFilter,sortByAmount,sortByDate } from '../../actions/filters';

test('test screen showing', ()=>{
    const setStart=setStartDate(moment(0));
    expect(setStart).toEqual({
        type:'SET_START_DATE',
        date: moment(0)
    })
})

test('test screen showing', ()=>{
    const setEnd=setEndDate(moment(0));
    expect(setEnd).toEqual({
        type:'SET_END_DATE',
        date: moment(0)
    })
})

test('test screen showing', ()=>{
    const setText=setTextFilter('foll');
    expect(setText).toEqual({
        type:'SET_TEXT',
        text:'foll'
    })
})

test('test screen showing', ()=>{
    const setText=setTextFilter();
    expect(setText).toEqual({
        type:'SET_TEXT',
        text:{}
    })
})

test('test screen showing', ()=>{
    const sortAmount=sortByAmount();
    expect(sortAmount).toEqual({
        type:'SORT_BY_AMOUNT',
    })
})

test('test screen showing', ()=>{
    const sortDate=sortByDate();
    expect(sortDate).toEqual({
        type:'SORT_BY_DATE',
    })
})