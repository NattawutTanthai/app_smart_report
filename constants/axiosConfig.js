import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';


const Axios = axios.create({});

// if (Platform.OS == 'ios') {
//   Axios.defaults.baseURL = 'https://api-smart-report-a292s4k94-nattawuttanthai.vercel.app';
// } else if (Platform.OS == 'android') {
//   Axios.defaults.baseURL = 'https://api-smart-report-a292s4k94-nattawuttanthai.vercel.app';
// }

if (Platform.OS == 'ios') {
  Axios.defaults.baseURL = 'http://localhost:3333';
} else if (Platform.OS == 'android') {
  Axios.defaults.baseURL = 'http://192.168.1.80:3333';
}

export default Axios;