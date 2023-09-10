import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import SellersPageFoodItems from '../SellerSideComponents/SellersPageFoodItems';


export default function SellersPage() {
    const [ShopImage, setShopeImage] = useState()
    const navigation = useNavigation()
    const Route = useRoute();
    useEffect(() => {
        if (Route.params && Route.params.PhotoInfo) {
            setShopeImage(Route.params.PhotoInfo)
        }

    })



    const Data = [
        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Pit", URL: require('../Imgs/pexels-ash-376464.jpg'), id: 1 },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 10, Place: "Pit", URL: require('../Imgs/pexels-jane-doan-1099680.jpg'), id: 2 },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg'), id: 3 },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg'), id: 4 },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg'), id: 5 },
        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg'), id: 6 },
        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg'), id: 7 },

    ]
    // const HandleCamera = () => {
    //     Ask_permission()
    // }
    const handleEditImage = () => {
        navigation.navigate('cameraInterface')
    }
    const handleAddBtn = () => {

    }
    const HandleSellersItemPress = (item) => {
        navigation.navigate('ItemsDetail', { ItemDetail: item })
    }
    return (
        <SafeAreaView style={styles.SafeAreaStyle} >
            <View style={styles.Container}>
                <View style={styles.ImageFrame}>
                    <Image
                        source={ShopImage ? { uri: ShopImage.uri } : require('../Imgs/Shope.png')}
                        style={styles.ImageStyle}
                    />

                    <TouchableOpacity style={styles.editBtn} onPress={handleEditImage}>
                        <MaterialIcons name="edit" size={30} color="black" />

                    </TouchableOpacity>

                </View>


                <FlatList
                    style={styles.FlatlistContainer}
                    data={Data}
                    // horizontal={false}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { HandleSellersItemPress(item) }} style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center', padding: 10, height: 200 }}>
                            <SellersPageFoodItems ItemInfo={item} />
                        </TouchableOpacity>
                    )}
                />


                <TouchableOpacity style={styles.AddBtn} onPress={handleAddBtn}>
                    <FontAwesome name="plus-circle" size={60} color="#085163" />
                </TouchableOpacity>





            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'flex-start',
    },
    SafeAreaStyle: {
        width: "100%",
        // height: "100%",

        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },
    ImageStyle: {
        height: 250,
        width: '100%',
        // opacity: 0,


    },
    ImageFrame: {
        // display: 'none',
        // opacity: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
        // flex: 1,
    },
    editBtn: {
        position: 'absolute',
        top: 15,
        right: 15
    },
    FlatlistContainer: {
        flex: 1,
        // height: '100%',
        // width: '100%'
        // backgroundColor: 'red'

    },

    AddBtn: {
        position: 'absolute',
        width: '100%',
        // height: 30,
        bottom: 30,
        left: 0,
        // backgroundColor: 'blue',
        alignItems: 'center',
        opacity: 0.5,
    }

})

