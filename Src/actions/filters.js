


export const setTextFilter=(text={}) =>({
    type:'SET_TEXT',
    text
});


export const setStartDate= (date=undefined) =>({
    type:'SET_START_DATE',
    date
})
    
export const setEndDate= (date) =>({
    type:'SET_END_DATE',
    date
})
    

export const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'

})


export const sortByDate = () =>({
    type:'SORT_BY_DATE'

})
