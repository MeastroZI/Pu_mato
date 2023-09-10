import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image, Dimensions } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';








function CameraInterface() {
    // const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [permission, setHasPermission] = useState()
    const { height, width } = Dimensions.get('window')
    const [aspectRatio, setAspectRatio] = useState()
    const [PaddingAdjust, setPaddinAdjust] = useState()
    const screen_Ratio = height / width;
    // console.log(screen_Ratio)
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
            // const ratios = await camera.getSupportedRatiosAsync();



        })();
    }, []);

    const takePicture = async () => {
        if (permission) {
            const photo = await camera.takePictureAsync();
            // setPhotoUri(photo.uri);
            savePhotoToLibrary(photo.uri);
            console.log(photo.uri)
            navigation.navigate('SellersPage', { PhotoInfo: photo })

        }
    };

    const prepareRatio = async () => {
        if (Platform.OS === "android") {
            const ratios = await camera.getSupportedRatiosAsync();
            let Coles_Of_Ratio_n_dist = {}
            let MinDistanceRatioString = null;
            console.log(ratios)
            for (const ratio of ratios) {
                const HWnum = ratio.split(':');
                const CurrentRatio = parseInt(HWnum[0]) / parseInt(HWnum[1]);
                const distance = screen_Ratio - CurrentRatio;
                console.log(`distance of the ratio : ${ratio} is ${distance}`)
                Coles_Of_Ratio_n_dist[ratio] = distance;
                if (MinDistanceRatioString === null) {
                    MinDistanceRatioString = ratio;
                }
                else {
                    if (distance >= 0 && distance < Coles_Of_Ratio_n_dist[MinDistanceRatioString]) {
                        MinDistanceRatioString = ratio;
                    }

                }




            }
            const reminaingPading = Math.floor(((Coles_Of_Ratio_n_dist[MinDistanceRatioString]) * width) / 2);
            console.log(reminaingPading)

            console.log(MinDistanceRatioString)
            return { ratio: MinDistanceRatioString, padding: reminaingPading }
        }
    }
    const CameraIsReady = async () => {
        try {
            const value = await AsyncStorage.getItem('Aspect_ratio_n_padding');
            if (value === null) {
                console.log("if is called")
                prepareRatio().then((res) => {
                    AsyncStorage.setItem('Aspect_ratio_n_padding', JSON.stringify(res));
                    setAspectRatio(res.ratio);
                    setPaddinAdjust(res.padding);
                }).catch((e) => { console.log(e) });
            } else {
                console.log("else is called")
                const parsedValue = JSON.parse(value);
                setAspectRatio(parsedValue.ratio);
                setPaddinAdjust(parsedValue.padding);

            }
        } catch (e) {
            console.log(e);
        }
    };

    const savePhotoToLibrary = async (photoUri) => {
        if (photoUri) {
            await MediaLibrary.saveToLibraryAsync(photoUri);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <SafeAreaView style={styles.FoodItemsCont} >



                <Camera
                    style={{ flex: 1, marginTop: PaddingAdjust, marginBottom: PaddingAdjust }}
                    type={Camera.Constants.Type.back}
                    ratio={aspectRatio}
                    ref={(ref) => setCamera(ref)}
                    onCameraReady={CameraIsReady}

                >


                </Camera>

                <View style={styles.MaskStyle}>

                    <TouchableOpacity
                        style={{ marginVertical: 30 }}

                        onPress={takePicture}
                    >
                        <FontAwesome name="camera" size={50} color="white" />
                    </TouchableOpacity>
                </View>
                {/* {photoUri && (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: photoUri }} style={{ width: 300, height: 400 }} />
                </View>
            )} */}

            </SafeAreaView>
        </View >
    );
}


const styles = StyleSheet.create({
    MaskStyle: {
        position: 'absolute',
        height: '65%',
        width: '100%',
        // backgroundColor: 'black',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',

        // opacity: 0.8,
        // backgroundColor: 'rgba(0,0,0,0.7)'


    },
    FoodItemsCont: {

        height: "100%",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },
})

export default CameraInterface;

