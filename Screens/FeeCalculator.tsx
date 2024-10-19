import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Checkbox } from 'react-native-paper';

const courses = [
  { id: 1, name: 'First Aid', fee: 1500 },
  { id: 2, name: 'Sewing', fee: 1500 },
  { id: 3, name: 'Landscaping', fee: 1500 },
  { id: 4, name: 'Life Skills', fee: 1500 },
  { id: 5, name: 'Child Minding', fee: 750 },
  { id: 6, name: 'Cooking', fee: 750 },
  { id: 7, name: 'Garden Maintenance', fee: 750 },
];

const FeeCalculator = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  
  const toggleCourse = (courseId) => {
    setSelectedCourses(prevState =>
      prevState.includes(courseId)
        ? prevState.filter(id => id !== courseId)
        : [...prevState, courseId]
    );
  };

  const calculateTotal = () => {
    const total = selectedCourses.reduce((sum, id) => sum + courses.find(course => course.id === id).fee, 0);
    const discount = selectedCourses.length > 3 ? 0.15 : selectedCourses.length > 2 ? 0.10 : selectedCourses.length > 1 ? 0.05 : 0;
    const totalWithDiscount = total * (1 - discount);
    const totalWithVAT = totalWithDiscount * 1.15; // 15% VAT
    return totalWithVAT.toFixed(2);
  };

  return (
    <View style={styles.containerLight}>
      <Text style={styles.header}>Select Courses to Calculate Fees</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={selectedCourses.includes(item.id) ? 'checked' : 'unchecked'}
              onPress={() => toggleCourse(item.id)}
              color="#4a90e2"
            />
            <Text style={styles.checkboxLabel}>{item.name} (Fee: R{item.fee})</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity style={styles.button} onPress={() => alert(`Total Fees: R${calculateTotal()}`)}>
        <Text style={styles.buttonText}>Calculate Total Fees</Text>
      </TouchableOpacity>
    </View>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
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

export default FeeCalculator;