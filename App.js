import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Card from './src/components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.grid}>
      <Card />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  grid:{
      flexDirection: "row",
      flex: 1,
      fontSize: 20,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
  }
});
