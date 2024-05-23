import axios from "axios";

export const RegistrationServices = (userData) => {
    return axios.post('http://localhost:5000/api/addUser', userData);
};

export const LoginServices = (userData)=>{
    return axios.post('http://localhost:5000/api/login', userData);
}

export const UpdatePasswordServices = (userData)=>{
    return axios.post('http://localhost:5000/api/updatePassword', userData);
}


