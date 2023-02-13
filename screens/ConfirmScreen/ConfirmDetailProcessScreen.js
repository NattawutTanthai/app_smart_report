import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { useNavigation } from '@react-navigation/native'

export default function ConfirmDetailProcessScreen() {
  const navigation = useNavigation()

  let radio_props = [
    { label: 'เสร็จสิ้น', value: 'เสร็จสิ้น' },
    { label: 'ส่งต่อ', value: 'ส่งต่อ' },
  ];

  const showAlert = () =>
    Alert.alert(
      'เสร็จสิ้น',
      'ดำเนินการเรียบร้อยแล้ว!',
      [
        {
          text: 'OK',
          onPress: () => { navigation.navigate('Success') },
          style: 'OK',
        },
      ],
      {
        cancelable: true,
      },
    );


  return (
    <View className='bg-white h-full'>
      <Text className='font-kanitRegular text-[#636466] text-lg my-5 ml-5'>สถานะที่ต้องการเปลี่ยน :</Text>
      <View className='ml-5'>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          onPress={() => { }}
          buttonColor={'#E17B62'}
          selectedButtonColor={'#E17B62'}
          labelStyle={{ fontSize: 16, color: '#636466', fontFamily: 'Kanit-Regular', marginRight: 20, }}
        />
      </View>
      <Text className='font-kanitRegular text-[#636466] text-lg my-5 ml-5'>หมายเหตุ ส่งให้ผู้แจ้งทราบ :</Text>
      <View className='border border-gray-400 mx-5 rounded-lg'>
        <TextInput
          numberOfLines={10}
          multiline={true}
          style={{ height: 100, textAlignVertical: 'top', }}
        />
      </View>
      <TouchableOpacity onPress={showAlert} className='bg-[#E17B62] flex-row justify-center m-5 p-2 rounded-lg'>
        <Text className='text-white font-kanitRegular text-base'>ยืนยัน</Text>
      </TouchableOpacity>
    </View>
  )
}