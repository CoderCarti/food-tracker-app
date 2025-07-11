// screens/LogMeal.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogMeal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log Meal Screen (🥗)</Text>
    </View>
  );
};

export default LogMeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
