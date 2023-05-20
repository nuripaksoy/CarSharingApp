import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Shadow from '../styles/Shadow';

function Settings() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleChangePassword = () => {
    // Handle change password logic
  };

  const handleToggleNotifications = () => {
    // Handle toggle notifications logic
  };

  return (
    <View style={styles.container}>

      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingItem} onPress={handleChangePassword}>
          <MaterialCommunityIcons name="lock-reset" size={20} color="#bb5050" />
          <Text style={styles.settingText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={handleToggleNotifications}>
          <MaterialCommunityIcons name="bell" size={20} color="#bb5050" />
          <Text style={styles.settingText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={toggleModal}>
          <MaterialCommunityIcons name="shield-lock" size={20} color="#bb5050" />
          <Text style={styles.settingText}>Privacy Policy</Text>
        </TouchableOpacity>

        <Modal visible={isModalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Privacy Policy</Text>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nunc euismod,
              malesuada felis id, dictum lorem. In viverra velit mi, eget auctor turpis ultrices
              sed.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  settingsContainer: {
    alignItems: "center",
    width: "100%",
    ...Shadow.shadow,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    ...Shadow.shadow,
    borderRadius: 8,
    padding: 16,
    width: "100%",
    backgroundColor: "white",
  },
  settingText: {
    marginLeft: 16,
    color: "black",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#bb5050",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
    color: "#bb5050",
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#bb5050",
  },
});

export default Settings;
