import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter,setStartDate,setEndDate,sortByAmount,sortByDate} from './actions/filters';


import visibleExpense from './selectors/expenses';
import './styles/style.scss';
import AppRouter from './routers/AppRouters';

const store =configureStore();

store.subscribe(() =>
{
    const state = store.getState();
    const visibile= visibleExpense(state.expense,state.filter);
    console.log(visibile);

})

store.dispatch(addExpense({description:'Gas Bill',amount:900, createdAt:2}));
store.dispatch(addExpense({description:'Jas Bill',amount:100, createdAt:50}));
store.dispatch(addExpense({description:'Water Bill',amount:300, createdAt:9}));
// store.dispatch(setTextFilter('gas'));


// setTimeout(() =>{
//     return store.dispatch(setTextFilter('Bill'));
// },3000)

const jsx =(
    <Provider store={store}>
    <AppRouter />
    </Provider>
);





ReactDOM.render(jsx, document.getElementById('sds'))   