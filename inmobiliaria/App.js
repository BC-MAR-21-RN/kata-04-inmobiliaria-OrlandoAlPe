import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import List from './components/list.js';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <List />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
export default App;
