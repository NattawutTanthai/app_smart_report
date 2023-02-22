import { useState, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Axios from '../constants/axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../context/useContextToken';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  const alert = (title, detail) => {
    Alert.alert(
      title,
      detail,
      [
        {
          text: 'OK',
          style: 'OK',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const clearAsyncStorage = () => {
    AsyncStorage.clear();
  };

  const handledLogin = async () => {
    // navigation.navigate('TopBarNavigator');
    if (username !== '' || password !== '') {
      console.log(username, password);
      Axios.post('/employee/login', {
        username: username,
        password: password,
      })
        .then((res) => {
          alert('สำเร็จ', 'เข้าสู่ระบบสำเร็จ');
          login(res.data.token);
        })

    } else {
      alert('ผิดพลาด', 'กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  };

  // Debug
  // useEffect(() => {
  //   console.log(tokenState);
  // }, [tokenState]);

  return (
    <SafeAreaView className="flex bg-white w-full h-full ">
      <View className="flex">
        <View className="pb-10 flex-row justify-center">
          <Image
            source={require('../constants/images/logo_smart_report.png')}
            className="w-40 h-40 "
          />
        </View>
        <View className="px-5 flex">
          <Text className="text-[#696969] mb-2 font-kanitRegular">
            เข้าสู่ระบบ
          </Text>

          {/* Username */}
          <View className="mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border">
            <View className=" pr-2 items-center flex-row pl-2">
              <Feather name="user" size={30} color="#828282" />
            </View>
            <View className="px-2 items-center flex-1 flex-row">
              <TextInput
                style={styles.input}
                keyboardType="default"
                className="w-full rounded-md"
                placeholder="username"
                onChangeText={setPassword}
                value={password}
              />
            </View>
          </View>

          {/* Password */}
          <View className="mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border">
            <View className=" pr-2 items-center flex-row pl-2">
              <Feather name="lock" size={30} color="#828282" />
            </View>
            <View className="px-2 items-center flex-1 flex-row">
              <TextInput
                style={styles.input}
                keyboardType="default"
                className="w-full rounded-md"
                placeholder="password"
                secureTextEntry={true}
                onChangeText={setUsername}
                value={username}
              />
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                handledLogin();
              }}
              className="bg-[#E17B62] flex-row justify-center py-2 rounded-lg ">
              <Text className="text-white font-kanitMedium text-lg">Login</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center mt-4">
            <Text className="text-[#A9A9A9] font-kanitRegular">
              คุณยังไม่มีบัญชีใช่ไหม?{' '}
            </Text>
            <Text
              className="underline-offset-8 underline font-kanitRegular text-blue-500"
              onPress={() => navigation.navigate('Register')}>
              ลงทะเบียนที่นี่{' '}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 18,
    fontFamily: 'Kanit-Regular',
  },
});
