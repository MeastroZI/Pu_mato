import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function ItemsDetail() {
    const navigate = useNavigation();
    const route = useRoute();
    // const { item } = route.params;
    const item = { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Pit", URL: require('../Imgs/pexels-ash-376464.jpg'), id: 1 }

    const [itemName, setItemName] = useState(item.Name);
    const [itemPrice, setItemPrice] = useState(item.price);
    const [ItemDetail, setItemDetail] = useState(item.discription);
    const [IsSaveBtn, SetShowSaveBtn] = useState(false)
    // console.log(itemName + itemPrice + ItemDetail)
    return (
        <SafeAreaView style={{
            height: "100%",
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }} >

            <View style={styles.Container}>
                <Image source={item.URL} style={{ width: '100%', height: 200, borderRadius: 10 }}></Image>

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



                </View>


                <TouchableOpacity style={{ display: IsSaveBtn ? "flex" : "none", position: 'absolute', bottom: 0, left: 0, height: 50, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#5ce678', }}>
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
        padding: 5,
        fontSize: 20,
        borderRadius: 10,
        fontWeight: '500'

    },
    text: {
        fontSize: 25,
        fontWeight: '600'

    },

})
