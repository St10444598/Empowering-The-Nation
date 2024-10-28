import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const CourseDetail = ({ route }) => {
  const { course } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{course.name}</Text>
      <Text style={styles.courseInfo}>Duration: {course.duration}</Text>
      <Text style={styles.courseInfo}>Fees: R{course.fee}</Text>
      <Text style={styles.sectionHeader}>Purpose:</Text>
      <Text style={styles.courseContent}>{course.purpose}</Text>
      <Text style={styles.sectionHeader}>Content:</Text>
      <Text style={styles.courseContent}>{course.content}</Text>
    </ScrollView>
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
    color: '#fff', // Changed text color to white for better contrast
    textAlign: 'center',
  },
  courseInfo: {
    fontSize: 16,
    color: '#ccc', // Changed text color to light gray for better contrast
    marginBottom: 3,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: '#add8e6', // Changed text color to light blue for better contrast
  },
  courseContent: {
    fontSize: 16,
    color: '#fff', // Changed text color to white for better contrast
    lineHeight: 24,
  },
});

export default CourseDetail;
