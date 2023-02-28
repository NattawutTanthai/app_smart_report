import { View, SafeAreaView, ScrollView ,Text } from 'react-native'
import Axios from '../../constants/axiosConfig';
import TaskCard from '../../components/TaskCard';
import { useEffect, useState } from 'react';

export default function SuccessScreen() {
  const [tasks, setTasks] = useState([]);

  const getSuccess = () => {
    Axios.get('/success')
      .then(res => {
        setTasks(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSuccess();
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
    <ScrollView>
      {tasks.map((task, index) => {
        return (
          <View key={index}>
            <TaskCard task={{task}} screen="DetailSuccess" />
          </View>
        );
      })}
    </ScrollView>
  </SafeAreaView>
  )
}