import axios from 'axios';
import jwt from 'jsonwebtoken';
import { LOGIN_KEY } from '../helpers/constant';

//Khong su dung asyn-await
// const loginUser = (user, passw) => {
//     const url = `https://reqres.in/api/login`;
//     const params = new URLSearchParams();
//     params.append('email', user);
//     params.append('password', passw);

//     const config = {
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     }
//     const response = axios.post(url, params, config);
//     return response;
// }

//fake api - dong vai tro nhu la 1 ben phia BE
const loginUserFakes = (user, pass) => {
    let token = null;
    if (user === 'admin' && pass==='123') {
        // ma hoa thong tin tra ve
        token = jwt.sign({
            id: 1,
            user: user,
            email: "admin@example.com",
            phone: '123456789',
            address: 'Ha noi'
        }, LOGIN_KEY);
    }
    return token;
}

const loginUser = async (user, passw) => {
    const url = `https://reqres.in/api/login`;
    const params = new URLSearchParams();
    params.append('email', user);
    params.append('password', passw);

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    try {
        const response = await axios.post(url, params, config);
        const result = await response.status === 200 ? await response.data : {};
        return result;
    }catch (e) {
        return e;
    }
    
}
export const apiUser = {
    loginUser,
    loginUserFakes
}