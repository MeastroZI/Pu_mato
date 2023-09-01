import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome } from '@expo/vector-icons';

export default function SellersPage() {
    async function Ask_permission() {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        console.log(cameraStatus)
    }
    const HandleCamera = () => {
        Ask_permission()
    }
    return (
        <View style={styles.Container}>
            <TouchableOpacity onPress={HandleCamera}>
                <FontAwesome name="camera" size={54} color="black" />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: 'center',
    }
})

