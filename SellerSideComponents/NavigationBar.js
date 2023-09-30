import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';


export default function NavigationBar() {
    const navigation = useNavigation()
    const HandleNavbarClick = (params)=>{
        if (params == "Home") {
            navigation.navigate('SellersPage')
        }
        else if (params == "Orders") {
            navigation.navigate('SellerOrderList')
           
        }
    }
  return (
    <View style={styles.Navbar}>
    <TouchableOpacity Name="Home" onPress={()=>HandleNavbarClick("Home")}>

        <FontAwesome name="home" size={30} color="white" />
    </TouchableOpacity>
    <TouchableOpacity Name="Orders" onPress={()=>HandleNavbarClick("Orders")}>
        <FontAwesome name="list-alt" size={30} color="white" />

    </TouchableOpacity>
</View>
  )
}

const styles = StyleSheet.create({
    Navbar:{
        width : '100%' ,
        height : 50 ,
        backgroundColor : 'black' ,
        flexDirection : 'row',
        // position : 'absolute',
        bottom : 0 ,
        // zIndex : 2 ,
        alignItems : 'center' ,
        justifyContent : 'space-around'        
        

    }
})
