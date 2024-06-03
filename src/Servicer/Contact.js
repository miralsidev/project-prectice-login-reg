import axios from "axios";

export const ContactServices = (userData) => {
    return axios.post('http://localhost:5000/Contact/addContact', userData);
};