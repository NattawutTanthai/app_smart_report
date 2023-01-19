import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ComfirmDetailWaitReportScreen() {
  const navigation = useNavigation()

  const showAlert = () =>
    Alert.alert(
      'เสร็จสิ้น',
      'ดำเนินการเรียบร้อยแล้ว!',
      [
        {
          text: 'OK',
          onPress: () => { navigation.navigate('Process')},
          style: 'OK',
        },
      ],
      {
        cancelable: true,
      },
    );


  return (
    <View className='bg-white h-full'>
      <Text className='font-kanitRegular text-lg my-5 ml-5'>หมายเหตุ ส่งให้ผู้แจ้งทราบ :</Text>
      <View className='border border-gray-400 mx-5 rounded-lg'>
        <TextInput
          numberOfLines={10}
          multiline={true}
          style={{ height: 100, textAlignVertical: 'top', }}
        />
      </View>
      <TouchableOpacity onPress={showAlert} className='bg-[#E17B62] flex-row justify-center m-5 p-2 rounded-lg'>
        <Text className='text-white font-kanitRegular text-base'>ยืนยัน</Text>
      </TouchableOpacity>
    </View>
  )
}