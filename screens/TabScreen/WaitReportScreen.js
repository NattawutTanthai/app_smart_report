import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Axios from '../../constants/axiosConfig';
import TaskCard from '../../components/TaskCard';


export default function WaitReportScreen() {
  const navigation = useNavigation();
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
            <TaskCard task={{task}} screen="DetailWaitReport" />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
