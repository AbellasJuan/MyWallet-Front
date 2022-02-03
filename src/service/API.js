import axios from "axios";

const URL_BASE = 'http://localhost:5000';

function postLogin(body) {
    const promise = axios.post(`${URL_BASE}/auth/sign-in`, body);
    return promise;
};

function postSignUp(body) {
    const promise = axios.post(`${URL_BASE}/auth/sign-up`, body);
    return promise;
};

export {
    postLogin,
    postSignUp
};