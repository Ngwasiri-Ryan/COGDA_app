import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { COLORS, icons, images } from '../../constants';
import audio from '../../data/audio';

const { width } = Dimensions.get('window');

const AudioScreen = ({ navigation }) => {
  // Render each audio
  const renderaudioItem = ({ item }) => (
    <View style={styles.audioItem}>
      {/* Audio Content */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('WebScreen', { url: item.url })
        }
        style={styles.audioContentWrapper}
      >
        {/* Image Wrapper */}
        <View style={styles.imageWrapper}>
          <Image source={item.audio_image} style={styles.audioImage} />
        </View>
        <View style={styles.audioContent}>
          <Text style={styles.audioTitle}>{item.audio_name}</Text>
          <Text style={styles.audioDescription}>{item.audio_description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Audios</Text>
         <View style={styles.circle}>
         <Text style={styles.number}>{audio.length}</Text>
         </View>
        
       
      </View>

      {/* audio List */}
      <FlatList
        data={audio}
        renderItem={renderaudioItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    paddingTop:'10%'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  backButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: COLORS.white,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.primary,
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
  listContainer: {
    padding: 15,
  },
  audioItem: {
    marginBottom: 20,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.lightGray,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  circle:{
    height:30,
    width:30,
    backgroundColor:COLORS.green,
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    flexDirection:'row',
    borderRadius:50,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLORS.black,
    marginLeft: 10,
  },
  audioContentWrapper: {
    padding: 10,
  },
  imageWrapper: {
    width: '100%',
    height: 250, // Define the desired height of the container
    borderRadius: 10,
    overflow: 'hidden', // Ensures image doesn't overflow the container
  },
  audioImage: {
    width: '100%',
    height: '100%', // Ensures the image covers the container
    resizeMode: 'cover', // Options: 'cover', 'contain', etc.
  },
  audioContent: {
    paddingVertical: 10,
  },
  number:{
    color:COLORS.white,
  },
  audioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 5,
  },
  audioDescription: {
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 20,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: COLORS.lightGray,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: COLORS.primary,
  },
  iconText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export default AudioScreen;
