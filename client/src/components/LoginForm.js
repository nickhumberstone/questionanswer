import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useAuth0 } from 'react-native-auth0';

const LoginForm = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const {authorize} = useAuth0();
    const {user} = useAuth0();
  
const login = async () => {
  try {
      await authorize();
  } catch (e) {
      console.log(e);
  }
};


const createUserProfile = async() => {
  const data = {"user_id": user.sub}
  console.log("Post request initiated, to /newuser, with body of: " + data)
  const response = await fetch('https://questionanswer.loca.lt/newuser', {
    method: "POST",
    headers: {
      "Accept" : "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
 console.log("New user response sent");
};

const openRegistration = () => {
  console.log("Register here - clicked")
}
  //   const fetchDailyQuestion = async() => {
  //     const response = await fetch('https://questionanswer.loca.lt/dailyQuestion')
  //     const output = await response.json()
  //   setQuestion(output[0].dailyQuestion)
  //   setLoading(false)
  // };

  // useEffect(() => {
  //   fetchDailyQuestion();
  // }, [])

  //       const postAnswer = async() => {
  //       const data = {"user_id": user, "text_content" : answer}
  //       const response = await fetch('https://questionanswer.loca.lt/add', {
  //         method: "POST",
  //         headers: {
  //           "Accept" : "application/json",
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(data)
  //       });
  //       setResponseSubmitted(true);
  //      console.log("Response sent");
  //     };

  return (
    <KeyboardAvoidingView className="p-5 bg-gray-100 mb-2 shadow-lg shadow-black w-4/5 flex rounded-md">

      {/* <TextInput
      className="bg-blue-300 m-2 rounded-lg text-center p-5"
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
      maxLength={100}
      />
      <TextInput
      className="bg-blue-300 m-2 rounded-lg text-center p-5"
      placeholder='Password'
      value={password}
      onChangeText={setPassword}
      maxLength={100}
      /> */}
      
<TouchableOpacity
      onPress={login}
      className="p-2 m-2 bg-blue-200 rounded-lg"><Text className="text-center">Log in with Auth0</Text></TouchableOpacity>

      <Text onPress={openRegistration}>Don't have an account? Register here.</Text>

      <TouchableOpacity
      onPress={createUserProfile}
      className="p-2 m-2 bg-blue-200 rounded-lg"><Text className="text-center">Create User Profile</Text></TouchableOpacity>

    </KeyboardAvoidingView>
      
  )
      }

export default LoginForm