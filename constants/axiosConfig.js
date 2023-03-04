import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';


const Axios = axios.create({});

// if (Platform.OS == 'ios') {
//   Axios.defaults.baseURL = 'https://api-smart-report.vercel.app';
// } else if (Platform.OS == 'android') {
//   Axios.defaults.baseURL = 'https://api-smart-report.vercel.app';
// }

if (Platform.OS == 'ios') {
  Axios.defaults.baseURL = 'http://localhost:3000';
} else if (Platform.OS == 'android') {
  Axios.defaults.baseURL = 'http://192.168.1.41:3000';
}

export default Axios;