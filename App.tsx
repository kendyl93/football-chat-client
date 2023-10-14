import { useEffect, useState } from 'react'
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './views/HomeScreen'
import SingleMatchScreen from './views/SingleMatchScreen';
import socket from "./utils/socket";
import EmptyResult from './views/EmptyResult';

export const API_URL = `http://192.168.1.35`; // need to put ip from ifconfig

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const getAPIdata = async () => {
      try {
        const response = await axios.get(`${API_URL}:4001/api/chatRoom/redisChatRooms`); // put IP instead of localhost
        setMatches(response?.data?.data?.matches);
      } catch (error) {
        console.error(error)
      }
    }

    getAPIdata();
  }, [])

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
        >
          {(props) => <HomeScreen {...props} matches={matches} />}
        </Stack.Screen>
        <Stack.Screen name="SingleMatch" component={SingleMatchScreen} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
