import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import LoginForm from '../components/LoginForm';
import LogoutButton from '../components/Buttons/LogoutButton';

export default function LoginScreen({navigation}) {

    return (
      <ScrollView>
        <View className="flex-1 flex bg-blue-100 items-center h-screen ">
        <Text className="py-6 px-2 text-xl text-center text-bold">Login to join the conversation</Text>
<LoginForm/> 
<LogoutButton/>     
        </View>
      </ScrollView>
        
    );
  }