import axios from "axios";

const URL_BASE = 'http://localhost:5000';

const apiUrl = axios.create({
    baseURL: URL_BASE
})
    
function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function postLogin(body) {
    const promise = apiUrl.post('/auth/sign', body)
    return promise;
};

function postSignUp(body) {
    const promise = axios.post(`${URL_BASE}/auth/sign-up`, body);
    return promise;
};

function getUserRegisters(token){
    const config = createConfig(token);
    const promise = axios.get(`${URL_BASE}/userRegisters`, config);
    return promise;
};

function postNewEntry(body, token) {
    const config = createConfig(token);
    const promise = axios.post(`${URL_BASE}/new-entry`, body, config);
    return promise;
};

function postNewExit(body, token) {
    const config = createConfig(token);
    const promise = axios.post(`${URL_BASE}/new-exit`, body, config);
    return promise;
};

function getUser(token){
    const config = createConfig(token);
    const promise = axios.get(`${URL_BASE}/user`, config);
    return promise;
};

function signOut(token){
    const config = createConfig(token);
    const promise = axios.delete(`${URL_BASE}/sign-out`, config);
    return promise;
};

const api = {
    postLogin,
    postSignUp,
    getUserRegisters,
    postNewEntry,
    postNewExit,
    getUser,
    signOut
};

export default api;