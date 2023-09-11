import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image, Animated } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default function ItemsDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const { ItemInfo, EditedImageUri } = route.params;
    const iteminfoo = useRef(ItemInfo).current
    const imageUri = EditedImageUri ? { uri: EditedImageUri } : ItemInfo.URL

    // const ItemInfo = { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Pit", URL: require('../Imgs/pexels-ash-376464.jpg'), id: 1 }

    const [itemName, setItemName] = useState(iteminfoo.Name);
    const [itemPrice, setItemPrice] = useState(iteminfoo.price);
    const [ItemDetail, setItemDetail] = useState(iteminfoo.discription);
    const [IsSaveBtn, SetShowSaveBtn] = useState(false)
    const [showError, setShowError] = useState("Name cant be empty  , price cant be less than 0");
    // console.log(itemName + itemPrice + ItemDetail)

    const fadeAnim = useRef(new Animated.Value(0)).current
    const StartFadeOffAnimation = () => {
        fadeAnim.setValue(1)
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
        }).start();



    }
    const HandleSaveBtn = () => {

        if (itemName == "" || itemPrice <= 0) {

            Keyboard.dismiss()

            StartFadeOffAnimation();
        }
        else {
            iteminfoo.Name = itemName;
            iteminfoo.price = itemPrice;
            iteminfoo.discription = ItemDetail;
            iteminfoo.URL = imageUri;
            navigation.navigate('SellersPage', { ChangeDetail: iteminfoo })

        }
    }
    const handleEditImage = () => {
        navigation.navigate("CameraInterfaceForItem")
    }
    return (
        <SafeAreaView style={{
            height: "100%",
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }} >

            <View style={styles.Container}>
                <Image source={imageUri} style={{ width: '100%', height: 200, borderRadius: 10 }}></Image>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                    style={styles.backBtn}>

                    <Ionicons name="ios-arrow-back-sharp" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editBtn} onPress={handleEditImage}>
                    <MaterialIcons name="edit" size={30} color="black" />

                </TouchableOpacity>
                <View style={styles.form}>


                    <View style={styles.InputContainer}>
                        <Text style={styles.text}>
                            Name : &nbsp;
                        </Text>
                        <TextInput
                            value={itemName}
                            onChangeText={(txt) => {
                                if (!IsSaveBtn) { SetShowSaveBtn(true) }
                                setItemName(txt);
                            }}
                            style={[styles.input, {
                                height: 40,
                                width: 120,
                                textAlign: 'center'
                            }]}

                        />

                    </View>
                    <View style={styles.InputContainer}>
                        <Text style={styles.text}>
                            Price : &nbsp;
                        </Text>
                        <TextInput
                            value={`${itemPrice}`}
                            onChangeText={(txt) => {
                                if (!IsSaveBtn) { SetShowSaveBtn(true) }

                                setItemPrice(txt)
                            }}
                            keyboardType='numeric'
                            style={[styles.input, { height: 40, width: 80, textAlign: 'center' }]}

                        />

                    </View>
                    <View style={[styles.InputContainer, { alignSelf: 'center' }]}>
                        <Text style={styles.text}>
                            Discription : &nbsp;
                        </Text>
                        <TextInput
                            value={ItemDetail}
                            onChangeText={(txt) => {
                                if (!IsSaveBtn) { SetShowSaveBtn(true) }
                                setItemDetail(txt)
                            }}
                            multiline={true}
                            textAlignVertical="top"
                            style={[styles.input, { height: 80, width: 200 }]}

                        />

                    </View>

                    <Animated.Text style={{ color: 'red', width: '100%', textAlign: 'center', fontSize: 18, opacity: fadeAnim }}>{showError}</Animated.Text>



                </View>


                <TouchableOpacity style={{ display: IsSaveBtn ? "flex" : "none", position: 'absolute', bottom: 0, left: 0, height: 50, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#5ce678', }}
                    onPress={HandleSaveBtn}>
                    <Text style={{ fontSize: 20, fontWeight: '500', letterSpacing: 3, textTransform: 'uppercase' }}>Save</Text>
                </TouchableOpacity>






            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        // flex: 1,
        height: "100%",
        width: '100%',

        // flexDirection: 'column',
        // alignItems: 'center',

    },
    backBtn: {
        height: 45,
        width: 50,
        borderRadius: 10,
        backgroundColor: "white",
        position: 'absolute',
        top: 25,
        left: 20,
        alignItems: 'center',
        justifyContent: "center"

    },
    editBtn: {
        position: 'absolute',
        top: 15,
        right: 15
    },
    form: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#d1d1d1',
        // alignItems: 'flex-start',
        padding: 15
    },
    InputContainer: {
        width: '100%',
        // height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // margin: 15,  
        marginVertical: 15


    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        fontWeight: '500'

    },
    text: {
        fontSize: 25,
        fontWeight: '600'

    },

})
