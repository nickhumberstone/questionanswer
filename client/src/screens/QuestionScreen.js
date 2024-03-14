import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import { useState, useEffect } from 'react';
import { useAuth0 } from 'react-native-auth0';

export default function QuestionScreen() {

  const [answer, setAnswer] = useState("");
  const [responseSubmitted, setResponseSubmitted] = useState(false)
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
const {user} = useAuth0();
const user_id = user.sub;
// ServerURL to be kept private using variables in future
const serverURL = "https://questionanswer-a72d97c4c83c.herokuapp.com"

useEffect(() => {
  fetchDailyQuestion();
}, [])

  const fetchDailyQuestion = async() => {
    const response = await fetch(`${serverURL}/dailyQuestion`)
    const output = await response.json()
  setQuestion(output[0].dailyQuestion)
  setLoading(false)
};

      const postAnswer = async() => {
      const data = {"user_id": user.sub, "text_content" : answer}
      console.log("Post request initiated, to /add, with body of: " + data)
      const response = await fetch(`${serverURL}/add`, {
        method: "POST",
        headers: {
          "Accept" : "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      setResponseSubmitted(true);
     console.log("Response sent");
    };

    return (
      <View className="flex-1 flex bg-blue-100 items-center justify-center h-screen w-screen">
        <Text className="py-6 px-2 text-3xl text-center text-bold">Today's Question:</Text>
        
        <KeyboardAvoidingView className="p-5 bg-gray-100 mb-2 shadow-lg shadow-black w-4/5 flex rounded-md">
    {loading && (<Text>~Loading Question~</Text>)}
    {question && (<Text className="text-center text-lg font-bold">{question}</Text>)}
    <TextInput
    className="bg-blue-300 m-2 rounded-lg text-center p-5"
    placeholder='Answer here'
    value={answer}
    onChangeText={setAnswer}
    maxLength={140}
    multiline={true}
    />
    
<TouchableOpacity
    onPress={postAnswer}
    className="p-2 m-2 bg-blue-200 rounded-lg"><Text className="text-center">Send it!</Text></TouchableOpacity>

    {responseSubmitted && (
      <Text className="text-center">Response sent!</Text>
    )}
  </KeyboardAvoidingView>

        <Text className="p-4 text-gray-700 mx-4">Answer the question above to enter the pool. Your answer must be 140 characters of less.</Text>

      </View>
    );
  }