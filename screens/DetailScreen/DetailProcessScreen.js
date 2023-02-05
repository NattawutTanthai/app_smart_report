import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Day.js
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function DetailProcessScreen({route}) {
  const navigation = useNavigation();
  const {_id, detail, name, phone, type, imgStart, startDate_timeStamp} =
    route.params;

  // Day.js
  dayjs.locale('th');
  dayjs.extend(buddhistEra);
  dayjs.extend(relativeTime);

  return (
    <ScrollView className="bg-white">
      <Text className="m-4 font-kanitRegular text-lg text-[#636466]">
        สถานะ : ดำเนินการ มาแล้ว 4 วัน
      </Text>
      <View className="flex-1 border border-gray-500 rounded-lg p-3 m-3 mb-1">
        <View className="flex-row mb-4">
          <View className="justify-center flex-col">
            <Image
              source={require('../../assets/images/img_unknow_large.png')}
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
        <Text className="font-kanitRegular text-lg text-[#636466] ml-4">
          ID : 000001
        </Text>
        <Text className="font-kanitRegular text-base text-[#636466] ml-4">
          กองขยะที่ถนนศาลาแดงยังแก้ไขไม่ได้ถังขยะไม่เพียงพอและใบเล็กไปแล้วส่งกลิ่นเหม็นมาก
          รบกวนช่วยแก้ไขทีครับ
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
              : 27 ก.ค. 65 22:27:09 น.
            </Text>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4">
              : Tanny
            </Text>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4">
              : ความสะอาด
            </Text>
            <Text className="font-kanitRegular text-sm text-[#636466] ml-4">
              : 09877794561
            </Text>
          </View>
        </View>
      </View>

      <View className="border rounded-lg p-3 pl-7 m-3 border-gray-500">
        <Text className="font-kanitRegular text-[#636466]">
          ดำเนินการโดย : นัฐวุฒิ รัตนะบูชา
        </Text>
        <Text className="font-kanitRegular text-[#636466]">
          วันที่ดำเนินการ : 27 ก.ค. 65 22:27:09 น.
        </Text>
        <Text className="font-kanitRegular text-[#636466]">
          รายละเอียด : รับเรื่องแล้วครับ กำลังแก้ไขปัญหาโดยด่วน
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ConfirmDetailProcess')}
        className="bg-[#E17B62] m-4 p-3 flex-row rounded-lg justify-center">
        <Text className="text-white font-kanitRegular text-lg">รับเรื่อง</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
