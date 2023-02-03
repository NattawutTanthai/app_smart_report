import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Axios from '../../constants/axiosConfig';
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
export default function WaitReportScreen() {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  const getWaitReport = () => {
    Axios.get('/waitReport')
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    getWaitReport();
    dayjs.locale('th')
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        {orders.map((order, key) => {
          return (
            <TouchableOpacity key={key}
              onPress={() => {
                navigation.navigate('DetailWaitReport');
              }}
              className="m-2 p-2 border rounded-xl border-gray-400 drop-shadow-xl">
              <View className="flex-row mb-2">
                <Image
                  source={{ uri: order.imgStart }}
                  style={{
                    resizeMode: 'cover',
                    width: 80,
                    height: 80,
                    marginRight: 10,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                />
                <View className="flex-col flex-wrap justify-around ml-2">
                  <Text key={key} className="text-[#636466] font-kanitRegular">
                    ID : {order._id}
                  </Text>
                  <Text className="text-[#FFC726] font-kanitRegular">
                    สถานะ : รอรับเรื่องมาแล้ว 4 วัน
                  </Text>
                  <Text className="text-[#636466] font-kanitRegular">
                    {dayjs.extend(buddhistEra)}
                    {dayjs.unix(order.startDate_timeStamp).format('วันที่แจ้ง D MMM BBBB เวลา HH:mm น.')}
                  </Text>
                </View>
              </View>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                className="text-[#636466] font-kanitRegular">
                {order.detail}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
