import {View, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import Axios from '../../constants/axiosConfig';
import TaskCard from '../../components/TaskCard';
import {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SuccessScreen({route}) {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getEmpType = async () => AsyncStorage.getItem('empType');

  const getSuccess = async () => {
    const type = await getEmpType();
    Axios.post('/task/getByType', {
      type: type,
      status: 2,
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
    getSuccess();
  }, [refreshing, route]);

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {tasks.map((task, index) => {
          return (
            <View key={index}>
              <TaskCard task={{task}} screen="DetailSuccess" />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
