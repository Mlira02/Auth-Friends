import axios from 'axios';

export const axiosWithAuth = _ => {
    const Token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        }
    });
};