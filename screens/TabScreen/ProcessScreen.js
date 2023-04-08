import {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, RefreshControl} from 'react-native';
import TaskCard from '../../components/TaskCard';
import Axios from '../../constants/axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProcessScreen({route}) {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getEmpType = async () => AsyncStorage.getItem('empType');

  const getWaitReport = async () => {
    const type = await getEmpType();
    Axios.post('/task/getByType',{
      type: type,
      status : 1
    })
      .then(res => {
        setTasks(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  useEffect(() => {
    getWaitReport();
  }, [refreshing , route]);

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
