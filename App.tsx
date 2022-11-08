import { useEffect, useState } from 'react'
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './views/HomeScreen'
import SingleMatchScreen from './views/SingleMatchScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const getAPIdata = async () => {
      try {
        const response = await axios.get('http://192.168.0.195:4001/api/chatRoom/test'); // put IP instead of localhost
        setMatches(response?.data?.data?.matches)
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
