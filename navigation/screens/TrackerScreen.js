import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function PrayerScreen({ navigation }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <View
      style={[styles.container, { backgroundColor: isDark ? '#333' : '#fff' }]}>
      <TouchableOpacity onPress={() => navigation.navigate('Tracker')}>
        <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
          Tracker Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
