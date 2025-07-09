// screens/PostMeal.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const PostMeal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const closeModal = () => {
  navigation.goBack();
};

  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    // TODO: Submit to backend
    console.log({ image, caption });
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.header}>Create Meal Post</Text>

          <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
            {image ? (
              <Image source={{ uri: image }} style={styles.imagePreview} />
            ) : (
              <Ionicons name="image" size={40} color="#888" />
            )}
            <Text style={styles.imageText}>
              {image ? 'Change Photo' : 'Add Meal Photo'}
            </Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Write a caption..."
            value={caption}
            onChangeText={setCaption}
            multiline
          />

          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default PostMeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
  imageText: {
    fontSize: 16,
    color: '#4caf50',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  postButton: {
    backgroundColor: '#4caf50',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
    fontSize: 16,
  },
});
