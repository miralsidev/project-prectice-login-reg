import {LOGIN_USER} from "../Actions/UserAction";
const initialState ={
    email:'',
    password:''
}
const LoginReducers =(state=initialState,action)=>{
switch (action.type) {
    case LOGIN_USER:
        
        return{
            ...state,
            [action.payload.name]:action.payload.value
        }

    default:
        return state;
}
}
export default LoginReducers;