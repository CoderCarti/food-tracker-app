// screens/MyMeals.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyMeals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Meals Screen (🍱)</Text>
    </View>
  );
};

export default MyMeals;

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
