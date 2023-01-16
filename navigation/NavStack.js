import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen';
import TopBarNavigator from './TopBarNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator();

export default function NavStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}  />
        <Stack.Screen name="TopBarNavigator" component={TopBarNavigator} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
