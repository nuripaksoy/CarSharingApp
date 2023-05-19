import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {

    // admin login for testing
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('HomeStackNavigator');
      return;
    }

    // Perform the login logic here, e.g., call an API endpoint
    // Pass the username and password to the login endpoint
    try {
      const response = await fetch('http://localhost:5060/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful login
        navigation.navigate('HomeStackNavigator');
      } else {
        // Handle login error, e.g., display an error message
        console.log('Login failed');
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
      const response = await fetch('http://localhost:5060/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, fullName, phoneNumber }),
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
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
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
              <Text style={styles.modalTitle}>Registration</Text>
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
    marginBottom: 16,
  },
  input: {
    width: '100%',
    paddingLeft: 8,
    borderWidth: 2,
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
    backgroundColor: '#e91e63',
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
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff',
  },
});

export default Login;
