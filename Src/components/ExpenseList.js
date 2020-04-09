import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import Visible from '../selectors/expenses';
import ExpenseListFilter from '../components/ExpenseListFilter';



export const ExpenseList = (props) =>(
    <div>
    <ExpenseListFilter />
    <h1>Expense List</h1>
    {props.expenses.map((expense) =>{
        return <ExpenseListItem key={expense.id} {...expense}/>
    })}
    </div>
)

const mapStatetoProps =(state) =>{
    return{
        expenses: Visible(state.expense, state.filter)
    }
    };


export default connect(mapStatetoProps)(ExpenseList);
