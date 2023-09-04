import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SellersPage() {
    const ImgUrl = require('../Imgs/Shope.png')
    const navigation = useNavigation()
    // async function Ask_permission() {
    //     MediaLibrary.requestPermissionsAsync();
    //     const cameraStatus = await Camera.requestCameraPermissionsAsync();
    //     console.log(cameraStatus)
    // }
    const Data = [
        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Pit", URL: require('../Imgs/pexels-ash-376464.jpg') },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 10, Place: "Pit", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

    ]
    // const HandleCamera = () => {
    //     Ask_permission()
    // }
    const handleEditImage = () => {
        navigation.navigate('cameraInterface')
    }
    return (
        <View style={styles.Container}>
            <SafeAreaView style={styles.SafeAreaStyle} >
                <View>
                    <Image source={ImgUrl} style={styles.ImageStyle} >
                    </Image>

                    <TouchableOpacity style={styles.editBtn} onPress={handleEditImage}>
                        <MaterialIcons name="edit" size={30} color="black" />

                    </TouchableOpacity>

                </View>



            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    SafeAreaStyle: {
        width: "100%",
        // height: "100%",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },
    ImageStyle: {
        height: 250,
        width: '100%'
    },
    editBtn: {
        position: 'absolute',
        top: 15,
        right: 15
    }

})

