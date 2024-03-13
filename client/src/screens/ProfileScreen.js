import {View, Text, Image, TouchableOpacity } from 'react-native'
import { useAuth0 } from 'react-native-auth0'
import { useState, useEffect } from 'react';
import ResponseCard from '../components/ResponseCard';



export default function ProfileScreen() {
  const {user, error} = useAuth0();
  const user_id = user.sub;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const profiledata = {
    name: "Nick Humberstone",
    age: "27",
    imageURL: "client/src/assets/images/NickHumberstoneProfilePicture.jpeg",
    email: "nick@email.com"
  }
  
  const editProfile = () => {
    console.log("edit profile pressed")
  }

  const {clearSession} = useAuth0();

  const logout = async () => {
      try {
          await clearSession();
      } catch (e) {
          console.log(e);
      }
  };

  const fetchData = async(user) => {
    console.log("fetchMyAnswers triggered")
        const response = await fetch(`https://questionanswer-a72d97c4c83c.herokuapp.com/myanswers?`+ new URLSearchParams({user_id : user_id}))
        const answers = await response.json();
    setData(answers)
    setLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, [])

    return (
      <View className="flex-1 items-center justify-center bg-slate-200">
        <View className="bg-slate-100 items-center p-2 rounded-md shadow-lg shadow-black ">
        <Image className="w-1/2 aspect-square m-4 h-40" source={require('../assets/images/NickHumberstoneProfilePicture.jpeg')}/>
        <Text className="text-3xl p-2">{profiledata.name}</Text>
        <Text className="text-xl p-1">Age: {profiledata.age}</Text>
        <Text className="text-xl p-1">Email: {profiledata.email}</Text>

        {user && <Text>Logged in as {user.name}</Text>}
        {user && <Text>User ID is {user.sub}</Text>}
        {user && <Text> picture link is {user.picture}</Text>}
        {user && <Text> email is {user.email}</Text>}
            {!user && <Text>Not logged in</Text>}
            {error && <Text>{error.message}</Text>}
        </View>
        <TouchableOpacity className="mt-6 shadow-lg rounded-lg bg-blue-200 w-1/2 h-10 items-center justify-center" onPress={editProfile}><Text>Edit Profile</Text></TouchableOpacity>

        {data && (
        data.map((e) =>
        <ResponseCard
        response={e.text_content}
        user={e.user_id}
        key={e.response_id}
        />
      ))}

        <TouchableOpacity className="mt-6 shadow-lg rounded-lg bg-blue-200 w-1/2 h-10 items-center justify-center" onPress={logout}><Text>Log Out</Text></TouchableOpacity>
      </View>
    );
  }