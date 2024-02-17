import {View, Text, ScrollView} from 'react-native'
import { useEffect, useState } from 'react';
import ResponseCard from '../components/ResponseCard';


const responses = [
  {
    response: "I like swimming",
    user: "Roland",
    key: "1"
  },
  {
    response: "Board Games",
    user: "Wendy",
    key:"2",
  },
  {
    response: "I really enjoy going to Toastmasters, it's a public speaking club where you learn and develop public speaking",
    user: "Skids",
    key:"3",
  }
]
export default function AnswerScreen({navigation}) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async() => {
    const response = await fetch('https://nasty-camels-lie.loca.lt/answers');
    const answers = await response.json();
    setData(answers)
    console.log(answers);
    setLoading(false)
    console.log(response)
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
        id={e.key}/>
      ))}

        
        </View>
      </ScrollView>
        
    );
  }
  
  // {responses.map((e) =>
        //   <ResponseCard
        //   response={e.response}
        //   user={e.user}
        //   id={e.key}/>
        // )}