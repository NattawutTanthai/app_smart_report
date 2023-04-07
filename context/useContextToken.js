import React, {createContext, useState} from 'react';
import Axios from '../constants/axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState('NONE');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenContext, setTokenContext] = useState(null);

  const getToken = async () => AsyncStorage.getItem('token');

  const login = async tk => {
    try {
      // setIsLoading(true);
      await AsyncStorage.setItem('token', tk);
      let token_set = await getToken('token');
      setToken(token_set);
      console.log('tokenUseContext = ' + token);
      setIsLoggedIn(true);
      // setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      alert('ออกจากระบบสำเร็จ');
      setIsLoading(true);
      setIsLoggedIn(false);
      await AsyncStorage.removeItem('token');
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
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
    Axios.get('/auth', {token: getItem_token()})
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

  // useEffect(() => {
  // isLoggendIn();
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        tokenContext,
        isLoggedIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
