import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

export default function HomeScreen() {
  return (
    <SafeAreaView >
      <ScrollView>
        <View className='flex-row justify-center  bg-[#E17B62] '>
            <Text className='font-kanitRegular text-lg text-white p-3'>ปัญหาที่รอดำเนินการ</Text>
            <View className='absolute right-2 top-3'>
            <Feather  name='user' size={30} color='white' />
            </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}