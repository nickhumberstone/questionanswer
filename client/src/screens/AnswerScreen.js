import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import { useEffect, useState } from 'react';
import ResponseCard from '../components/ResponseCard';
import { useAuth0 } from 'react-native-auth0';

export default function AnswerScreen() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const {user} = useAuth0();
  const user_id = user.sub;
  
  const fetchData = async(user) => {
        const response = await fetch(`https://questionanswer.loca.lt/dailyanswers?`+ new URLSearchParams({user_id : user_id}))
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
        key={e.response_id}
        />
      ))}

      <TouchableOpacity
      onPress={fetchData}
      className="p-2 m-2 bg-blue-200 rounded-lg"><Text className="text-center">Check for, and randomise new responses</Text></TouchableOpacity>

      
        </View>
      </ScrollView>
        
    );
  }