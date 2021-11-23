import axios from 'axios';

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
    loginUser
}