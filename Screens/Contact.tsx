import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const Contact = () => {
  const venues = [
    { id: 1, name: 'Venue 1', address: 'Address 1, Johannesburg' },
    { id: 2, name: 'Venue 2', address: 'Address 2, Johannesburg' },
    { id: 3, name: 'Venue 3', address: 'Address 3, Johannesburg' },
  ];

  return (
    <ScrollView style={styles.containerLight}>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.contactInfo}>Phone: (012) 345-6789</Text>
      <Text style={styles.contactInfo}>Email: info@empoweringthenation.co.za</Text>
      <Text style={styles.sectionHeader}>Our Venues:</Text>
      {venues.map((venue) => (
        <Text key={venue.id} style={styles.venueInfo}>{venue.id}. {venue.name}: {venue.address}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  contactInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: '#4a90e2',
  },
  venueInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});

export default Contact;