import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView>
      <View className="border space-y-2 border-gray-500 m-3 p-3 rounded-xl drop-shadow-2xl">
        <View className="flex-row flex-1 justify-between">
          <View className="flex-row flex-1 justify-start">
            <Text>ชื่อ : นัฐวุฒิ</Text>
          </View>
          <View
            numberOfLines={1}
            ellipsizeMode="tail"
            className="flex-row flex-1 justify-start">
            <Text numberOfLines={1} ellipsizeMode="tail">
              นามสกุล : รัตนะบูชา
            </Text>
          </View>
        </View>
        <Text>หน่วยงานที่รับผิดชอบ : ความสะอาด</Text>
        <Text>Username : nattawut.r</Text>
        <Text className="text-[#636466] font-kanitRegular">
          Password : **********
        </Text>
        <TouchableOpacity className="bg-[#E17B62] flex-row justify-center p-3 rounded-xl m-4">
          <Text className="text-white text-base font-kanitRegular">
            เปลี่ยนรหัสผ่าน
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="bg-red-500 flex-row justify-center p-3 rounded-xl m-4">
        <Text className="text-white text-base font-kanitRegular">
          ออกจากระบบ
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
