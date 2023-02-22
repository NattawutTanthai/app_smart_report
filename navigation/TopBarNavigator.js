import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import WaitReportScreen from '../screens/TabScreen/WaitReportScreen';
import ProcessScreen from '../screens/TabScreen/ProcessScreen';
import SuccessScreen from '../screens/TabScreen/SuccessScreen';
import SentToScreen from '../screens/TabScreen/SentToScreen';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createMaterialTopTabNavigator();

import { useContext } from 'react';
import { AuthContext } from '../context/useContextToken';

export default function TopBarNavigator() {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);
  return (
    <SafeAreaView className="bg-[#E17B62] h-full">
      <View className="flex-row justify-center">
        <Text className="font-kanitRegular text-lg text-white p-3">
          ปัญหาที่รอดำเนินการ
        </Text>
        <View className="absolute right-2 top-3">
          <Feather
            name="log-out"
            size={30}
            color="white"
            onPress={() => {
              // navigation.navigate('Profile');
              logout();
            }}
          />
        </View>
      </View>
      <Tab.Navigator
        initialRouteName="WaitReport"
        screenOptions={{
          tabBarIndicatorStyle: {backgroundColor: '#E17B62'},
        }}>
        <Tab.Screen
          name="WaitReport"
          component={WaitReportScreen}
          options={{
            tabBarLabel: 'รอรับเรื่อง',
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: 'Kanit-Regular',
            },
          }}
        />
        <Tab.Screen
          name="Process"
          component={ProcessScreen}
          options={{
            tabBarLabel: 'ดำเนินการ',
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: 'Kanit-Regular',
            },
          }}
        />
        <Tab.Screen
          name="Success"
          component={SuccessScreen}
          options={{
            tabBarLabel: 'เสร็จสิ้น',
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: 'Kanit-Regular',
            },
          }}
        />
        <Tab.Screen
          name="SentTo"
          component={SentToScreen}
          options={{
            tabBarLabel: 'ส่งต่อ',
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: 'Kanit-Regular',
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
