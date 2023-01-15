import { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';


export default function RegisterScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true)
  return (
    <SafeAreaView className='flex bg-white w-full h-full '>
      <ScrollView>
        <View className='flex'>
          <View className='pb-10 flex-row justify-center'>
            <Image
              source={require('../constants/images/logo_smart_report.png')}
              className="w-40 h-40 "
            />
          </View>
          <View className='px-5 flex'>
            <Text className="text-[#696969] mb-2 font-kanitRegular">ลงทะเบียน</Text>

            {/* รหัสหน่วยงาน */}
            <View className='mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border'>
              <View className=' pr-2 items-center flex-row pl-2'>
                <Feather name="lock" size={30} color="#828282" />
              </View>
              <View className='px-2 items-center flex-1 flex-row'>
                <TextInput style={styles.input} keyboardType='numeric' className='w-full rounded-md' placeholder='รหัสหน่วยงาน' />
              </View>
            </View>

            {/* ชื่อ */}
            <View className='mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border'>
              <View className=' pr-2 items-center flex-row pl-2'>
                <Feather name="user" size={30} color="#828282" />
              </View>
              <View className='px-2 items-center flex-1 flex-row'>
                <TextInput style={styles.input} keyboardType='default' className='w-full rounded-md' placeholder='ชื่อ' />
              </View>
            </View>

            {/* นามสกุล */}
            <View className='mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border'>
              <View className=' pr-2 items-center flex-row pl-2'>
                <Feather name="user" size={30} color="#828282" />
              </View>
              <View className='px-2 items-center flex-1 flex-row'>
                <TextInput style={styles.input} keyboardType='default' className='w-full rounded-md' placeholder='นามสกุล' />
              </View>
            </View>

            {/* Username */}
            <View className='mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border'>
              <View className=' pr-2 items-center flex-row pl-2'>
                <Feather name="user" size={30} color="#828282" />
              </View>
              <View className='px-2 items-center flex-1 flex-row'>
                <TextInput style={styles.input} keyboardType='default' className='w-full rounded-md' placeholder='Username' />
              </View>
            </View>

            {/* Password */}
            <View className='mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border'>
              <View className=' pr-2 items-center flex-row pl-2'>
                <Feather name="lock" size={30} color="#828282" />
              </View>
              <View className='px-2 items-center flex-1 flex-row'>
                <View className='w-full flex-1'>
                  <TextInput style={styles.input} keyboardType='default' secureTextEntry={showPassword} className='w-full rounded-md' placeholder='password' />
                </View>
                <Feather onPress={() => { showPassword ? setShowPassword(false) : setShowPassword(true) }} name={showPassword ? "eye" : "eye-off"} size={30} color="#BDBDBD" />
              </View>
            </View>

            {/* เบอร์โทร */}
            <View className='mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border'>
              <View className=' pr-2 items-center flex-row pl-2'>
                <Feather name="user" size={30} color="#828282" />
              </View>
              <View className='px-2 items-center flex-1 flex-row'>
                <TextInput style={styles.input} keyboardType='numeric' className='w-full rounded-md' placeholder='เบอร์โทร' />
              </View>
            </View>

            <View>
              <TouchableOpacity className='bg-[#E17B62] flex-row justify-center py-2 rounded-lg '>
                <Text className='text-white font-kanitMedium text-lg' >Register</Text>
              </TouchableOpacity>
            </View>

            <View className='flex-row justify-center mt-4'>
              <Text className='text-[#A9A9A9] font-kanitRegular'>คุณมีบัญชีใช่ไหม? </Text>
              <Text className='underline-offset-8 underline font-kanitRegular text-blue-500' onPress={() => navigation.navigate('Login')}>เข้าสู่ระบบ</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50, 
    fontSize: 18, 
    fontFamily: 'Kanit-Regular'
  },
});