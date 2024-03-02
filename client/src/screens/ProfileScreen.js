import {View, Text, Image, TouchableOpacity } from 'react-native'
import { useAuth0 } from 'react-native-auth0'

export default function ProfileScreen({navigation}) {
  const {user, error} = useAuth0();

  const data = {
    name: "Nick Humberstone",
    age: "27",
    imageURL: "client/src/assets/images/NickHumberstoneProfilePicture.jpeg",
    email: "nick@email.com"
  }
  
  const editProfile = () => {
    console.log("edit profile pressed")
  }

    return (
      <View className="flex-1 items-center justify-center bg-slate-200">
        <View className="bg-slate-100 items-center p-2 rounded-md shadow-lg shadow-black ">
        <Image className="w-1/2 aspect-square m-4 h-40" source={require('../assets/images/NickHumberstoneProfilePicture.jpeg')}/>
        <Text className="text-3xl p-2">{data.name}</Text>
        <Text className="text-xl p-1">Age: {data.age}</Text>
        <Text className="text-xl p-1">Email: {data.email}</Text>

        {user && <Text>Logged in as {user.name}</Text>}
            {!user && <Text>Not logged in</Text>}
            {error && <Text>{error.message}</Text>}
        </View>
        <TouchableOpacity className="mt-6 shadow-lg rounded-lg bg-blue-200 w-1/2 h-10 items-center justify-center" onPress={editProfile}><Text>Edit Profile</Text></TouchableOpacity>
      </View>
    );
  }