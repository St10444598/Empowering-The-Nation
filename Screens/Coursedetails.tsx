import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const CourseDetail = ({ route }) => {
  const { course } = route.params;

  return (
    <ScrollView style={styles.containerLight}>
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
  courseInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 3,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: '#4a90e2',
  },
  courseContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default CourseDetail;