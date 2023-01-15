import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import TopBarNavigator from './TopBarNavigator';

const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator();

export default function NavStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}  />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TopBarNavigator" component={TopBarNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
