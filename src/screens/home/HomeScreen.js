import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { COLORS, icons , images} from '../../constants';

const slides = [
    {
      id: '1',
      image: images.pastor,
      title: 'Welcome to COGDA Buea',
      description: 'Experience a community where you can Encounter God, Find Family, Discover Purpose, and Fulfill Destiny.',
    },
    {
      id: '2',
      image: images.tn_philip_store,
      title: 'TN Philip Store',
      description: 'Explore our collection of eBooks and spiritual resources to enrich your faith journey.',
    },
    {
      id: '3',
      image: images.cogda_tv,
      title: 'COGDA TV',
      description: 'Watch live services, sermons, and special events from COGDA Buea anytime, anywhere.',
    },
    {
      id: '4',
      image: images.cogda_music,
      title: 'COGDA Music',
      description: 'Listen to uplifting worship songs and gospel music curated by our ministry.',
    },
    {
      id: '5',
      image: images.daily_devotional,
      title: 'Daily Devotional',
      description: 'Receive daily inspirational messages to strengthen your walk with God.',
    },
    {
      id: '6',
      image: images.register,
      title: 'Register a Soul',
      description: 'Join our mission by registering new members and expanding our faith community.',
    },
    {
      id: '7',
      image: images.offering_tithe,
      title: 'Give Offerings & Tithes',
      description: 'Support our ministry by giving your offerings and tithes securely through the app.',
    },
    {
      id: '8',
      image: images.resources,
      title: 'COGDA Resources',
      description: 'Access a variety of resources including sermons, articles, and study materials to grow in your faith.',
    },
  ];
  
const { width, height } = Dimensions.get('window');

const HomeeScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // Automatically move to the next slide every 2 seconds
  

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % slides.length; // Loop back to 0 when reaching the last slide
    setCurrentIndex(newIndex);
    flatListRef.current.scrollToIndex({ index: newIndex });
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
          setCurrentIndex(index);
        }}
        ref={flatListRef}
      />
      
      {/* Dots for the slides */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index ? styles.activeDot : styles.inactiveDot]}
          />
        ))}
      </View>
      
      {/* Static View with Text and Get Started Button */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Ready to get started?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Content')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: COLORS.white,
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  image: {
    width: '100%',
    height: 350, // Set your preferred height
    borderRadius: 10,
    marginBottom:30,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 18,
    color: COLORS.black,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: COLORS.black,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
    width: 15, // Active dot is wider
  },
  inactiveDot: {
    backgroundColor: '#e0e0e0',
  },
  footer: {
    alignItems: 'center',
    height: height / 5,
    width: width,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 60,
    backgroundColor: '#fff', // Set a background color
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
      },
      android: {
        elevation: 5, // Control the shadow elevation on Android
      },
    }),
  },
  footerText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    padding: 15,
    borderRadius: 50,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeeScreen;
