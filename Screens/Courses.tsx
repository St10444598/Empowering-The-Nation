import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const courses = [
  {
    id: 1,
    name: 'First Aid',
    fee: 1500,
    duration: '6 months',
    purpose: 'Learn essential first aid skills',
    content: 'Basic life support, wound care, emergency response',
  },
  {
    id: 2,
    name: 'Sewing',
    fee: 1500,
    duration: '6 months',
    purpose: 'Develop sewing and tailoring skills',
    content: 'Basic stitches, garment construction, alterations',
  },
  {
    id: 3,
    name: 'Landscaping',
    fee: 1500,
    duration: '6 months',
    purpose: 'Learn landscape design and maintenance',
    content: 'Plant selection, garden layout, irrigation systems',
  },
  {
    id: 4,
    name: 'Life Skills',
    fee: 1500,
    duration: '6 months',
    purpose: 'Enhance personal and professional skills',
    content: 'Communication, time management, problem-solving',
  },
  {
    id: 5,
    name: 'Child Minding',
    fee: 750,
    duration: '6 weeks',
    purpose: 'Learn childcare techniques',
    content: 'Child development, safety, educational activities',
  },
  {
    id: 6,
    name: 'Cooking',
    fee: 750,
    duration: '6 weeks',
    purpose: 'Develop culinary skills',
    content: 'Meal planning, food safety, cooking techniques',
  },
  {
    id: 7,
    name: 'Garden Maintenance',
    fee: 750,
    duration: '6 weeks',
    purpose: 'Learn garden care and maintenance',
    content: 'Plant care, pest control, lawn maintenance',
  },
];

const CourseSummary = ({ navigation }) => {
  const renderCourseItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.courseItem} 
      onPress={() => navigation.navigate('CourseDetail', { course: item })}
    >
      <Text style={styles.courseName}>{item.name}</Text>
      <Text style={styles.courseInfo}>Duration: {item.duration}</Text>
      <Text style={styles.courseInfo}>Fee: R{item.fee}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => <Text style={styles.header}>Available Courses</Text>}
        ListFooterComponent={() => (
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('FeeCalculator')}
          >
            <Text style={styles.buttonText}>Calculate Fees</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#02386E',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#fff',
    textAlign: 'center',
  },
  courseItem: {
    backgroundColor: '#f5f5f5', 
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  courseInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 3,
  },
  button: {
    backgroundColor: '#00264D',
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

export default CourseSummary;
