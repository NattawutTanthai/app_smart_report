import {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Axios from '../constants/axiosConfig';

export default function RegisterScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(true);
  const [dataCode, setDataCode] = useState([]);
  const [code, setCode] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');

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

  const ck_code = () => {
    let result = dataCode.filter(item => item.code === code);
    if (result) {
      return result;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    let codeCK = ck_code();
    let typeCK = '';
    if (codeCK.length > 0) {
      typeCK = codeCK[0].name;
      if (phone.length == 10) {
        if (
          fname !== '' &&
          lname !== '' &&
          username !== '' &&
          password !== ''
        ) {
          Axios.post('/employee/register', {
            fname: fname,
            lname: lname,
            username: username,
            password: password,
            phone: phone,
            type: typeCK,
          })
            .then(res => {
              alert('ลงทะเบียนสำเร็จ', 'กรุณาเข้าสู่ระบบ');
              navigation.navigate('Login');
            })
            .catch(err => {
              alert('ผิดพลาด', err.response.data.message);
            });
        } else {
          alert('กรอกข้อมูลไม่ครบ', 'กรุณากรอกข้อมูลใหม่');
        }
      } else {
        alert(
          'เบอร์โทรศัพท์กรอกไม่ครบ',
          'กรุณากรอกเบอร์โทรศัพท์ใหม่จำนวน 10 หลัก',
        );
      }
    } else {
      alert('รหัสหน่วยงานไม่ถูกต้อง', 'กรุณากรอกรหัสหน่วยงานใหม่');
    }
  };

  const getDataCode = () => {
    Axios.get('/type')
      .then(res => {
        setDataCode(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataCode();
  }, []);

  return (
    <SafeAreaView className="flex bg-white w-full h-full ">
      <ScrollView>
        <View className="flex">
          <View className="pb-10 flex-row justify-center">
            <Image
              source={require('../constants/images/logo_smart_report.png')}
              className="w-40 h-40 "
            />
          </View>
          <View className="px-5 flex">
            <Text className="text-[#696969] mb-2 font-kanitRegular">
              ลงทะเบียน
            </Text>

            {/* รหัสหน่วยงาน */}
            <View className="mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border">
              <View className=" pr-2 items-center flex-row pl-2">
                <Feather name="lock" size={30} color="#828282" />
              </View>
              <View className="px-2 items-center flex-1 flex-row">
                <TextInput
                  value={code}
                  onChangeText={setCode}
                  style={styles.input}
                  keyboardType="numeric"
                  className="w-full rounded-md"
                  placeholder="รหัสหน่วยงาน"
                />
              </View>
            </View>

            {/* ชื่อ */}
            <View className="mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border">
              <View className=" pr-2 items-center flex-row pl-2">
                <Feather name="user" size={30} color="#828282" />
              </View>
              <View className="px-2 items-center flex-1 flex-row">
                <TextInput
                  value={fname}
                  onChangeText={setFname}
                  style={styles.input}
                  keyboardType="default"
                  className="w-full rounded-md"
                  placeholder="ชื่อ"
                />
              </View>
            </View>

            {/* นามสกุล */}
            <View className="mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border">
              <View className=" pr-2 items-center flex-row pl-2">
                <Feather name="user" size={30} color="#828282" />
              </View>
              <View className="px-2 items-center flex-1 flex-row">
                <TextInput
                  value={lname}
                  onChangeText={setLname}
                  style={styles.input}
                  keyboardType="default"
                  className="w-full rounded-md"
                  placeholder="นามสกุล"
                />
              </View>
            </View>

            {/* Username */}
            <View className="mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border">
              <View className=" pr-2 items-center flex-row pl-2">
                <Feather name="user" size={30} color="#828282" />
              </View>
              <View className="px-2 items-center flex-1 flex-row">
                <TextInput
                  value={username}
                  onChangeText={setUsername}
                  style={styles.input}
                  keyboardType="default"
                  className="w-full rounded-md"
                  placeholder="Username"
                />
              </View>
            </View>

            {/* Password */}
            <View className="mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border">
              <View className=" pr-2 items-center flex-row pl-2">
                <Feather name="lock" size={30} color="#828282" />
              </View>
              <View className="px-2 items-center flex-1 flex-row">
                <View className="w-full flex-1">
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    keyboardType="default"
                    secureTextEntry={showPassword}
                    className="w-full rounded-md"
                    placeholder="password"
                  />
                </View>
                <Feather
                  onPress={() => {
                    showPassword
                      ? setShowPassword(false)
                      : setShowPassword(true);
                  }}
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={30}
                  color="#BDBDBD"
                />
              </View>
            </View>

            {/* เบอร์โทร */}
            <View className="mb-4 flex-row rounded-lg drop-shadow-2xl border-gray-400 border">
              <View className=" pr-2 items-center flex-row pl-2">
                <Feather name="user" size={30} color="#828282" />
              </View>
              <View className="px-2 items-center flex-1 flex-row">
                <TextInput
                  maxLength={10}
                  value={phone}
                  onChangeText={setPhone}
                  style={styles.input}
                  keyboardType="numeric"
                  className="w-full rounded-md"
                  placeholder="เบอร์โทร"
                />
              </View>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                className="bg-[#E17B62] flex-row justify-center py-2 rounded-lg ">
                <Text className="text-white font-kanitMedium text-lg">
                  Register
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center mt-4">
              <Text className="text-[#A9A9A9] font-kanitRegular">
                คุณมีบัญชีใช่ไหม?{' '}
              </Text>
              <Text
                className="underline-offset-8 underline font-kanitRegular text-blue-500"
                onPress={() => navigation.navigate('Login')}>
                เข้าสู่ระบบ
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
