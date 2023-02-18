import React, {createContext, useState, useEffect} from 'react';
import Axios from '../constants/axiosConfig';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  const login = async token => {
    try {
      setIsLoading(true);
      await AsyncStorage.setItem('token', token);
      await setToken(token);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setIsLoading(true);
    setToken(null);
    AsyncStorage.removeItem('token');
    setIsLoading(false);
  };

  const getItem_token = async () => {
    try {
      let token = await AsyncStorage.getItem('token');
      setToken(token);
      return token;
    } catch (error) {
      console.error(error);
    }
  };
  const check_auth = () => {
    Axios.get('/auth',{token: getItem_token()})
      .then(res => {
        if (res.status === 200) {
          getItem_token();
        } else {
            setToken(null);
        }
        console.log(res.data);
      })
      .catch(err => {
        console.error('auth', err);
      });
  };

  const isLoggendIn = async () => {
    try {
      setIsLoading(true);
      check_auth();
      setIsLoading(false);
    } catch (error) {
      console.log(`is logged in error ${error}`);
    }
  };

  useEffect(() => {
    isLoggendIn();
  }, []);

  return (
    <AuthContext.Provider value={{login, logout, isLoading, token}}>
      {children}
    </AuthContext.Provider>
  );
};