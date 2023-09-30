import { useEffect, useState } from 'react'
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './views/HomeScreen'
import SingleMatchScreen from './views/SingleMatchScreen';
import socket from "./utils/socket";

export const API_URL = `https://bd57-83-45-29-51.ngrok-free.app`; // it hsoul go to env var.

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const getAPIdata = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/chatRoom/redisChatRooms`); // put IP instead of localhost
        setMatches(response?.data?.data?.matches);
        response?.data?.data?.matches.map((match: any) => {
          console.log({ MATCH: `${match?.homeTeam?.name} - ${match?.awayTeam?.name}` })
          socket.emit("createRoom", `${match?.homeTeam?.name} - ${match?.awayTeam?.name}`);
        })
      } catch (error) {
        console.error(error)
      }
    }

    getAPIdata();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
        >
          {(props) => <HomeScreen {...props} matches={matches} />}
        </Stack.Screen>
        <Stack.Screen name="SingleMatch" component={SingleMatchScreen} />
      </Stack.Navigator>

      < StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
