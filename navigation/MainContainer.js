import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from './ThemeContext';
//import all the screens in screens folder
import PrayerScreen from './screens/PrayerScreen';
import QiblaScreen from './screens/QiblaScreen';
import TrackerScreen from './screens/TrackerScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  const { theme } = useTheme(); // Use the theme from context
  const isDark = theme === 'dark';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: isDark ? '#333' : '#fff',
            borderTopColor: isDark ? '#333' : '#eee',
          },
          tabBarActiveTintColor: isDark ? '#fff' : '#000',
          tabBarInactiveTintColor: isDark ? '#888' : '#aaa',
          headerShown: false,
        }}>
        <Tab.Screen name="Prayer" component={PrayerScreen} />
        <Tab.Screen name="Qibla" component={QiblaScreen} />
        <Tab.Screen name="Tracker" component={TrackerScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
