import axios from "axios";

export const RegistrationServices = (userData) => {
    return axios.post('http://localhost:5000/api/addUser', userData);
};