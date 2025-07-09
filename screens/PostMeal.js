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
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import defaultAvatar from '../assets/images/gadonski_img.png'; // fallback/default

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
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Create Meal Post</Text>
            <TouchableOpacity onPress={closeModal}>
              <Feather name="x" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          {/* User Info */}
          <View style={styles.userRow}>
            <Image
              source={defaultAvatar}
              style={styles.avatar}
            />
            <Text style={styles.username}>Christian Gadon</Text>
          </View>

          {/* Caption Input */}
          <TextInput
            style={styles.input}
            placeholder="What's your meal today?"
            placeholderTextColor="#999"
            value={caption}
            onChangeText={setCaption}
            multiline
          />

          {/* Image Preview */}
          {image && (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          )}

          {/* Actions */}
          <View style={styles.actionsRow}>
            <TouchableOpacity onPress={handleImagePick} style={styles.iconButton}>
              <Ionicons name="image" size={22} color="#4caf50" />
              <Text style={styles.iconText}>Photo</Text>
            </TouchableOpacity>
          </View>

          {/* Buttons */}
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
  modalContent: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    minHeight: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 16,
    marginBottom: 15,
  },
  imagePreview: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  actionsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
    marginBottom: 25,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  iconText: {
    marginLeft: 6,
    fontSize: 15,
    color: '#4caf50',
  },
  postButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelText: {
    marginTop: 18,
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});
