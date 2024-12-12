// # link on api: https://swapi.dev

import axios from "axios";

export const baseUrl = `https://swapi.dev/api/`;

export const axiosInstanse = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": 'application/json'
    }
});

axiosInstanse.interceptors.response.use(res => {
    return res
}, err => {
    console.warn("Error: ", err)
});