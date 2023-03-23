import {NavigationContainer} from '@react-navigation/native';

import Axios from '../constants/axiosConfig';
import {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {AuthContext} from '../context/useContextToken';

export default function NavStack() {
  const {isLoggedIn, login} = useContext(AuthContext);

  const getToken = async () => AsyncStorage.getItem('token');

  const clearAsyncStorage = () => {
    AsyncStorage.clear();
  };

  const check_auth = async () => {
    let Token = await getToken();
    console.log('tokenStorage เริ่มต้น = ', Token);

    Axios.post('/auth', {token: Token})
      .then(res => {
        console.log('res.data', res.data);
        login(Token);
      })
      .catch(err => {
        console.log('Not login err : ' + err);
        return;
      });
  };

  useEffect(() => {
    check_auth();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
