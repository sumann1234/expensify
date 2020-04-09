import{addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('test screen', () =>{
    const action = removeExpense({id:'abcdef'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'abcdef'
    })
})

test('test screen', () =>{
    const action = editExpense('abcdef',{note :'Note'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'abcdef',
        update:{
            note:'Note'
        }
    })
})

test('test screen running', () =>{
    const action=addExpense({description:'Yahhoo', note:'Test', amount:500 ,createdAt:4500})
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'Yahhoo',
            note:'Test',
            amount:500,
            createdAt:4500,
            id:expect.any(String)
        }
    })
})

test('test screen running', () =>{
    const action=addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id:expect.any(String)
        }
    })
})
