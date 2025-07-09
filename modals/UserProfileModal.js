import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import defaultAvatar from '../assets/images/gadonski_img.png'; // fallback/default

const UserProfileModal = ({ visible, onClose }) => {
  const [imageUri, setImageUri] = useState(null);
  const [name, setName] = useState('Christian Gadon');
  const [tempName, setTempName] = useState(name);
  const [tempImage, setTempImage] = useState(null);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setTempImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    setImageUri(tempImage || imageUri);
    setName(tempName);
    onClose();
  };

  const handleCancel = () => {
    setTempImage(null);
    setTempName(name);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={handleCancel}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeButton} onPress={handleCancel}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePickImage}>
            <Image
              source={{ uri: tempImage || imageUri || Image.resolveAssetSource(defaultAvatar).uri }}
              style={styles.avatar}
            />
            <Text style={styles.changePhotoText}>Tap to change photo</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.nameInput}
            value={tempName}
            onChangeText={setTempName}
            placeholder="Enter your name"
          />

          <TextInput
            style={styles.nameInput}
            value="gadonchristian01@gmail.com"
            onChangeText={setTempName}
            placeholder="Enter your email"
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UserProfileModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 10,
  },
  changePhotoText: {
    fontSize: 12,
    color: '#888',
    marginTop: 8,
    marginBottom: 20,
  },
  nameInput: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  saveBtn: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  cancelBtn: {
    backgroundColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
