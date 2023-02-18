import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TopBarNavigator from './TopBarNavigator';
import ProfileScreen from '../screens/ProfileScreen';

import DetailWaitReportScreen from '../screens/DetailScreen/DetailWaitReportScreen';
import DetailProcessScreen from '../screens/DetailScreen/DetailProcessScreen';
import ConfirmDetailWaitReportScreen from '../screens/ConfirmScreen/ConfirmDetailWaitReportScreen';
import ConfirmDetailProcessScreen from '../screens/ConfirmScreen/ConfirmDetailProcessScreen';

import Axios from '../constants/axiosConfig';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from '../context/useContextToken';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function NavStack() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const set_token = async (tk) => {
      try {
        const token = await AsyncStorage.setItem('token', tk);
        setToken(token);
        console.log(token);
      } catch (error) {
          console.error(error);
      }   
  };

  // const clearAsyncStorage = async () => {
  //   AsyncStorage.clear();
  // };

  const loggedin = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const res = await Axios.get('/auth', {token: token});
      if (res.status === 200) {
        setIsLoggendIn(true);
        set_token(token);
        console.log('login');
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NavigationContainer>
      {loggedin ? (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="TopBarNavigator">
          <Stack.Screen
            name="TopBarNavigator"
            component={TopBarNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: true,
              title: 'โปรไฟล์',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#E17B62'},
              headerTitleStyle: {fontFamily: 'Kanit-Regular'},
              headerBackButtonMenuEnabled: false,
            }}
          />
          <Stack.Screen
            name="DetailWaitReport"
            component={DetailWaitReportScreen}
            options={{
              headerShown: true,
              title: 'รอรับเรื่อง',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#E17B62'},
              headerTitleStyle: {fontFamily: 'Kanit-Regular'},
              headerBackButtonMenuEnabled: false,
            }}
          />
          <Stack.Screen
            name="ConfirmDetailWaitReport"
            component={ConfirmDetailWaitReportScreen}
            options={{
              presentation: 'modal',
              headerShown: true,
              title: 'รอรับเรื่อง',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#E17B62'},
              headerTitleStyle: {fontFamily: 'Kanit-Regular'},
              headerBackButtonMenuEnabled: false,
            }}
          />
          <Stack.Screen
            name="DetailProcess"
            component={DetailProcessScreen}
            options={{
              headerShown: true,
              title: 'ดำเนินการ',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#E17B62'},
              headerTitleStyle: {fontFamily: 'Kanit-Regular'},
              headerBackButtonMenuEnabled: false,
            }}
          />
          <Stack.Screen
            name="ConfirmDetailProcess"
            component={ConfirmDetailProcessScreen}
            options={{
              presentation: 'modal',
              headerShown: true,
              title: 'ดำเนินการ',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#E17B62'},
              headerTitleStyle: {fontFamily: 'Kanit-Regular'},
              headerBackButtonMenuEnabled: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
