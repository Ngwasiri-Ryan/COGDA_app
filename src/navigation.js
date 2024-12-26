import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './screens/intro/SplashScreen';
import HomeScreen from './screens/home/HomeScreen';
import ContentScreen from './screens/content/ContentScreen';
import BooksScreen from './screens/books/BooksScreen';
import AudioScreen from './screens/audio/AudioScreen';
import WebScreen from './screens/web/WebScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Content" component={ContentScreen} />
        <Stack.Screen name="Books" component={BooksScreen} />
        <Stack.Screen name="Audio" component={AudioScreen} />
        <Stack.Screen name="WebScreen" component={WebScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
