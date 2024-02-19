import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

// This is a card that appears on the QuestionScreen
const QuestionForm = () => {

    const [answer, setAnswer] = useState("");
    const [user, setUser] = useState("1")
    const [responseSubmitted, setResponseSubmitted] = useState(false)
    const [question, setQuestion] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDailyQuestion = async() => {
      const response = await fetch('https://questionanswer.loca.lt/dailyQuestion')
      const output = await response.json()
    setQuestion(output[0].dailyQuestion)
    setLoading(false)
  };

  useEffect(() => {
    fetchDailyQuestion();
  }, [])

        const postAnswer = async() => {
        const data = {"user_id": user, "text_content" : answer}
        const response = await fetch('https://questionanswer.loca.lt/add', {
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
    <KeyboardAvoidingView className="p-5 bg-gray-100 mb-2 shadow-lg shadow-black w-4/5 flex rounded-md">
      {loading && (<Text>LOADINGGGG</Text>)}
      {question && (<Text className="text-center text-lg font-bold">{question}</Text>)}
      <TextInput
      className="bg-blue-300 m-2 rounded-lg text-center p-5"
      placeholder='User ID'
      value={user}
      onChangeText={setUser}
      maxLength={2}
      multiline={true}
      />
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
      
  )
      }

export default QuestionForm