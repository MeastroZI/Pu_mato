import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform, ScrollView, Button, TouchableOpacity, TextInput } from
    'react-native';



import { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { EvilIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import FoodItems from '../Components/FoodItems';
import { addOrder } from '../SharedVariable/OrderListVar';






export default function Payment() {
    const [selectedValue, setSelectedValue] = useState('option1');
    const [Quantity, setQuantity] = useState(1);
    const navigation = useNavigation();


    const Route = useRoute();
    const { selectedFoodItem } = Route.params;
    // const selectedFoodItem = { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur ", price: 1000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') };

    const handleValueChange = (value) => {
        setSelectedValue(value);
    };
    const handleChangeInQuantity = (Oper) => {
        if (Oper == "add") {
            setQuantity(Quantity + 1)
        }
        else {
            Quantity > 1 ? setQuantity(Quantity - 1) : "";
        }
    }

    const handleInputQuantity = (num) => {
        num >= 1 ? setQuantity(num * 1) : setQuantity(1)

    }

    const HandleOrder = () => {
        addOrder(selectedFoodItem)
    }




    return (

        <View style={styles.Container}>
            <SafeAreaView style={styles.FoodItemsCont}>
                <ScrollView style={styles.ScrollContainer}>
                    <View>
                        <Image style={styles.Image} source={selectedFoodItem.URL}></Image>
                        <TouchableOpacity
                            onPress={() => { navigation.goBack() }}
                            style={styles.backBtn}>

                            <Ionicons name="ios-arrow-back-sharp" size={30} color="black" />
                        </TouchableOpacity>
                    </View>



                    <View style={styles.textContainer}>
                        <Text style={styles.Text}> {selectedFoodItem.Name} </Text>

                        <Text style={styles.PlaceText}>
                            <EvilIcons name="location" size={24} color="#fe4e02" />
                            {selectedFoodItem.Place}
                        </Text>

                        <Text style={styles.DisText}>
                            {selectedFoodItem.discription}
                        </Text>

                        <View style={styles.QuantityBar}>
                            <TouchableOpacity style={styles.BTN} onPress={() => handleChangeInQuantity("minus")}>
                                <Ionicons name="remove-sharp" size={26} color="black" />
                            </TouchableOpacity>

                            <TextInput
                                style={styles.NumInp}
                                value={`${Quantity}`}
                                onChangeText={(text) => { setQuantity(text) }}
                                onEndEditing={(e) => { handleInputQuantity(e.nativeEvent.text) }}
                                keyboardType="numeric"
                            />

                            <TouchableOpacity style={styles.BTN} onPress={() => handleChangeInQuantity("add")}>
                                <Ionicons name="md-add-sharp" size={26} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: "100%", height: 1, backgroundColor: 'black', marginHorizontal: 'auto' }} />


                    <View style={styles.PaymentBoard}>
                        <Text
                            style={
                                {
                                    fontSize: 25,
                                    fontWeight: "400",
                                    letterSpacing: 0.5,
                                    textAlignVertical: 'center',
                                    marginVertical: 10

                                }
                            }>Payment Options &nbsp;
                            <MaterialIcons name="payment" size={25} color="black"
                            />
                        </Text>



                        <RadioButton.Group onValueChange={handleValueChange} value={selectedValue}>
                            <RadioButton.Item
                                label="Cash On delivery"
                                value="option1"
                                style={styles.radioButton}
                                labelStyle={styles.radioButtonLabel}
                                color="black"
                                uncheckedColor="gray"
                            />
                            <RadioButton.Item
                                label="UPI"
                                value="option2"
                                style={styles.radioButton}
                                labelStyle={styles.radioButtonLabel}
                                color="black"
                                uncheckedColor="gray"
                                disabled
                            />
                            <RadioButton.Item
                                label="Debit/Credit Card"
                                labelStyle={styles.radioButtonLabel}
                                value="option3"
                                style={styles.radioButton}
                                labelStyle={styles.radioButtonLabel}
                                color="black"
                                uncheckedColor="gray"
                                disabled
                            />
                        </RadioButton.Group>


                    </View>



                </ScrollView>

                <View style={styles.StickyContainer}>
                    <Text style={styles.PriceTxt}>
                        <FontAwesome5 name="rupee-sign" size={26} color="#fe4e02" />
                        &nbsp;
                        {selectedFoodItem.price * Quantity}
                    </Text>
                    <TouchableOpacity style={styles.orderBtn} onPress={HandleOrder}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>Order Now</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>

        </View>
    )
}


const styles = StyleSheet.create({
    Container: {
        height: "100%",
        width: "100%",
        // backgroundColor: "#ced6d6",

    },
    FoodItemsCont: {


        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flexDirection: "column",

        justifyContent: "flex-start",


    },

    ScrollContainer: {
        height: "100%",
        width: "100%",



    },

    Image: {
        height: 400,
        width: "100%",
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
    textContainer: {
        width: "100%",
        height: 120,
        flexDirection: "column",
        textAlign: "left",
        paddingHorizontal: 10,
        marginVertical: 16,
        gap: 10,


        // alignItems: "center",
        justifyContent: "flex-start"
    },
    Text: {
        fontSize: 30,
        marginVertical: 6,
        letterSpacing: 0.2,
        fontWeight: "600",





    },
    PlaceText: {
        fontSize: 18,

        letterSpacing: 0.2,
        fontWeight: "300",
        textAlignVertical: "center"
    },
    DisText: {

        fontSize: 13,
        letterSpacing: 0.2,
        textAlignVertical: "center",


    },
    QuantityBar: {
        position: "absolute",
        right: 15,

        flexDirection: "row",
        backgroundColor: "white",
        height: 50,
        width: 120,
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 20,

        shadowColor: 'black', // Set the shadow color explicitly
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2,
        elevation: 2,


    },
    BTN: {
        // backgroundColor: "grey",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",

    },



    NumInp: {
        // backgroundColor: "grey",
        height: 30,
        width: 35,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: '#fe4e02'



    },

    PaymentBoard: {
        width: "100%",
        height: 400,
        marginVertical: 20,
        paddingHorizontal: 10,
        // backgroundColor: "#ced6d6",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",


        // shadowColor: 'black', // Set the shadow color explicitly
        // shadowOpacity: 1,
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowRadius: 4,
        // elevation: 5,






    },
    radioButton: {
        flexDirection: 'row-reverse', // To place the circle on the left
        alignItems: 'center',
        justifyContent: 'flex-end',
        // marginVertical: 2,
    },
    radioButtonLabel: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '600',
    },

    StickyContainer: {
        position: "absolute",
        height: 80,
        width: "100%",
        bottom: 0,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-evenly",
        justifyContent: "space-between",



        shadowColor: 'black', // Set the shadow color explicitly
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowRadius: 4,
        elevation: 8,
    },

    PriceTxt: {
        fontSize: 28,
        // backgroundColor: "grey",
        marginHorizontal: 20,
        fontWeight: "800",
        color: "#fe4e02",
    },
    orderBtn: {
        height: 50,
        width: 180,
        backgroundColor: "#fe4e02",
        // textAlign: "center
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: "center",
        marginHorizontal: 15,





    }
})