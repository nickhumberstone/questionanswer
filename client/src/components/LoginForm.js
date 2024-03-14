import { Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth0 } from 'react-native-auth0';

const LoginForm = () => {
    const {authorize} = useAuth0();
    const {user} = useAuth0();
  
const login = async () => {
  try {
      await authorize();
  } catch (e) {
      console.log(e);
  }
};

  return (
  <KeyboardAvoidingView className="p-5 bg-gray-100 mb-2 shadow-lg shadow-black w-4/5 flex rounded-md">

  <TouchableOpacity
      onPress={login}
      className="p-2 m-2 bg-blue-200 rounded-lg">
        <Text className="text-center">Sign in with Auth0</Text>
  </TouchableOpacity>
  <TouchableOpacity
      onPress={login}
      className="p-2 m-2 bg-blue-200 rounded-lg">
        <Text className="text-center">Sign up with Auth0</Text>
  </TouchableOpacity>
    </KeyboardAvoidingView>
      
  )
      }

export default LoginForm