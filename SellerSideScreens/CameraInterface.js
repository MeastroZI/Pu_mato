import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, StatusBar, Dimensions , Platform } from 'react-native';
import { Camera , useCameraPermissions , CameraView , CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../Components/loading';
import setProfileImg from '../Apis/setProfilePhoto';

function CameraInterface({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [isLoading , setIsLoading] = useState(false)
  const [ Camera , setCamera] = useState(null);
  if (!permission){
    return <View></View>
  }
  console.log(permission.granted)
  if(!permission.granted){
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  const takePicture = async () => {
    if (Camera != null) {
      console.log("running")
      const photo = await Camera.takePictureAsync();
      console.log(photo);
      setIsLoading(true);
      savePhotoToLibrary(photo.uri);
      navigation.navigate('SellersPage', { PhotoInfo: photo });
      setProfileImg({URL : photo.uri})
      setIsLoading(false)
    }
  };



  const savePhotoToLibrary = async (photoUri) => {
    if (photoUri) {
      await MediaLibrary.saveToLibraryAsync(photoUri);
    }
  };

 

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <CameraView style={styles.camera} ref={(node)=>{setCamera(node)}}>
        <Loading isLoading={isLoading}></Loading>
          <View style={styles.mask}>
            <TouchableOpacity style={{ marginVertical: 30 }} onPress={takePicture}>
              <FontAwesome name="camera" size={50} color="white" />
            </TouchableOpacity>
          </View>
        </CameraView>
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CameraInterface;
