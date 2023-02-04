import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// Day.js
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import relativeTime from 'dayjs/plugin/relativeTime';

function TaskCard({screen,task}) {
    const navigation = useNavigation();
      const {
        imgStart,
        startDate_timeStamp,
        _id,
        detail,
        name,
    } = task.task;
    // Day.js
    dayjs.locale('th');
    dayjs.extend(buddhistEra);
    dayjs.extend(relativeTime);
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate(screen ,task.task);
            }}
            className="m-2 p-2 border rounded-xl border-gray-400 drop-shadow-xl">
            <View className="flex-row">
                    <Image
                        source={{ uri: imgStart }}
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
                    <Text className="text-[#FFC726] font-kanitRegular">
                        สถานะ : รอรับเรื่องมา{' '}
                        {dayjs().to(dayjs(startDate_timeStamp))}
                    </Text>
                    <Text className="text-[#E17B62] font-kanitRegular">
                        {dayjs
                            .unix(startDate_timeStamp)
                            .format('วันที่แจ้ง : D MMM BBBB เวลา HH:mm น.')}
                    </Text>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        className="text-[#636466] font-kanitRegular">
                        {detail}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TaskCard