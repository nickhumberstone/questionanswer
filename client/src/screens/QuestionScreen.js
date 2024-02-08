import {View, Text} from 'react-native'
import QuestionForm from '../components/QuestionForm';

export default function QuestionScreen({navigation}) {
    return (
      <View className="flex items-center bg-gray-300 h-screen w-screen">
        <Text className="text-lg p-4">Today's Question:</Text>
        <QuestionForm/>
        <Text className="p-4 text-gray-700 mx-4">Answer the question above to enter the pool. Your answer must be 140 characters of less.</Text>

      </View>
    );
  }