import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpenseSummary';

const ExpenseDashBoardPage =() =>(
    <div>
    <ExpensesSummary />
    <ExpenseList />
    </div>
    
);

export default ExpenseDashBoardPage;