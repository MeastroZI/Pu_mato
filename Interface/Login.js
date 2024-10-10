import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Platform, StatusBar, Image, Keyboard } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import LoginApi from '../Apis/LoginApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userDetails from '../SharedVariable/userDetails';

export default function Login({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email , setEmail] = useState('')
  const [imageHidden, setHideImage] = useState(false);
  useEffect( async () => {
    // const result =await userDetails();
    // if (result.sucess){
    //   navigation.navigate('SellerSideComponents')
    // }
    const data = await userDetails() ;
    console.log(data)
    if(data.sucess){
      console.log({email : data.Email, password: data.Password})
      console.log("running")
      const isAuthenticate = await LoginApi({email : data.Email, password: data.Password , accountType : data.AccountType});
      if(isAuthenticate){
        navigation.navigate('SellerSideComponents')
      }
    }

    const hideImage = Keyboard.addListener('keyboardDidShow', () => {
      setHideImage(true);
    });
    const showImage = Keyboard.addListener('keyboardDidHide', () => {
      setHideImage(false);
    });

    return () => {
      hideImage.remove();
      showImage.remove();
    };
  }, []);

 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const  handleLogin = async ()=>{
    if ( await LoginApi({email : email , password : password})){
      AsyncStorage.setItem('@Email' , email )
      AsyncStorage.setItem('@Password' , password )
      navigation.navigate('SellerSideComponents')
    }
  }

  return (
    <SafeAreaView style={styles.SafeAreaCont}>
      <View style={styles.ParentContainer}>

        <View style={[styles.ImageContainer, { display: imageHidden ? "none" : "flex" }]}>
          <Image source={require('../Imgs/LoginImg2.jpg')} style={styles.ImageStyle} />
        </View>

        <View style={styles.container}>

          <Text style={styles.greetingText}>
            Welcome!
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder='Enter your email'
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.inputStyle}
                placeholder='Enter your password'
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={togglePasswordVisibility}
              >
                <FontAwesome5 name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.orderBtn} onPress={handleLogin}>
              <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: "500" }}>
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
              <Text style={{ color: '#ed7032', width: '100%', textAlign: 'left' }}>
                Don't have any account 
              </Text>
            </TouchableOpacity>
          </View>
          


        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaCont: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    backgroundColor: '##f2f2f2',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 20
  },
  ImageContainer: {
    height: 180,
    width: '100%',
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  ParentContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  greetingText: {
    width: '80%',
    textAlign: 'left',
    marginHorizontal: 'auto',
    marginVertical: 20,
    fontSize: 30,
    fontWeight: "800",
    color: '#4f4f4f',
    fontFamily: 'sans-serif',
  },
  inputContainer: {
    width: '85%',
    alignItems: 'flex-start',
  },
  label: {
    textAlign: 'left',
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  inputStyle: {
    height: 45,
    width: '100%',
    color: '#030201',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 15
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  orderBtn: {
    height: 50,
    width: 300,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "#ed7032",

    marginHorizontal: 10,
  },
  googleBtn: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#030303',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '70%',
    paddingHorizontal: 10,
    borderRadius: 7

  }
});
