import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screen components
import Home from "./Screens/Home";
import CourseSummary from "./Screens/Courses";
import CourseDetail from "./Screens/Coursedetails";
import FeeCalculator from "./Screens/FeeCalculator";
import Contact from "./Screens/Contact";

// Define the stack navigator parameter list
type RootStackParamList = {
  Home: undefined;
  Courses: undefined;
  CourseDetail: { course: any };
  FeeCalculator: undefined;
  Contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4a90e2",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Empowering the Nation" }}
        />
        <Stack.Screen
          name="Courses"
          component={CourseSummary}
          options={{ title: "Available Courses" }}
        />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetail}
          options={({ route }) => ({ title: route.params.course.name })}
        />
        <Stack.Screen
          name="FeeCalculator"
          component={FeeCalculator}
          options={{ title: "Fee Calculator" }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ title: "Contact Us" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
