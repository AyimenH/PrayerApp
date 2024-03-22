import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function SettingsScreen({ navigation }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const themeStyles = styles(isDark);

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.text}>Settings Screen</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={themeStyles.toggleButton}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = isDark =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDark ? '#333' : '#fff',
    },
    text: {
      fontSize: 26,
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#000',
    },
    toggleButton: {
      marginTop: 20,
      fontSize: 18,
      padding: 10,
      color: isDark ? '#fff' : '#000',
    },
  });
