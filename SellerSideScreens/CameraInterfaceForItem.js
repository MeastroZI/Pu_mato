import React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image, Animated, Dimensions, Button } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { CameraView, useCameraPermissions   } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CameraInterfaceForItem({ navigation }) {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [camera, setCamera] = useState(null);
    // const [permission, setHasPermission] = useState()
    const { height, width } = Dimensions.get('window')
    // const [aspectRatio, setAspectRatio] = useState()
    // const [PaddingAdjust, setPaddinAdjust] = useState()
    const [EditedImage, setImage] = useState();
    // console.log(width)
    const screen_Ratio = height / width;
    // console.log(screen_Ratio)
    // const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            requestPermission(status === 'granted');
            // const ratios = await camera.getSupportedRatiosAsync();



        })();
    }, []);

    const takePicture = async () => {
        if (permission) {
            const photo = await camera.takePictureAsync();
            savePhotoToLibrary(photo.uri)
            console.log(photo.uri)
         
            setImage(photo.uri)
            navigation.navigate("ItemsDetail", { EditedImageUri: photo.uri })
            // console.log(cropResult.uri)

        }
    };

    // const prepareRatio = async () => {
    //     if (Platform.OS === "android") {
    //         const ratios = await camera.getSupportedRatiosAsync();
    //         let Coles_Of_Ratio_n_dist = {}
    //         let MinDistanceRatioString = null;
    //         console.log(ratios)
    //         for (const ratio of ratios) {
    //             const HWnum = ratio.split(':');
    //             const CurrentRatio = parseInt(HWnum[0]) / parseInt(HWnum[1]);
    //             const distance = screen_Ratio - CurrentRatio;
    //             console.log(`distance of the ratio : ${ratio} is ${distance}`)
    //             Coles_Of_Ratio_n_dist[ratio] = distance;
    //             if (MinDistanceRatioString === null) {
    //                 MinDistanceRatioString = ratio;
    //             }
    //             else {
    //                 if (distance >= 0 && distance < Coles_Of_Ratio_n_dist[MinDistanceRatioString]) {
    //                     MinDistanceRatioString = ratio;
    //                 }

    //             }
    //         }
    //         const reminaingPading = Math.floor(((Coles_Of_Ratio_n_dist[MinDistanceRatioString]) * width) / 2);
    //         console.log(reminaingPading)

    //         console.log(MinDistanceRatioString)
    //         return { ratio: MinDistanceRatioString, padding: reminaingPading }
    //     }
    // }
    // const CameraIsReady = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('Aspect_ratio_n_padding');
    //         if (value === null) {
    //             console.log("if is called")
    //             prepareRatio().then((res) => {
    //                 AsyncStorage.setItem('Aspect_ratio_n_padding', JSON.stringify(res));
    //                 setAspectRatio(res.ratio);
    //                 setPaddinAdjust(res.padding);
    //             }).catch((e) => { console.log(e) });
    //         } else {
    //             console.log("else is called")
    //             const parsedValue = JSON.parse(value);
    //             setAspectRatio(parsedValue.ratio);
    //             setPaddinAdjust(parsedValue.padding);

    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    const savePhotoToLibrary = async (photoUri) => {
        if (photoUri) {
            await MediaLibrary.saveToLibraryAsync(photoUri);
        }
    };
    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }
    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
    // return (
    //     <View style={styles.container}>
    //         <CameraView style={styles.camera} facing={facing}>
    //             <View style={styles.buttonContainer}>
    //                 <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
    //                     <Text style={styles.text}>Flip Camera</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </CameraView>
    //     </View>
    // );
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <SafeAreaView style={styles.FoodItemsCont} >


                <CameraView style={styles.camera} facing={'back'} ref={(node)=>setCamera(node)}>
                </CameraView>

                <View style={styles.MaskStyle}>

                    <TouchableOpacity
                        style={{ marginBottom: 50 }}

                        onPress={takePicture}
                    >
                        <FontAwesome name="camera" size={50} color="white" />
                    </TouchableOpacity>
                </View>



                {EditedImage && (<View style={{ position: 'absolute', height: '50%', width: '50%', justifyContent: 'center', alignItems: 'center', bottom: 0, left: 0 }}>
                    <Image source={{ uri: EditedImage }} style={{ flex: 1, alignSelf: 'stretch', marginLeft: 30 }}
                        resizeMode='contain' />

                </View>)
                }


            </SafeAreaView>
        </View >
    );
}

const styles = StyleSheet.create({
    MaskStyle: {
        position: 'absolute',
        height: '50%',
        width: '100%',
        // backgroundColor: 'black',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',

        // opacity: 0.8,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    FoodItemsCont: {
        height: "100%",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0

    },
    camera: {
        flex: 0.5,
    },
})