// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

// Screens
import Login from './screens/Login';
import Register from './screens/Register';
import Homepage from './screens/Homepage';
import PostMeal from './screens/PostMeal';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconSize = size;

          if (route.name === 'Homepage') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'PostMeal') {
            iconName = 'add-circle';
            iconSize = 30; // make center icon larger
            color = '#4caf50'; // always green
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: '#4caf50',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="PostMeal" component={PostMeal} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
