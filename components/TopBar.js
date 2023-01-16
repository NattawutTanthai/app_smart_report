import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

export default function TopBar() {
  return (
    <View className="flex-row justify-center">
          <Text className="font-kanitRegular text-lg text-white p-3">
            ปัญหาที่รอดำเนินการ
          </Text>
          <View className="absolute right-2 top-3">
            <Feather name="user" size={30} color="white" onPress={() =>{navigation.navigate('Profile')}} />
          </View>
        </View>
  )
}