import {SafeAreaView, ScrollView, View, RefreshControl} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import Axios from '../../constants/axiosConfig';
import TaskCard from '../../components/TaskCard';

export default function WaitReportScreen() {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getWaitReport = () => {
    Axios.get('/waitReport')
      .then(res => {
        setTasks(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getWaitReport();
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  useEffect(() => {
    getWaitReport();
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
