
import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expense_reducer';
import filterReducer from '../reducers/filter_reducer'


export default () => {
    const store = createStore(
        combineReducers({
            expense : expenseReducer,
            filter : filterReducer 
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

