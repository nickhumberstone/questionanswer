import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth0Provider, useAuth0} from 'react-native-auth0';
import LoginScreen from './src/screens/LoginScreen';
import AppStack from './src/stacks/AppStack';
import Router from './src/routes/Router';

const Stack = createNativeStackNavigator();

export default function App() {
  const {user} = useAuth0();
  console.log("app.js says user is " + user)
  return (
    <Auth0Provider domain={"dev-questionanswer.uk.auth0.com"} clientId={"fQQA6iyyjMekTTCBXQ7PRTGp3CzdT4F0"}>
      <Router/>

    {/* <NavigationContainer >
      <Stack.Navigator initialRouteName='AppStack' screenOptions={{headerShown:false}}>
        {user === null ? 
        <Stack.Screen name="Login" component={LoginScreen} />
        :
        <Stack.Screen name="AppStack" component={AppStack} />
        }
      </Stack.Navigator>    
    </NavigationContainer>
     */}
     
    </Auth0Provider>
  );
}