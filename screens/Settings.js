import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  Linking,
  Modal
} from 'react-native';
import { Ionicons, Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import gadonski from '../assets/images/gadonski_img.png'
import UserProfileModal from '../modals/UserProfileModal';
import UserChangePassModal from '../modals/UserChangePassModal';


const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [showChangePassModal, setShowChangePassModal] = useState(false);
  const navigation = useNavigation();

  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  //navigations
   const handleUserProfile = () => setProfileVisible(true);

    const handleLogoutConfirm = () => {
    setLogoutModalVisible(false);
    navigation.replace('Login'); // or navigate if you prefer
    };

    const handleChangePassword = () => setPassVisible(true);


  const handleWhatsApp = () => {
    Linking.openURL('https://wa.me/'); // Add number later if needed
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Settings</Text>

      {/* User Info */}
      <View style={styles.userSection}>
        <Image
            source={gadonski}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.username}>Christian Gadon</Text>
        </View>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Feather name="external-link" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Settings Options */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionRow} onPress={handleUserProfile}>
          <Ionicons name="person-outline" size={20} color="#333" />
          <UserProfileModal visible={profileVisible} onClose={() => setProfileVisible(false)} />
          <Text style={styles.optionText}>User Profile</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" style={styles.arrow} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow} onPress={() => setShowChangePassModal(true)}>
        <Feather name="lock" size={20} color="#333" />
        <UserChangePassModal visible={showChangePassModal} onClose={() => setShowChangePassModal(false)} />
        <Text style={styles.optionText}>Change Password</Text>
        <Ionicons name="chevron-forward" size={18} color="#999" style={styles.arrow} />
        </TouchableOpacity>


        <TouchableOpacity style={styles.optionRow}>
          <AntDesign name="questioncircleo" size={20} color="#333" />
          <Text style={styles.optionText}>FAQs</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" style={styles.arrow} />
        </TouchableOpacity>

        <View style={styles.optionRow}>
          <MaterialIcons name="notifications-none" size={20} color="#333" />
          <Text style={styles.optionText}>Push Notification</Text>
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            trackColor={{ false: '#ccc', true: '#4caf50' }}
            thumbColor="#fff"
            style={styles.switch}
          />
        </View>

        <TouchableOpacity style={styles.optionRow} onPress={() => setLogoutModalVisible(true)}>
          <MaterialIcons name="logout" size={20} color="#333" />
          <Text style={styles.optionText}>Logout</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" style={styles.arrow} />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footerBox}>
        <Text style={styles.footerText}>
          If you have any other query you{'\n'}can reach out to us.
        </Text>
        <TouchableOpacity onPress={handleWhatsApp}>
          <Text style={styles.link}>WhatsApp Us</Text>
        </TouchableOpacity>
      </View>
        <Modal
  transparent={true}
  visible={logoutModalVisible}
  animationType="fade"
  onRequestClose={() => setLogoutModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Confirm Logout</Text>
      <Text style={styles.modalMessage}>Are you sure you want to logout?</Text>
      <View style={styles.modalButtons}>
        <TouchableOpacity style={styles.modalBtnCancel} onPress={() => setLogoutModalVisible(false)}>
          <Text style={styles.modalBtnText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalBtnLogout} onPress={handleLogoutConfirm}>
          <Text style={styles.modalBtnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  welcomeText: {
    fontSize: 14,
    color: '#666',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 25,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    flex: 1,
  },
  arrow: {
    marginRight: 5,
  },
  switch: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  footerBox: {
    backgroundColor: '#f1faff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  link: {
    color: '#0066cc',
    fontWeight: 'bold',
    fontSize: 15,
  },
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.4)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  backgroundColor: '#fff',
  padding: 25,
  borderRadius: 12,
  width: '80%',
  alignItems: 'center',
},
modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
},
modalMessage: {
  fontSize: 16,
  color: '#333',
  textAlign: 'center',
  marginBottom: 20,
},
modalButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
},
modalBtnCancel: {
  flex: 1,
  marginRight: 10,
  backgroundColor: '#ccc',
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
},
modalBtnLogout: {
  flex: 1,
  marginLeft: 10,
  backgroundColor: '#f44336',
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
},
modalBtnText: {
  color: '#fff',
  fontWeight: 'bold',
},
});
