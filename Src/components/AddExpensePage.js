import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import {connect} from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage =(props) =>(
    <div>
    <h1>This is from my add page</h1>
    <AddExpenseForm onSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/');
    }}/>
    </div>

    );

export default connect()(AddExpensePage);