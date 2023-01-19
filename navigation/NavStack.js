import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TopBarNavigator from './TopBarNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import DetailWaitReportScreen from '../screens/DetailWaitReportScreen';
import ConfirmDetailWaitReportScreen from '../screens/ConfirmDetailWaitReportScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function NavStack() {
  return (
    <NavigationContainer>
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
            headerStyle: {backgroundColor: '#E17B62',},
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
            headerStyle: {backgroundColor: '#E17B62',},
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
            headerStyle: {backgroundColor: '#E17B62',},
            headerTitleStyle: {fontFamily: 'Kanit-Regular'},
            headerBackButtonMenuEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
