import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import QuestionScreen from './src/screens/QuestionScreen';
import AnswerScreen from './src/screens/AnswerScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Question" component={QuestionScreen} />
      <Tab.Screen name="Answer" component={AnswerScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
     {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
