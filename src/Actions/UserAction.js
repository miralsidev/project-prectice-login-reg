export const  ADD_USER = 'ADD_USER';

export const addForm = (name,value)=>({
    type:ADD_USER,
    payload : {name,value}
}) 