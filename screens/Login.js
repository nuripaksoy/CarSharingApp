import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Shadow from '../styles/Shadow';

function Login() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    // admin for testing
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('HomeStackNavigator');
      return;
    }

    try {
      const response = await fetch('https://192.168.1.57:7777/api/user');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log('Failed to fetch ticket information');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleRegister = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSave = async () => {
    // Perform the user registration logic here, e.g., call an API endpoint
    // Pass the registration data to the registration endpoint
    try {
      const response = await fetch('https://192.168.236.254:5060/api/User', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: username,
          fullName: fullName,
          password: password,
          phoneNumber: phoneNumber
        }),
      });

      if (response.ok) {
        // Handle successful registration
        setModalVisible(false);
        // Optionally, you can clear the input fields here
      } else {
        // Handle registration error, e.g., display an error message
        console.log('Registration failed');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>
          <MaterialCommunityIcons name="account" size={24} color="#bb5050" /> Login
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <View style={{ height: 8 }} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={{ height: 8 }} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <MaterialCommunityIcons name="login" size={20} color="#fff" />
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <MaterialCommunityIcons name="account-plus" size={20} color="#fff" />
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={modalVisible} animationType="fade">
          <View style={styles.modalContainer}>
            < View style={styles.form}>
              <Text style={styles.modalTitle}>
                <MaterialCommunityIcons name="account-plus" size={24} color="#bb5050" /> Registration</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={fullName}
                onChangeText={(text) => setFullName(text)}
              />
              <View style={{ height: 8 }} />
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
              <View style={{ height: 8 }} />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
              />
              <View style={{ height: 8 }} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <View style={{ height: 8 }} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                  <MaterialCommunityIcons name="content-save" size={20} color="#fff" />
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleModalClose}>
                  <MaterialCommunityIcons name="close" size={20} color="#fff" />
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 8,
  },
  input: {
    width: '100%',
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    height: 45,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  button: {
    backgroundColor: '#bb5050',
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
  },
  buttonText: {
    marginLeft: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  form: {
    width: '100%',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff',
    ...Shadow.shadow,
  },
});

export default Login;
