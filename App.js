// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

// Screens
import Login from './screens/Login';
import Register from './screens/Register';
import Homepage from './screens/Homepage';
import PostMeal from './screens/PostMeal';
import Settings from './screens/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigation (No Profile here)
const MainTabs = ({ navigation }) => {
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
          let iconName = '';
          let iconSize = size;

          if (route.name === 'Homepage') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'PostButton') {
            iconName = 'add-circle';
            iconSize = 60;
            color = '#4caf50';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: '#4caf50',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Homepage" component={Homepage} />

      {/* Custom + Button for Posting */}
      <Tab.Screen
        name="PostButton"
        component={Homepage}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity onPress={() => navigation.navigate('PostMealModal')}>
              <Ionicons
                name="add-circle"
                size={60}
                color="#4caf50"
                style={{ top: -20, alignSelf: 'center' }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth Screens */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

        {/* Main App (with Bottom Tabs) */}
        <Stack.Screen name="Main" component={MainTabs} />

        {/* Post Meal as Modal */}
        <Stack.Screen
          name="PostMealModal"
          component={PostMeal}
          options={{ presentation: 'modal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
