import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native';
import { useState, useEffect , useRef } from 'react';
import FoodItems from '../Components/FoodItems';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import fetchData from '../Apis/Fetch_DashBoard_data.js';





export default function Dashboard({navigation}) {
  
  // const navigation = useNavigation();
  const [newData , setNewData] = useState([])
  const Data = useRef([]);
  const ids = useRef(0);
  console.log(newData)
  useEffect(()=>{
    fetchingData();
  } , [])
  
  
  const fetchingData = async ()=>{
    console.log ("Under Featch")
    
    // const data = await fetchData()
    fetchData().then((data)=>{
      console.log(data)
      data.forEach((elm)=>{
        Data.current.push(elm);
          })
        setNewData ([...data]);

    }).catch((error)=>{
      console.log(`Server Problem : ${error}`)
    })
  }
  

  const HandleEndReached = ()=>{
      console.log("han")
  
      fetchingData();
  }

  const HandleItemClick = (item) => {

    navigation.navigate('Payment', { selectedFoodItem: item });

  }
  return (
    <View style={styles.Container}>
      <SafeAreaView style={styles.FoodItemsCont} >
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

            data={Data.current}
            renderItem={({ item }) =>
              
              <TouchableOpacity style={styles.viewChild} onPress={() => { HandleItemClick(item) }} activeOpacity={0.5}>
                <FoodItems Name={item.Name} discription={item.discription} price={item.price} Place={item.Place} URL={item.URL} />
              </TouchableOpacity>}
            keyExtractor={() => ids.current = ids.current+1}
            onEndReached={HandleEndReached}
            onEndReachedThreshold={0.2}
              >
            

          </FlatList>

        </View>






        {/* <View style={NabarHide ? styles.HideNavbar : styles.HideNavbar} /> */}










      </SafeAreaView>
    </View >

  )
}

const styles = StyleSheet.create({

  Container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#d0c7db",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
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

  FoodGalleryContainer: {
    height: 100,
    width: '100%',
    backgroundColor: "grey",
    marginVertical: 10,



  },
  FoodItemsCont: {

    height: "100%",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },



})
