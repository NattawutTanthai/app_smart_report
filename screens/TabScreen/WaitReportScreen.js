import {SafeAreaView, ScrollView, View} from 'react-native';
import {useEffect, useState} from 'react';
import Axios from '../../constants/axiosConfig';
import TaskCard from '../../components/TaskCard';

export default function WaitReportScreen() {
  const [tasks, setTasks] = useState([]);

  const getWaitReport = () => {
    Axios.get('/waitReport')
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
              <TaskCard task={{task}} screen="DetailWaitReport" />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
