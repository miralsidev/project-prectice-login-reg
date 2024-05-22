import {ADD_USER} from "../Actions/UserAction";
const initialState ={
    fname:'',
    lname:'',
    email:'',
    password:''
}
const UserReducers =(state=initialState,action)=>{
switch (action.type) {
    case ADD_USER:
        
        return{
            ...state,
            [action.payload.name]:action.payload.value
        }

    default:
        return state;
}
}
export default UserReducers;