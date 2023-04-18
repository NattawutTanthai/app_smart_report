import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Day.js
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function DetailProcessScreen({route}) {
  const navigation = useNavigation();
  const {
    _id,
    detail,
    name,
    phone,
    type,
    imgStart,
    startDate_timeStamp,
    processDate_timeStamp,
    commentProcess,
    empProcess,
  } = route.params;

  // Day.js
  dayjs.locale('th');
  dayjs.extend(buddhistEra);
  dayjs.extend(relativeTime);

  takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    // console.log(data.uri);
  };

  return (
    <ScrollView className="bg-white">

      <Text className="m-4 font-kanitRegular text-lg text-[#636466]">
        สถานะ : ดำเนินการมา {dayjs().to(dayjs(processDate_timeStamp))}
      </Text>
      <View className="flex-1 border border-gray-500 rounded-lg p-3 m-3 mb-1">
        <View className="flex-row mb-4">
          <View className="justify-center flex-col">
            <Image
              style={{width: 140, height: 140}}
              source={{uri: imgStart}}
              className="border border-gray-500 rounded-lg p-3 m-3"
            />
            <View className="flex-row justify-center ">
              <Text className="font-kanitRegular text-[#636466]">ก่อน</Text>
            </View>
          </View>
          <View className="justify-center flex-col">
            <Image
              source={require('../../assets/images/img_unknow_large.png')}
              className="border border-gray-500 rounded-lg p-3 m-3"
            />
            <View className="flex-row justify-center ">
              <Text className="font-kanitRegular text-[#636466]">หลัง</Text>
            </View>
          </View>
        </View>
        <Text className="font-kanitRegular text-base text-[#636466] ml-4">
          รายละเอียด : {detail}
        </Text>
        <View className="flex-row">
          <View>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4 mt-8">
              วันที่แจ้ง
            </Text>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4">
              ผู้แจ้งปัญหา
            </Text>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4">
              ประเภท
            </Text>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4">
              เบอร์โทร
            </Text>
          </View>
          <View>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4 mt-8">
              :{' '}
              {dayjs
                .unix(startDate_timeStamp)
                .format('D MMM BBBB เวลา HH:mm น.')}
            </Text>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4">
              : {name}
            </Text>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4">
              : {type}
            </Text>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4">
              : {phone}
            </Text>
          </View>
        </View>
      </View>

      <View className="border rounded-lg p-3 pl-7 m-3 border-gray-500">
        <Text className="font-kanitRegular text-[#636466]">
          ดำเนินการโดย : {empProcess}
        </Text>
        <Text className="font-kanitRegular text-[#636466]">
          วันที่ดำเนินการ :{' '}
          {dayjs(processDate_timeStamp).format('D MMM BBBB เวลา HH:mm น.')}
        </Text>
        <Text className="font-kanitRegular text-[#636466]" numberOfLines={3}>
          รายละเอียด : {commentProcess}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ConfirmDetailProcess', _id)}
        className="bg-[#E17B62] m-4 p-3 flex-row rounded-lg justify-center">
        <Text className="text-white font-kanitRegular text-lg">เสร็จสิ้น</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

