import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { icons } from '../../constants';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  // Animated value for logo scaling
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the logo scale
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 2000, // Animation duration
      useNativeDriver: true,
    }).start();

    // Navigate to Home after 5 seconds
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={icons.logo}
        style={[styles.logo, { transform: [{ scale: scaleValue }] }]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: width * 0.7, // 50% of screen width
    height: height * 0.5, // 30% of screen height
  },
  title: {
    fontSize: width * 0.06, // Responsive font size
    fontWeight: 'bold',
    color: '#333',
    marginTop: height * 0.02, // Add spacing below the logo
  },
});
