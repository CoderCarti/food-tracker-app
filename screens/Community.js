// screens/Community.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Community = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Community Feed (🌍)</Text>
    </View>
  );
};

export default Community;

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
