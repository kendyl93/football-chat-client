import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Fotball chat client TS</Text>
      <Text> footer TS </Text>
      <StatusBar style="auto" />
    </View>
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
