import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// Dummy data (replace with API later)
const posts = [
  {
    id: '1',
    username: 'johndoe',
    image: 'https://via.placeholder.com/300',
    caption: 'Grilled chicken with veggies 🥗',
  },
  {
    id: '2',
    username: 'janedoe',
    image: 'https://via.placeholder.com/300',
    caption: 'Morning smoothie bowl 🍓',
  },
  {
    id: '3',
    username: 'janedoe',
    image: 'https://via.placeholder.com/300',
    caption: 'Morning smoothie bowl 🍓',
  },
];

const Homepage = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.username}>@{item.username}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Community Feed 🍽️</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginBottom: 25,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  caption: {
    marginTop: 8,
    fontSize: 15,
  },
});
