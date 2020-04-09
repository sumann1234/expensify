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



const jsx =(
    <Provider store={store}>
    <AppRouter />
    </Provider>
);





ReactDOM.render(jsx, document.getElementById('sds'))   