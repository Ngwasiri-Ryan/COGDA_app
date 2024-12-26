import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const Greeting = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateSuffix = (date) => {
      if (date % 10 === 1 && date !== 11) return 'st';
      if (date % 10 === 2 && date !== 12) return 'nd';
      if (date % 10 === 3 && date !== 13) return 'rd';
      return 'th';
    };
    return `${day}, ${date.getDate()}${dateSuffix(date.getDate())} ${month} ${date.getFullYear()}`;
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '🌞 Good Morning ';
    if (hour < 18) return '☀️ Good Afternoon';
    return '🌙 Good Evening';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{getGreeting()}</Text>
      <Text style={styles.date}>{getCurrentDate()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent:'flex-end'
  },
  greeting: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: COLORS.black,
  },
});

export default Greeting;
