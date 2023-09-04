import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';








function CameraInterface() {
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [photoUri, setPhotoUri] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            setPhotoUri(photo.uri);
            savePhotoToLibrary(photo.uri);
        }
    };

    const savePhotoToLibrary = async (photoUri) => {
        if (photoUri) {
            await MediaLibrary.saveToLibraryAsync(photoUri);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Camera
                style={{ flex: 1 }}
                type={Camera.Constants.Type.back}
                ref={(ref) => setCamera(ref)}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={takePicture}
                    >
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                            Capture
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
            {photoUri && (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: photoUri }} style={{ width: 300, height: 400 }} />
                </View>
            )}
        </View>
    );
}

export default CameraInterface;

