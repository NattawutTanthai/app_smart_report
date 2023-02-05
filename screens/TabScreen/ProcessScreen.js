import { useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import TaskCard from '../../components/TaskCard';
import Axios from '../../constants/axiosConfig';

export default function ProcessScreen() {
  const [tasks, setTasks] = useState([]);

  const getWaitReport = () => {
    Axios.get('/process')
      .then(res => {
        setTasks(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWaitReport();
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        {tasks.map((task, index) => {
          return (
            <View key={index}>
            <TaskCard task={{task}} screen="DetailProcess" />
            </View>
            );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
