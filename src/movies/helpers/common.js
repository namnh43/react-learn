import jwt from 'jsonwebtoken';
import { LOGIN_KEY } from './constant';

function isEmptyObject(obj) {
    for (let prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {// Kiem tra trong object co thuoc tinh property do ko
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({})
}
//Tra ve true la object rong va nguoc lai


function saveToken(token) {
    //luu token vao localStorage
    if (token !== null && token !== '' && token !== undefined) {
        localStorage.setItem('loginTokenV1', token);
    }
}
function removeToken() {
    localStorage.removeItem('loginTokenV1'); //xoa 1 token
    //xoat all
    //localStorage.clear();
}

function getTokenFromLocalStorage() {
    let token = localStorage.getItem('loginTokenV1');
    if (token !== null && token !== '' && token !== undefined) {
        return token;
    }
    return null;
}

function decryptionToken() {
    let token = getTokenFromLocalStorage();
    let decodeToken = {};
    if (token !== null && token !== '' && token !== undefined) {
        decodeToken = jwt.verify(token, LOGIN_KEY);
    }
    return decodeToken;
}
function getUsernameLogin() {
    let infoUser = decryptionToken();
    if (infoUser.hasOwnProperty('user')) {
        return infoUser['user'];
    }
    return null;
}

function checkUserLogged() {
    let user = getUsernameLogin();
    if (user !== null) {
        return true;
    }
    return false;
}

export const helper = {
    isEmptyObject,
    saveToken,
    removeToken,
    decryptionToken,
    getUsernameLogin,
    checkUserLogged
}