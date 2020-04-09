import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './AddExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';



const EditExpensePage =(props) =>{
   console.log(props);
    return( 
        

<div>
<h2>The id from my screen is {props.match.params.id}</h2>
<ExpenseForm
        expense={props.expense}
        onSubmit={(expense) =>{
            props.dispatch(editExpense(props.expense.id, expense));
            props.history.push('/');
            console.log('updated', expense)
        }}
        />
 <button
    onClick={() =>
        {
        props.dispatch(removeExpense({id:props.expense.id}))
        props.history.push('/')
    }}>Remove</button>
        
</div>)
}

const mappingStateToProps = (state,props) => {
    return{
        expense: state.expense.find((expense) => expense.id === props.match.params.id) 
    }
}

export default connect(mappingStateToProps)(EditExpensePage);