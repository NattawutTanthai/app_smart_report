import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  StyleSheet,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import Axios from '../../constants/axiosConfig';
import CameraBtn from '../../components/CameraBtn';
import {Dropdown} from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ConfirmDetailProcessScreen({route}) {
  const navigation = useNavigation();
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState(2);
  const [imageBase64, setImageBase64] = useState(null);
  const [valueDropdown, setValueDropdown] = useState(null);
  const [type, setType] = useState(null);

  let radio_props = [
    {label: 'เสร็จสิ้น', value: 2},
    {label: 'ส่งต่อ', value: 3},
  ];

  useEffect(() => {
    getType();
  }, []);

  const getType = async () => {
    let data = [];
    Axios.get('/type').then(res => {
      res.data.map(item => {
        data.push({label: item.name, value: item.name});
      });
    });
    setType(data);
  };

  const showAlert = (title, detail) =>
    Alert.alert(
      title,
      detail,
      [
        {
          text: 'OK',
          onPress: () => {
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

    if (imageBase64 == null) {
      showAlert('ผิดพลาด', 'กรุณาถ่ายรูป');
    } else if (valueDropdown == null) {
      showAlert('ผิดพลาด', 'กรุณาเลือกที่ต้องการส่งต่อ');
    } else if (status === 3) {
      Axios.put(`/task/${route.params}`, {
        status: status,
        commentEnd: `${comment}`,
        imgEnd: `data:image/png;base64,${imageBase64}`,
        endDate_timeStamp: Date.now(),
        empEnd: empName,
        type: valueDropdown,
      })
        .then(res => {
          showAlert('เสร็จสิ้น', 'ดำเนินการส่งต่อเรียบร้อยแล้ว!');
          navigation.navigate('SentTo')
        })
        .catch(err => {
          console.log(err);
        });
    } else if (status === 2) {
      Axios.put(`/task/${route.params}`, {
        status: status,
        commentEnd: `${comment}`,
        imgEnd: `data:image/png;base64,${imageBase64}`,
        endDate_timeStamp: Date.now(),
        empEnd: empName,
      })
        .then(res => {
          showAlert('เสร็จสิ้น', 'ดำเนินการเรียบร้อยแล้ว!');
          navigation.navigate('Success')
        })
        .catch(err => {
          console.log(err);
        });
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
        {
          // ถ้าเลือกส่งต่อ ให้แสดงช่องกรอกหมายเหตุ
          status === 3 ? (
            <View className="bg-red-100 rounded-lg m-2 py-2">
              <Text className="font-kanitRegular text-[#636466] text-lg  ml-5">
                ส่งต่อไปที่ :
              </Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                itemTextStyle={styles.itemTextStyle}
                iconStyle={styles.iconStyle}
                data={type}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="โปรดเลือกจะส่งต่อ..."
                searchPlaceholder="ค้นหา..."
                value={valueDropdown}
                onChange={item => {
                  setValueDropdown(item.value);
                }}
              />
            </View>
          ) : null
        }
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

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: 'Kanit-Regular',
    color: '#636466',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Kanit-Regular',
    color: '#636466',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    fontFamily: 'Kanit-Regular',
    height: 40,
    fontSize: 16,
  },
  itemTextStyle: {
    fontFamily: 'Kanit-Regular',
    fontSize: 16,
  },
});
