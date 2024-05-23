import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import TodoScreen from './src/screen/TodoScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {backgroundColor: '#f4dcf5', flex: 1 }
})
