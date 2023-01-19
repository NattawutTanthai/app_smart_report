import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ComfirmDetailWaitReportScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className='h-full'>
      <View className='bg-white'>
      <Text>หมายเหตุ ส่งให้ผู้แจ้งทราบ :</Text>
      <TouchableOpacity className='bg-[#E17B62]'>
          <Text>ยืนยัน</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}