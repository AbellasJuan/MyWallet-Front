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

//vai precisar de token
function getUserRegisters(token){
    const config = 
        {
            headers: 
                {
                Authorization: `Bearer ${token}`
                }
        }
    const promise = axios.get(`${URL_BASE}/userRegisters`, config);
    return promise;
};

//vai precisar de token
function postNewEntry(body, token) {
    const config =
        {
            headers: 
                {
                Authorization: `Bearer ${token}`
                }
        }

    const promise = axios.post(`${URL_BASE}/new-entry`, body, config);
    return promise;
};

export {
    postLogin,
    postSignUp,
    getUserRegisters,
    postNewEntry
};