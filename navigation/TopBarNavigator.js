import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WaitReportScreen from '../screens/TabScreen/WaitReportScreen';
import ProcessScreen from '../screens/TabScreen/ProcessScreen';
import SuccessScreen from '../screens/TabScreen/SuccessScreen';
import SentToScreen from '../screens/TabScreen/SentToScreen';

const Tab = createMaterialTopTabNavigator();

export default function TopBarNavigator() {
  return (
    <SafeAreaView className="bg-[#E17B62] h-full">
        <View className="flex-row justify-center  bg-[#E17B62] ">
          <Text className="font-kanitRegular text-lg text-white p-3">
            ปัญหาที่รอดำเนินการ
          </Text>
          <View className="absolute right-2 top-3">
            <Feather name="user" size={30} color="white" />
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
