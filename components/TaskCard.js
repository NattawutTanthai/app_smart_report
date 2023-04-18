import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Day.js
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import relativeTime from 'dayjs/plugin/relativeTime';

function TaskCard({screen, task}) {
  const navigation = useNavigation();
  const {
    imgStart,
    endDate_timeStamp,
    startDate_timeStamp,
    processDate_timeStamp,
    _id,
    detail,
    name,
    type
  } = task.task;
  // Day.js
  dayjs.locale('th');
  dayjs.extend(buddhistEra);
  dayjs.extend(relativeTime);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(screen, task.task);
      }}
      className="m-2 p-2 border rounded-xl border-gray-400 drop-shadow-xl">
      <View className="flex-row">
        <Image
          source={{uri: imgStart}}
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
          {screen == 'DetailWaitReport' ? (
            <Text className="text-[#FFBD00] font-kanitRegular">
              สถานะ : รอรับเรื่องมา{' '}
              {dayjs().to(dayjs.unix(startDate_timeStamp))}
            </Text>
          ) : screen == 'DetailProcess' ? (
            <Text className="text-[#2F80ED] font-kanitRegular">
              สถานะ : ดำเนินการมา {dayjs().to(dayjs(processDate_timeStamp))}
            </Text>
          ) : screen == 'DetailSuccess' ? (
            <Text className="text-[#27AE60] font-kanitRegular">
              สถานะ : เสร็จสิ้นมา {dayjs().to(dayjs(endDate_timeStamp))}
            </Text>
          ) : (
            <Text className="text-[#EB5757] font-kanitRegular">
              สถานะ : ส่งต่องานให้ {type}
            </Text>
          )}

          <Text className="text-[#E17B62] font-kanitRegular">
            {dayjs
              .unix(startDate_timeStamp)
              .format('วันที่แจ้ง : D MMM BBBB เวลา HH:mm น.')}
          </Text>
          <Text
            style={{width: 200}}
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-[#636466] font-kanitRegular">
            {detail}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default TaskCard;
