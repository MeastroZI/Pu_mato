import React, { version } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { EvilIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import ShopeItems from '../Components/ShopeItems';




export default function ShopePage() {
    const Route = useRoute()
    const navigation = useNavigation();
    const { ShopeInfo } = Route.params;
    // const ShopeInfo = { Name: "Subway", Logo: require('../Imgs/103849129-Untitled-1.jpg') }

    const items = [
        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Pit", URL: require('../Imgs/pexels-ash-376464.jpg') },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 10, Place: "Pit", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

        { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') },

    ]
    const handleSelectShopeItem = (item) => {
        navigation.navigate('Payment', { selectedFoodItem: item });
    }
    return (
        <View style={styles.Container}>
            < >

                <View style={styles.ImgAndNameContainer}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={styles.backBtn}>

                        <Ionicons name="ios-arrow-back-sharp" size={30} color="black" />
                    </TouchableOpacity>
                    <Image source={ShopeInfo.Logo} style={styles.imageStyle} />
                    <Text style={styles.ShopeNameTxt}>{ShopeInfo.Name} </Text>

                </View>

                <FlatList
                    data={items}
                    style={styles.FlatListContainer}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ marginVertical: 10, paddingHorizontal: 10, alignItems: 'center' }} onPress={() => handleSelectShopeItem(item)}>
                            <ShopeItems itemInfo={item} />
                        </TouchableOpacity>
                    )}>


                </FlatList>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        alignItems: 'center'
    },
    backBtn: {
        height: 45,
        width: 50,
        zIndex: 5,
        borderRadius: 10,
        backgroundColor: "white",
        position: 'absolute',
        top: 35,
        left: 25,
        alignItems: 'center',
        justifyContent: "center"

    },
    FoodItemsCont: {

        height: "100%",
        width: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },
    ImgAndNameContainer: {
        width: "100%",
        height: 230,
        backgroundColor: 'black',
        // opacity: 0.2,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        overflow: 'hidden',

    },
    FlatListContainer: {
        height: 100,
        width: '100%',
        // backgroundColor: 'red'
    },
    imageStyle: {
        zIndex: 1,
        width: "100%",
        height: "100%",
        opacity: 0.5
    },
    ShopeNameTxt: {
        zIndex: 4,
        fontSize: 50,
        width: '100%',
        height: "100%",
        textAlign: 'center',
        textAlignVertical: 'center',
        position: 'absolute',
        fontWeight: '800',
        color: 'white'
    }

})
