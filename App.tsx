import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleMatchScreen from './src/views/SingleMatchScreen/SingleMatchScreen';
import { HomeScreen } from './src/views/Home';
import { useGetAppData } from './hooks';
import { MatchRow } from './src/shared/components/MatchRow';
import { Team } from './src/shared/types';


type RootStackParamList = {
  Home: undefined;
  SingleMatch: { homeTeam: Team, awayTeam: Team };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const matches = useGetAppData()

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
        >
          {(props) => <HomeScreen {...props} matches={matches} />}
        </Stack.Screen>
        <Stack.Screen name="SingleMatch" options={({ route }) => ({
          headerTitle: (props) => <MatchRow {...props} homeTeam={route.params.homeTeam} awayTeam={route.params.awayTeam} />
        })} component={SingleMatchScreen} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
