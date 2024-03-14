import {View, Text, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native'
import LoginForm from '../components/LoginForm';

export default function LoginScreen() {

    return (
      
      
        <View className="flex-1 flex bg-blue-100 items-center justify-center">
        <View className="">
        <Text className="py-6 px-2 text-4xl text-center text-bold">QuestionAnswer</Text>
        <Text className="text-xl">How it works:</Text>
        <Text className="text-xl">Each day you will be asked a question. What will your answer be?</Text>
        <Text>Once you've answered you'll be able to see how other people answered todays question, and reflect on how you answered the same question one week ago.</Text>
        </View>
<LoginForm className=""/> 
        </View>
       
      
    );
  }