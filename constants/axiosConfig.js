import axios from 'axios';

const Axios = axios.create({});

//   Axios.defaults.baseURL = 'https://api-smart-report-a292s4k94-nattawuttanthai.vercel.app';
Axios.defaults.baseURL = 'http://192.168.1.41:3333';

export default Axios;
