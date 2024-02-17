import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

// This is a card that appears on the QuestionScreen
const QuestionForm = () => {

    const [answer, setAnswer] = useState("");
    const [user, setUser] = useState("")
    const [responseSubmitted, setResponseSubmitted] = useState(false)
    const todayQuestion = "Whats your main hobby?"

    
      const testSubmit = async () => {
        try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
          console.log(json.movies);
        } catch (error) {
          console.error(error);
        } finally {
          console.log("done")
        }
      };

      const logAnswers = async() => {
        const response = await fetch('https://nasty-camels-lie.loca.lt/answers');
        const answers = response.json();
        console.log(answers);
        console.log(response)
      };

      const postAnswer = async() => {
        const response = await fetch('https://nasty-camels-lie.loca.lt/add', {
          method: "POST",
          headers: {
            //"Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            {
              "user_id": "1",
          "text_content":"Coffee. It is a hobby, okay!"}
          )
        });
        answers = await response.json();
        console.log(answers);
      };

  return (
    <KeyboardAvoidingView className="p-5 bg-gray-100 mb-2 shadow-lg shadow-black w-4/5 flex rounded-md">
      <Text className="text-center text-lg font-bold">{todayQuestion}</Text>
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
      onPress={logAnswers}
      className="p-2 m-2 bg-blue-200 rounded-lg"><Text className="text-center">Test - console.log answers</Text></TouchableOpacity>

<TouchableOpacity
      onPress={postAnswer}
      className="p-2 m-2 bg-blue-200 rounded-lg"><Text className="text-center">Test - post answers</Text></TouchableOpacity>

      <TouchableOpacity
      onPress={testSubmit}
      className="p-2 m-2 bg-blue-200 rounded-lg"><Text className="text-center">Test - console.log movies</Text></TouchableOpacity>

      {responseSubmitted && (
        <Text className="text-center">Response sent!</Text>
      )}
    </KeyboardAvoidingView>
      
  )
      }

export default QuestionForm