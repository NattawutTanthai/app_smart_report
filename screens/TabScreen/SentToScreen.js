import {View, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import Axios from '../../constants/axiosConfig';
import TaskCard from '../../components/TaskCard';
import {useEffect, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SuccessScreen({route}) {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getSuccess = async () => {
    const type = await getEmpType();
    Axios.post('/task/getSentFrom',{
      type: type,
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
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  useEffect(() => {
    getSuccess();
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
              <TaskCard task={{task}} screen="DetailSentTo" />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
