import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';



const addExpense = ({
description='',
note='',
amount=0,
createdAt =0} = {} ) =>
({
    type:'ADD_EXPENSE',
    expense:{
        id:uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
    
})

const removeExpense =({id =1} = {}) => 
({
    type:'REMOVE_EXPENSE',
    id
})


const editExpense = (id,update) =>({
    type:'EDIT_EXPENSE',
    id,
    update
})


const expenseReducerDefault = [];


const expenseReducer =(state = expenseReducerDefault, action) =>{
    switch(action.type){
        
        case 'ADD_EXPENSE': return [...state, action.expense]
        
        case 'REMOVE_EXPENSE':
                
        return state.filter( ( {id} ) =>  id !== action.id  )

        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.update
                    }
                }
                else{
                    return expense;
                }
            }
            )
            
                          
            
        default: return state;
    }
}

const setTextFilter=(text={}) =>({
    type:'SET_TEXT',
    text
});


const setStartDate= (date=undefined) =>({
    type:'SET_START_DATE',
    date
})
    
const setEndDate= (date) =>({
    type:'SET_END_DATE',
    date
})
    

const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'

})


const sortByDate = () =>({
    type:'SORT_BY_DATE'

})

const filterReducerDefault= {
    text:'',
    sortBy: 'date', //amount or date
    startDate:undefined,
    endDate:undefined
}


const filterReducer = (state = filterReducerDefault, action) =>{
    switch(action.type){
        case 'SET_TEXT':
            return{
                ...state,
                text:action.text
            }
        
        case 'SORT_BY_AMOUNT':
           return {
                ...state,
                sortBy:'amount'
        }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
        }

        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.date
            }
        
            case 'SET_END_DATE':
                return{
                    ...state,
                endDate:action.date
                }
        default: return state;
    }
}


const getVisibleExpense = (expense, {text,sortBy, startDate,endDate}) =>
{
    return expense.filter((expenses) =>{
        const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;
        const textMatch=expenses.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => 
    {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy ==='amount'){
            return a.amount< b.amount ? 1:-1;
        }
    });
} 

const store = createStore(
    combineReducers({
        expense : expenseReducer,
        filter : filterReducer 
})
);

store.subscribe(()=>
{
    const state=store.getState();
    const visibleExpense= getVisibleExpense(state.expense, state.filter)
    console.log(visibleExpense); 
});

const expenseOne=store.dispatch(addExpense({ description:'Rent', amount:100, createdAt:1 }))
const expenseTwo=store.dispatch(addExpense({ description:'Coffee', amount:300, createdAt:2 }))

// store.dispatch(removeExpense({id : expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, {amount :500}))

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());



// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));




const demostate = {
    expense:[{
    id: 'dadasdas',
    desciprtion: 'Jan Rent',
    note: 'This was the final payment',
    amount: 54500,
    createdAt:0
    }],
    filter:{
        text:'rent',
        sortBy: 'amount', //amount or date
        startDate:undefined,
        endDate:undefined
    }
}