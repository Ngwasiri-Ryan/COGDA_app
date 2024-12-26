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
import books from '../../data/books';

const { width } = Dimensions.get('window');

const BooksScreen = ({ navigation }) => {
  // Render each book
  const renderBookItem = ({ item }) => (
    <View style={styles.bookItem}>
      {/* Post Header */}
      {/* <View style={styles.postHeader}>
        <Image source={images.pic} style={styles.profileImage} />
        <Text style={styles.username}>User Name</Text>
      </View> */}

      {/* Book Content */}
      <TouchableOpacity
          onPress={() =>
            navigation.navigate('WebScreen', { url: item.url })
          }
        style={styles.bookContentWrapper}
      >
        <Image source={item.book_cover_image} style={styles.bookImage} />
        <View style={styles.bookContent}>
          <Text style={styles.bookTitle}>{item.book_name}</Text>
          <Text style={styles.bookDescription}>{item.book_description}</Text>
        </View>
      </TouchableOpacity>

      {/* Post Footer */}
      {/* <View style={styles.postFooter}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={icons.like} style={styles.icon} />
          <Text style={styles.iconText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={icons.comment} style={styles.icon} />
          <Text style={styles.iconText}>Comment</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Books</Text>
         <View style={styles.circle}>
         <Text style={styles.number}>{books.length}</Text>
         </View>
        
       
      </View>

      {/* Book List */}
      <FlatList
        data={books}
        renderItem={renderBookItem}
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
  bookItem: {
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
  bookContentWrapper: {
    padding: 10,
  },
  bookImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookContent: {
    paddingVertical: 10,
  },
  number:{
    color:COLORS.white,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 5,
  },
  bookDescription: {
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

export default BooksScreen;
