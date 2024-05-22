export const  ADD_USER = 'ADD_USER';
export const  LOGIN_USER = 'LOGIN_USER';

export const addForm = (name,value)=>({
    type:ADD_USER,
    payload : {name,value}
}) 

export const loginForm = (name,value)=>({
    type:ADD_USER,
    payload : {name,value}
}) 