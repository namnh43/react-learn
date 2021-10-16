import axios from 'axios';

// viet ham lay du lieu tu api ve
const getDataVirusCorona = async () => {
    const url = `https://api.covid19api.com/summary`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : {};
    return result;
}

export const apiVirus = {
    getDataVirusCorona
}