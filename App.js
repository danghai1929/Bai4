import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.S1}>
        <Text>Square 1</Text>
      </View>
      <View style={styles.S2}>
        <Text>Square 2</Text>
      </View>
      <View style={styles.S3}>
        <Text>Square 3</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  S1: {
    backgroundColor: 'red',
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  S2: {
    backgroundColor: 'green',
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  S3: {
    backgroundColor: 'silver',
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
