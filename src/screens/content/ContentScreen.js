import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, icons } from '../../constants';
import Greeting from '../../components/content/Greeting';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 40) / 2; // Two columns with some padding

// A reusable Card component for the items
const Card = ({ title, description, icon, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} />
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </TouchableOpacity>
);

const ContentScreen = ({ navigation }) => {
  const cardData = [
    {
      title: 'TN Philip Store',
      description: 'Explore spiritual resources.',
      icon: icons.store,
      onPress: () => navigation.navigate('Books'),
    },
    {
      title: 'Resources',
      description: 'Access study materials.',
      icon: icons.resources,
      onPress: () =>
        navigation.navigate('WebScreen', { url: 'https://example.com/resources' }),
    },
    {
      title: 'COGDA TV',
      description: 'Watch live services.',
      icon: icons.tv,
      onPress: () =>
        navigation.navigate('WebScreen', { url: 'https://cogda.cm/cogda-tv/' }),
    },
    {
      title: 'COGDA Arts and Entertainment',
      description: 'Listen to uplifting songs.',
      icon: icons.music,
      onPress: () =>
        Alert.alert('Notice', 'Sorry, COGDA Music is unavailable right now.'),
    },
    {
      title: 'Daily Devotional',
      description: 'Daily inspiration.',
      icon: icons.devotional,
      onPress: () =>
        navigation.navigate('WebScreen', { url: 'https://example.com/devotional' }),
    },
    {
      title: 'Register a Soul',
      description: 'Expand our faith.',
      icon: icons.register,
      onPress: () =>
        navigation.navigate('WebScreen', { url: 'https://example.com/register-soul' }),
    },
    {
      title: 'Give Offerings',
      description: 'Support our ministry.',
      icon: icons.offering,
      onPress: () =>
        navigation.navigate('WebScreen', { url: 'https://cogda.cm/giving/' }),
    },
    {
      title: 'TM Audio',
      description: 'Listen to our audio ebooks',
      icon: icons.audio,
      onPress: () => navigation.navigate('Audio'),
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.contain}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={icons.back} style={styles.backIcon} />
          </TouchableOpacity>
          <Greeting />
        </View>

        {/* Card Section */}
        <View style={styles.container}>
          {Array.from({ length: Math.ceil(cardData.length / 2) }).map((_, rowIndex) => (
            <View style={styles.row} key={rowIndex}>
              {cardData
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((card, index) => (
                  <Card key={index} {...card} />
                ))}
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles remain unchanged
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contain: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  card: {
    width: ITEM_WIDTH,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.black,
    textAlign: 'center',
  },
  description: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  icon: {
    height: 30,
    width: 30,
    tintColor: COLORS.primary,
  },
  backButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
});

export default ContentScreen;
