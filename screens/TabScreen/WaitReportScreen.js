import {SafeAreaView, ScrollView, View, RefreshControl} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import Axios from '../../constants/axiosConfig';
import TaskCard from '../../components/TaskCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WaitReportScreen() {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  const getWaitReport = async () => {
    const type = await getEmpType();
    Axios.post('/task/getByType',{
      type: type,
      status : 0
    })
      .then(res => {
        setTasks(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getEmpType = async () => AsyncStorage.getItem('empType');

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
