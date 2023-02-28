import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import Axios from '../../constants/axiosConfig';
import CameraBtn from '../../components/CameraBtn';

export default function ConfirmDetailProcessScreen({route}) {
  const navigation = useNavigation();
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState(2);
  const [imageBase64 , setImageBase64] = useState('null')

  let radio_props = [
    {label: 'เสร็จสิ้น', value: 2},
    {label: 'ส่งต่อ', value: 3},
  ];

  const showAlert = () =>
    Alert.alert(
      'เสร็จสิ้น',
      'ดำเนินการเรียบร้อยแล้ว!',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Success');
          },
          style: 'OK',
        },
      ],
      {
        cancelable: true,
      },
    );

  const handelConfirm = async () => {
    console.log('status', status);
    // console.log(imageBase64);
    try {
      const res = await Axios.put(`/task/${route.params}`, {
        status: status,
        commentEnd: `${comment}`,
        imgEnd : `data:image/png;base64,${imageBase64}`,
        endDate_timeStamp: Date.now(),
      }).then(res => {
        // console.log(res);
        showAlert();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View className="bg-white h-full">
        <CameraBtn base64={setImageBase64} />
        <Text className="font-kanitRegular text-[#636466] text-lg my-5 ml-5">
          สถานะที่ต้องการเปลี่ยน : 
        </Text>
        <View className="ml-5">
          <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            onPress={value => {
              setStatus(value);
            }}
            buttonColor={'#E17B62'}
            selectedButtonColor={'#E17B62'}
            labelStyle={{
              fontSize: 16,
              color: '#636466',
              fontFamily: 'Kanit-Regular',
              marginRight: 20,
            }}
          />
        </View>
        <Text className="font-kanitRegular text-[#636466] text-lg my-5 ml-5">
          หมายเหตุ ส่งให้ผู้แจ้งทราบ :
        </Text>
        <View className="border border-gray-400 mx-5 rounded-lg">
          <TextInput
            numberOfLines={10}
            multiline={true}
            onChangeText={setComment}
            value={comment}
            style={{height: 100, textAlignVertical: 'top'}}
          />
        </View>
        <TouchableOpacity
          onPress={handelConfirm}
          className="bg-[#E17B62] flex-row justify-center m-5 p-2 rounded-lg">
          <Text className="text-white font-kanitRegular text-base">ยืนยัน</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
