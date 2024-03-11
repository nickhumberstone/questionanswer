import {View, Text} from 'react-native'
import QuestionForm from '../components/QuestionForm';

export default function QuestionScreen() {
    return (
      <View className="flex-1 flex bg-blue-100 items-center justify-center h-screen w-screen">
        <Text className="py-6 px-2 text-xl text-center text-bold">Today's Question:</Text>
        <QuestionForm/>
        <Text className="p-4 text-gray-700 mx-4">Answer the question above to enter the pool. Your answer must be 140 characters of less.</Text>

      </View>
    );
  }