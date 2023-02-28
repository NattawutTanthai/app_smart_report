import { View, SafeAreaView, ScrollView } from 'react-native'
import Axios from '../../constants/axiosConfig';
import TaskCard from '../../components/TaskCard';
import { useEffect, useState } from 'react';

export default function SuccessScreen() {
  const [tasks, setTasks] = useState([]);

  const getSuccess = () => {
    Axios.get('/sentTo')
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
            <TaskCard task={{task}} screen="DetailSentTo" />
          </View>
        );
      })}
    </ScrollView>
  </SafeAreaView>
  )
}