import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import Axios from '../../constants/axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ConfirmDetailWaitReportScreen({route}) {
  const [comment, setComment] = useState('');
  const navigation = useNavigation();
  const showAlert = () =>
    Alert.alert(
      'เสร็จสิ้น',
      'ดำเนินการเรียบร้อยแล้ว!',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Process' , {'paramPropKey': 'paramPropValue'});
          },
          style: 'OK',
        },
      ],
      {
        cancelable: true,
      },
    );

    const getEmpName = async () => {
      try {
        let token = await AsyncStorage.getItem('empName');
        return token;
      } catch (error) {
        console.error(error);
      }
    };

  const handelConfirm = async () => {
    let empName = await getEmpName();
    try {
    const res = await Axios.patch(`/task/${route.params}`, {
      status: 1,
      commentProcess: `${comment}`,
      processDate_timeStamp: Date.now(), 
      empProcess: empName,
    }).then(res => {
      // console.log(res);
      showAlert();
    });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="bg-white h-full">
      <Text className="font-kanitRegular text-lg my-5 ml-5">
        หมายเหตุ ส่งให้ผู้แจ้งทราบ :
      </Text>
      <View className="border border-gray-400 mx-5 rounded-lg">
        <TextInput
          numberOfLines={10}
          onChangeText={setComment}
          value={comment}
          placeholder="กรอกหมายเหตุ..."
          multiline={true}
          style={{height: 100, textAlignVertical: 'top' , padding: 10}}
        />
      </View>
      <TouchableOpacity
        onPress={handelConfirm}
        className="bg-[#E17B62] flex-row justify-center m-5 p-2 rounded-lg">
        <Text className="text-white font-kanitRegular text-base">ยืนยัน</Text>
      </TouchableOpacity>
    </View>
  );
}
