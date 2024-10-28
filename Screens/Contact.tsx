import React from 'react';
import { ScrollView, Text, StyleSheet, View, Dimensions} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';

// Get screen dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Contact = () => {
  const venues = [
    { 
      id: 1, 
      name: 'Kensington Community Centre', 
      address: 'South Kensington, Johannnesburg',
      coordinates: {
        latitude: -26.1924,
        longitude: 28.1159
      }
    },
    { 
      id: 2, 
      name: 'Edenvale Community Centre', 
      address: 'Van Riebeeck Ave, Edenvale, Johannesburg',
      coordinates: {
        latitude: -26.1481,
        longitude: 28.1673
      }
    },
    { 
      id: 3, 
      name: 'Campbell House', 
      address: '2 Campbell St, Waverley, Johannesburg',
      coordinates: {
        latitude: -26.1453,
        longitude: 28.0892
      }
    },
  ];

  return (
    <View style={styles.gradientContainer}>
      <LinearGradient
        colors={['#00264D', '#02386E']}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.header}>Contact Us</Text>
          <Text style={styles.contactInfo}>Phone: (012) 345-6789</Text>
          <Text style={styles.contactInfo}>Email: info@empoweringthenation.co.za</Text>
          <Text style={styles.sectionHeader}>Our Venues:</Text>
          
          {venues.map((venue) => (
            <View key={venue.id} style={styles.venueContainer}>
              <Text style={styles.venueInfo}>
                {venue.id}. {venue.name}: {venue.address}
              </Text>
              <View style={styles.mapContainer}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: venue.coordinates.latitude,
                    longitude: venue.coordinates.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}
                >
                  <Marker
                    coordinate={venue.coordinates}
                    title={venue.name}
                    description={venue.address}
                  />
                </MapView>
              </View>
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  gradient: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    flex: 1,
    padding: windowWidth * 0.05, // 5% of screen width
  },
  header: {
    fontSize: windowWidth * 0.07, // 7% of screen width
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02, // 2% of screen height
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  contactInfo: {
    fontSize: windowWidth * 0.04, // 4% of screen width
    color: '#ffffff',
    marginBottom: windowHeight * 0.015, // 1.5% of screen height
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  sectionHeader: {
    fontSize: windowWidth * 0.05, // 5% of screen width
    fontWeight: 'bold',
    marginTop: windowHeight * 0.02, // 2% of screen height
    marginBottom: windowHeight * 0.01, // 1% of screen height
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  venueContainer: {
    marginBottom: windowHeight * 0.025, // 2.5% of screen height
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: windowWidth * 0.04, // 4% of screen width
    padding: windowWidth * 0.04, // 4% of screen width
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  venueInfo: {
    fontSize: windowWidth * 0.04, // 4% of screen width
    color: '#ffffff',
    marginBottom: windowHeight * 0.01, // 1% of screen height
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  mapContainer: {
    borderRadius: windowWidth * 0.025, // 2.5% of screen width
    overflow: 'hidden',
    marginTop: windowHeight * 0.01, // 1% of screen height
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  map: {
    width: '100%',
    height: windowHeight * 0.25, // 25% of screen height
  },
});

export default Contact;