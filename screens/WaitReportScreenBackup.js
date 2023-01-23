import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'
import 'dayjs/locale/th'

export default function WaitReportScreen() {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/waitReport/')
      .then((res) => {

        setOrders(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.err(error);
      })
    dayjs.locale('th')
  }, []);
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
      {orders.map((key,order) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailWaitReport');
              }}
              className="m-2 p-2 border rounded-xl border-gray-400 drop-shadow-xl">
              <View className="flex-row mb-2">
                <Image
                  source={require('../../assets/images/img_unknow.png')}
                  style={{
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
                    วันที่แจ้ง 27 ก.ค. 65 22:27 น.
                  </Text>

                  <Text>
                  {dayjs.unix(1674410721).format('วันที่ D MMM YYYY เวลา HH:mm น.')}
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
