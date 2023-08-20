import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import FoodItems from '../Components/FoodItems';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements'

export default function Dashboard() {
  const navigation = useNavigation();
  const height = useHeaderHeight()
  const Data = [
    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Pit", URL: require('../Imgs/pexels-ash-376464.jpg') },

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 10, Place: "Pit", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

  ]

  const HandleItemClick = (item) => {

    navigation.navigate('Payment', { selectedFoodItem: item });
    const height = useHeaderHeight()
  }
  return (
    <View style={styles.Container}>
      <SafeAreaView style={styles.FoodItemsCont}>
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={20} color="#aaa" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#aaa"

          />
        </View>
        <View style={styles.FlatListContainer}>
          <FlatList

            data={Data}
            renderItem={({ item }) =>
              <TouchableOpacity style={styles.viewChild} onPress={() => { HandleItemClick(item) }} activeOpacity={0.7}>
                <FoodItems Name={item.Name} discription={item.discription} price={item.price} Place={item.Place} URL={item.URL} />
              </TouchableOpacity>}>


          </FlatList>

        </View>








      </SafeAreaView>

      <View style={styles.Navbar}>

      </View>



    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#d0c7db",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center"
  },
  Navbar: {
    height: 60,
    width: "100%",
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,

  },
  FoodItemsCont: {
    width: "100%",
    // height: "100%",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },

  FlatListContainer: {
    flex: 1,
    width: '100%',
    marginVertical: 10,

  },
  viewChild: {
    alignItems: 'center',
  },





  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 15,


    shadowColor: 'black',
    shadowOffset: { width: 5, height: 16 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },



})
