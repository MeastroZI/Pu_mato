import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image, Animated } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Loading from '../Components/loading';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import sendFoodItem from '../Apis/SendFoodItems';


export default function ItemsDetail({ navigation }) {
    // const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const route = useRoute();
    const ItemInfo = route.params && route.params.ItemInfo ? route.params.ItemInfo : undefined;
    // const { ItemInfo, EditedImageUri } = route.params;
    const EditedImageUri = route.params && route.params.EditedImageUri ? route.params.EditedImageUri : undefined;


    // if (route.params) {

    // }
    const iteminfoo = useRef(ItemInfo).current
    const imageUri = EditedImageUri || ItemInfo ? (EditedImageUri ? { uri: EditedImageUri } : ItemInfo.URL) : require("../Imgs/noImg.jpeg")
    // const imageUri = EditedImageUri ? { uri: EditedImageUri } : ItemInfo.URL

    // const ItemInfo = { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Pit", URL: require('../Imgs/pexels-ash-376464.jpg'), id: 1 }

    const [itemName, setItemName] = useState(iteminfoo ? iteminfoo.Name : "");
    const [itemPrice, setItemPrice] = useState(iteminfoo ? iteminfoo.price : 0);
    const [ItemDetail, setItemDetail] = useState(iteminfoo ? iteminfoo.discription : "");
    const [IsSaveBtn, SetShowSaveBtn] = useState(false)
    const [showError, setShowError] = useState("Name cant be empty, price cant be less than 0");
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
    const HandleSaveBtn = async () => {
     
        setIsLoading(true)

        console.log("making it of")
        

        if (itemName == "" || itemPrice <= 0) {

            Keyboard.dismiss()

            StartFadeOffAnimation();
        }
        else {
            iteminfoo.Name = itemName;
            iteminfoo.price = itemPrice;
            iteminfoo.discription = ItemDetail;
            iteminfoo.URL = imageUri.uri;
            // const res = await fetch(iteminfoo.URL)
            // const imageData = await res.blob();
            setIsLoading(false)
            sendFoodItem(iteminfoo);
            // navigation.navigate('SellersPage', { ChangeDetail: iteminfoo })

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
                <Loading isLoading={isLoading}></Loading>
                <Image source={imageUri} style={{ width: '100%', height: 200, borderRadius: 10 }}></Image>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                    style={styles.backBtn}>

                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editBtn} onPress={handleEditImage}>
                    <Ionicons name="camera" size={45} color="black" />

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
