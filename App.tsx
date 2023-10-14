import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SingleMatchScreen } from './src/views/SingleMatchScreen';
import { HomeScreen } from './src/views/Home';
import { useGetAppData } from './hooks';
import { MatchRow } from './src/shared/components/MatchRow';
import { Team } from './src/shared/types';
import { LoginScreen } from './src/views/LoginScreen';
import { useState } from 'react';
import { Button, View } from 'react-native';


type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SingleMatch: { homeTeam: Team, awayTeam: Team };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const matches = useGetAppData()

  const handeLogIn = () => {
    setIsLoggedIn(true)
  }


  const handeLogOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <NavigationContainer >
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              options={{
                title: `Hello`,
                headerRight: () => (
                  <Button title="logout" onPress={handeLogOut} />
                ),
              }}>
              {(props) => <HomeScreen {...props} matches={matches} userName={userName} />}
            </Stack.Screen>
            <Stack.Screen name="SingleMatch" options={({ route }) => ({
              headerTitle: (props) => <MatchRow {...props} homeTeam={route.params.homeTeam} awayTeam={route.params.awayTeam} />
            })}>
              {(props) => <SingleMatchScreen {...props} userName={userName} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              options={{
                title: 'Login page'
              }}
            >
              {(props) => <LoginScreen {...props} setIsLoggedIn={handeLogIn} setUserName={setUserName} />}
            </Stack.Screen>

          </>
        )}

      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer >
  );
}

export default App;
