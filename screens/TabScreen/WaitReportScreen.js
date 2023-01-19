import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function WaitReportScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className='h-full'>
      <ScrollView>
        <TouchableOpacity onPress={()=>{navigation.navigate('DetailWaitReport')}} className='m-2 p-2 border rounded-xl border-gray-400 drop-shadow-xl'>
            <View className='flex-row mb-2'>
              <Image
                source={require('../../assets/images/img_unknow.png')}
                style={{ width: 80, height: 80, marginRight: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}
              />
              <View className='flex-col flex-wrap justify-around ml-2'>
                <Text className='text-[#636466] font-kanitRegular'>ID : 000001</Text>
                <Text className='text-[#FFC726] font-kanitRegular'>สถานะ : รอรับเรื่องมาแล้ว 4 วัน</Text>
                <Text className='text-[#636466] font-kanitRegular'>วันที่แจ้ง 27 ก.ค. 65 22:27  น.</Text>
              </View>
            </View>
            <Text numberOfLines={3} ellipsizeMode='tail' className='text-[#636466] font-kanitRegular'>
              กองขยะที่ถนนศาลาแดงยังแก้ไขไม่ได้ถังขยะไม่เพียงพอและใบเล็กไป
            </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}