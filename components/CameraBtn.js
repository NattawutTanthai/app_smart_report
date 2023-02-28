import { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


export default function CameraBtn(props) {

  const [imageSource, setImageSource] = useState(null);

  const options = {
    includeBase64: true,
  };

  const showCamera = async () => {
    await launchCamera(options, res => {
      if (res.didCancel) return;
      setImageSource(res.assets[0].uri);
      props.base64(res.assets[0].base64)
    });
  };

  const showCameraRoll = async () => {
    await launchImageLibrary(options, res => {
      if (res.didCancel) return;
      setImageSource(res.assets[0].uri);
      props.base64(res.assets[0].base64)
    });
  };

  return (
    <View>
      <View className='flex-row justify-center mt-4'>
        {imageSource ? (
          <Image
            style={{ width: 300, height: 300, borderRadius: 8 }}
            source={{ uri: imageSource }}
          />
        ) : (
          <Image
            style={{ width: 300, height: 300, borderRadius: 8 }}
            source={imageSource ? { uri: imageSource } : require('../assets/images/img_unknow_large.png')}
          />
        )
        }
      </View>
      <View className='flex-row justify-evenly '>
        <View className='flex-col '>
          <TouchableOpacity onPress={showCamera} className="bg-[#2F80ED] flex-row justify-center m-5 p-2 rounded-lg" >
            <Text className='font-kanitRegular text-white text-base'>ถ่ายรูป</Text>
          </TouchableOpacity>
        </View>
        <View className='flex-col'>
          <TouchableOpacity onPress={showCameraRoll} className="bg-[#2F80ED] flex-row justify-center m-5 p-2 rounded-lg">
            <Text className='font-kanitRegular text-white text-base'>เลือกจากอัลบั้ม</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
