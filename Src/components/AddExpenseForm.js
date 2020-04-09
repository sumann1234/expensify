import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';



export default class ExpenseForm extends React.Component {
    
    constructor(props){
        super(props);

        this.state={
            description : props.expense ? props.expense.description : '',
            note:props.expense ? props.expense.note : '',
            amount:props.expense ? (props.expense.amount/10).toString() : '',
            createdAt:props.expense ? moment(props.expense.createdAt): moment(),
            calendarFocus:false,
            error:''
        }
        
    }

    changeDescription =(e) =>{
        const description = e.target.value;
        this.setState(() =>({
            description
        }))
    }

    changeNote=(e) =>{
        const note= e.target.value;
        this.setState(() => ({
            note
        }))
    }

    onAmountChange =(e) =>{
        const amount = e.target.value;
        if (!amount || amount.match( /^\d{1,9}(\.\d{0,2})?$/ )) 
        {
            this.setState(() => ({amount}) )
        }
    }

    onDateChange = (createdAt) =>{
        if(createdAt){
            this.setState(() => ({createdAt}))
        }
    }

    onFocusChange=({focused}) =>{
        this.setState(() => ({calendarFocus:focused }) )
    }

    onSubmit = (e) =>{
        e.preventDefault();
     if(!this.state.description || !this.state.description){
            this.setState(() => ({ error :'Please enter something in description and and amount.'}))
     }   
     else{
        this.setState(() =>({error:''}))
        this.props.onSubmit({
            description : this.state.description,
            amount: parseFloat(this.state.amount, 10)*100,
            createdAt: this.state.createdAt.valueOf(),
            note:this.state.note

        })
    }
    }

    render(){
        return(
            <div>
            {(this.state.error) && <h1>ERROR: {this.state.error}</h1> }
            <form onSubmit={this.onSubmit}>
            <input
            type='text' value={this.state.description}
            placeholder='Description'
            autoFocus 
            onChange={this.changeDescription}
            />
            <input
            type ='text'
            value={this.state.amount}
            placeholder='Amount'
            onChange={this.onAmountChange}
            />
            
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />
            
            <textarea 
            placeholder='Add a note here if you like.'
            value={this.state.note}
            onChange={this.changeNote}
            />
            <button>Add Expense</button>
            </form>
            </div>
            
            )
    }
}