
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TopBarNavigator from './TopBarNavigator';
import ProfileScreen from '../screens/ProfileScreen';

import DetailWaitReportScreen from '../screens/DetailScreen/DetailWaitReportScreen';
import DetailProcessScreen from '../screens/DetailScreen/DetailProcessScreen';
import DetailSentToScreen from '../screens/DetailScreen/DetailSentToScreen';
import DetailSuccessScreen from '../screens/DetailScreen/DetailSuccessScreen';
import ConfirmDetailWaitReportScreen from '../screens/ConfirmScreen/ConfirmDetailWaitReportScreen';
import ConfirmDetailProcessScreen from '../screens/ConfirmScreen/ConfirmDetailProcessScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
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
          <Stack.Screen
            name="DetailSuccess"
            component={DetailSuccessScreen}
            options={{
              headerShown: true,
              title: 'เสร็จสิ้น',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#E17B62'},
              headerTitleStyle: {fontFamily: 'Kanit-Regular'},
              headerBackButtonMenuEnabled: false,
            }}
          />
          <Stack.Screen
            name="DetailSentTo"
            component={DetailSentToScreen}
            options={{
              headerShown: true,
              title: 'เสร็จสิ้น',
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#E17B62'},
              headerTitleStyle: {fontFamily: 'Kanit-Regular'},
              headerBackButtonMenuEnabled: false,
            }}
          />
          
        </Stack.Navigator>
    )
}