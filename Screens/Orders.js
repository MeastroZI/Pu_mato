import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import OrdersItem from '../Components/OrdersItem';
import fetchOrds from '../Apis/Fetch_Orders';

// import { items, cancleOrder } from '../SharedVariable/OrderListVar';

export default function Orders({navigation}) {
  // const navigation = useNavigation();
  const [items, SetItems] = useState([])

  const [cancleOrderUpdate, CancleOrder] = useState(true);

  useEffect(() => {
    FetchOrders()
  }, [])


  const FetchOrders = () => {
    fetchOrds().then((data) => {
      SetItems([...data])
    }).catch((err) => {
      console.log(err);
    })
  }

  const CancleOrderCallback = (id) => {

    // cancleOrder(id)
    // CancleOrder(!cancleOrderUpdate);

  }



  return (
    <View style={styles.Container}>
      <SafeAreaView style={styles.SafeAreaCont}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}
          style={styles.backBtn}>

          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.HeaderContainer}>
          <Text style={styles.TextHeader}>My Orders</Text>

        </View>
        {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior="position"> */}

        <FlatList
          data={items}
          style={styles.FlatListContainer}

          renderItem={({ item }) => (
            <TouchableOpacity style={{ marginVertical: 10, paddingHorizontal: 10, alignItems: 'center' }} activeOpacity={0.8} >
              <OrdersItem itemInfo={item} cancleOrder={CancleOrderCallback} />
            </TouchableOpacity>
          )}>


        </FlatList>
        {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    // backgroundColor: "grey",
  },
  SafeAreaCont: {
    width: "100%",
    height: "100%",

    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },

  backBtn: {
    height: 45,
    width: 50,
    borderRadius: 10,
    backgroundColor: "white",
    position: 'absolute',
    top: 35,
    left: 25,
    alignItems: 'center',
    justifyContent: "center",
    zIndex: 2,

    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 8,
    shadowRadius: 5,


  },
  TextHeader: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 10,
  },
  FlatListContainer: {
    height: 100,
    width: '100%',
    marginTop: 10,
    // backgroundColor: 'red'
  },
})