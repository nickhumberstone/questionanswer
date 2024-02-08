import {View, Text, ScrollView} from 'react-native'
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
  },
  {
    response: "I like going for walks in the park and feeding ducks",
    user: "Zoey",
    key:"5",
  },
  {
    response: "Socialising",
    user: "Agnes",
    key:"6",
  },
  {
    response: "I think the word hobbies is dumb",
    user: "Rex",
    key:"7",
  },
  {
    response: "idek bro",
    user: "Akachi",
    key:"8",
  },
  {
    response: "I like swimming in the sea",
    user: "Jim",
    key:"9",
  },
  {
    response: "I like swimming sometimes",
    user: "User123",
    key:"10",
  },

]
export default function AnswerScreen({navigation}) {
    return (
      
      <ScrollView>
        <View className="flex-1 flex bg-blue-100 items-center justify-center">
        <Text className="py-6 px-2 text-xl text-center text-bold">Here's how other people responded to today's question</Text>
        {responses.map((e) =>
          <ResponseCard
          response={e.response}
          user={e.user}
          id={e.key}/>
        )}
        </View>
      </ScrollView>
        
    );
  }
  