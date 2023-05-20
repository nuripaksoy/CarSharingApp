import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Profile() {
  const [isEditFullNameModalVisible, setEditFullNameModalVisible] = useState(false);
  const [isEditPhoneNumberModalVisible, setEditPhoneNumberModalVisible] = useState(false);
  const [isCarInformationModalVisible, setCarInformationModalVisible] = useState(false);
  const [isTicketsModalVisible, setTicketsModalVisible] = useState(false);
  const [fullName, setFullName] = useState("John Doe");
  const [phoneNumber, setPhoneNumber] = useState("123456789");
  const rank = "Driver"; // Read-only rank

  const toggleEditFullNameModal = () => {
    setEditFullNameModalVisible(!isEditFullNameModalVisible);
  };

  const toggleEditPhoneNumberModal = () => {
    setEditPhoneNumberModalVisible(!isEditPhoneNumberModalVisible);
  };

  const toggleCarInformationModal = () => {
    setCarInformationModalVisible(!isCarInformationModalVisible);
  };

  const toggleTicketsModal = () => {
    setTicketsModalVisible(!isTicketsModalVisible);
  };

  const handleSaveFullName = (newFullName) => {
    // Perform API call to update full name
    setFullName(newFullName);
    toggleEditFullNameModal();
  };

  const handleSavePhoneNumber = (newPhoneNumber) => {
    // Perform API call to update phone number
    setPhoneNumber(newPhoneNumber);
    toggleEditPhoneNumberModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <TouchableOpacity style={styles.infoItem} onPress={toggleEditFullNameModal}>
          <MaterialCommunityIcons name="account" size={20} color="#e91e63" />
          <Text style={styles.infoText}>{fullName}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoItem} onPress={toggleEditPhoneNumberModal}>
          <MaterialCommunityIcons name="phone" size={20} color="#e91e63" />
          <Text style={styles.infoText}>{phoneNumber}</Text>
        </TouchableOpacity>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="badge-account-horizontal" size={20} color="#e91e63" />
          <Text style={styles.infoText}>{rank}</Text>
        </View>
        <TouchableOpacity style={styles.infoItem} onPress={toggleCarInformationModal}>
          <MaterialCommunityIcons name="car" size={20} color="#e91e63" />
          <Text style={styles.infoText}>Car Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoItem} onPress={toggleTicketsModal}>
          <MaterialCommunityIcons name="ticket" size={20} color="#e91e63" />
          <Text style={styles.infoText}>My Tickets</Text>
        </TouchableOpacity>
      </View>

      {/* Edit Full Name Modal */}
      <Modal visible={isEditFullNameModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit Full Name</Text>
          {/* Add text input or any other UI element to edit the full name */}
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleSaveFullName("New Full Name")}
          >
            <Text style={styles.modalButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={toggleEditFullNameModal}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Edit Phone Number Modal */}
      <Modal visible={isEditPhoneNumberModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit Phone Number</Text>
          {/* Add text input or any other UI element to edit the phone number */}
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleSavePhoneNumber("New Phone Number")}
          >
            <Text style={styles.modalButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={toggleEditPhoneNumberModal}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Car Information Modal */}
      <Modal visible={isCarInformationModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Car Information</Text>
          {/* Add car information details or any other UI element */}
          <TouchableOpacity style={styles.modalButton} onPress={toggleCarInformationModal}>
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Tickets Modal */}
      <Modal visible={isTicketsModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>My Tickets</Text>
          {/* List all the tickets from the API or any other UI element */}
          <TouchableOpacity style={styles.modalButton} onPress={toggleTicketsModal}>
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  profileInfo: {
    alignItems: "center",
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
  },
  infoItem: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    padding: 16,
    width: "100%",
  },
  infoText: {
    marginLeft: 16,
    color: "black",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Profile;
