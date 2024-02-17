import {View, Text, ScrollView} from 'react-native'
import { useEffect, useState } from 'react';
import ResponseCard from '../components/ResponseCard';

export default function AnswerScreen({navigation}) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async() => {
    const response = await fetch('https://questionanswer.loca.lt/dailyten');
    const answers = await response.json();
    setData(answers)
    setLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, [])

    return (
      <ScrollView>
        <View className="flex-1 flex bg-blue-100 items-center h-screen ">
        <Text className="py-6 px-2 text-xl text-center text-bold">Here's how other people responded to today's question</Text>
        {loading && (
        <Text className="text-center">Responses are loading!</Text>
      )}
      {data && (
        data.map((e) =>
        <ResponseCard
        response={e.text_content}
        user={e.user_id}
        id={e.response_id}
        />
      ))}
        </View>
      </ScrollView>
        
    );
  }