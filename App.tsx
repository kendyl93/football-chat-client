import { useEffect, useState } from 'react'
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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
    <View style={styles.container}>
      <FlatList
        data={matches}
        renderItem={({ item }: any) => <Text>{item?.homeTeam?.name} - {item?.awayTeam?.name}</Text>}
      />
      < StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2a2a2',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600
  },
  test: {
    color: 'red'
  }
});

export default App;
