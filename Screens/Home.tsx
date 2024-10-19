import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({ navigation }) => (
  <LinearGradient colors={['#4a90e2', '#50c878']} style={styles.container}>
    <Image source={require('../assets/favicon.png')} style={styles.logo} />
    <Text style={styles.header}>Empowering the Nation</Text>
    <Text style={styles.description}>
      Empowering the Nation provides skills training for domestic workers and gardeners to enhance their marketability and enable them to earn higher wages.
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Courses')}>
      <Text style={styles.buttonText}>View Courses</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
      <Text style={styles.buttonText}>Contact Us</Text>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    color: '#fff',
  },
  button: {
    backgroundColor: '#50c878',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;