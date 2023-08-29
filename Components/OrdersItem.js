import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { EvilIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

export default function OrdersItem({ itemInfo, cancleOrder }) {
    const OrderProgress = 3;


    return (
        <View style={styles.itemsContainer}>
            <Image style={styles.image} source={itemInfo.URL} />
            <View style={styles.InfoContainer}>

                <TouchableOpacity onPress={() => cancleOrder(itemInfo.id)} style={styles.CancleOrderBtn}>
                    <FontAwesome name="remove" size={16} color="white" />
                </TouchableOpacity>




                <View style={styles.TxtContainer}>
                    <Text style={{ fontSize: 23, fontWeight: '600' }}>{itemInfo.Name}</Text>
                    <Text style={{ fontSize: 23, fontWeight: '300', color: 'grey' }}>
                        {/* <FontAwesome5 name="rupee-sign" size={15} color="black" /> */}
                        <FontAwesome name="rupee" size={23} color="grey" />
                        &nbsp;
                        {itemInfo.price}
                    </Text>


                </View>

                <View style={styles.ProgresStatus}>


                    <View style={[styles.Circle, { borderColor: OrderProgress >= 1 ? "#007F4F" : "black" }]} >
                        <FontAwesome name="shopping-bag" size={13} color={OrderProgress >= 1 ? "#007F4F" : "grey"} />
                    </View>


                    <View style={[styles.Circle, { borderColor: OrderProgress >= 2 ? "#007F4F" : "black" }]} >
                        <FontAwesome name="motorcycle" size={15} color={OrderProgress >= 2 ? "#007F4F" : "grey"} />
                    </View>


                    <View style={[styles.Circle, { borderColor: OrderProgress >= 3 ? "#007F4F" : "black" }]} >
                        <FontAwesome name="money" size={15} color={OrderProgress >= 3 ? "#007F4F" : "grey"} />
                    </View>




                    <View style={[styles.CircleContainer, { width: `${OrderProgress * 25}%` }]} />




                    {/* <View style={[styles.progressBar, { width: '50%' }]} /> */}






                </View>
            </View>


        </View>


    )
}

const styles = StyleSheet.create({
    itemsContainer: {
        height: 100,
        width: '100%',
        backgroundColor: '#f0eeec',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 10, // Shadow for Android
        shadowColor: 'black', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        overflow: 'hidden',
        shadowRadius: 10,
        borderRadius: 10,

    },
    InfoContainer: {
        flex: 1,
        height: "100%",

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-evenly",
        // backgroundColor: 'red'

    },
    image: {
        height: '100%',
        // opacity: 0.1,
        width: 100,
        borderRadius: 10,


    },
    TxtContainer: {

        width: "100%",
        // backgroundColor: "red",
        // backgroundColor: 'grey',


        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-evenly",
        // gap: 10

        // alignItems: 'flex-start',
        // justifyContent: "center",
        // gap: 10


    },
    ProgresStatus: {


        height: 3,
        width: "70%",
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: 0.5,
        zIndex: 2,
        overflow: 'visible',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly",
        marginVertical: 15,


    },

    CircleContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'green',
        flexDirection: 'row',



    },

    Circle: {
        // position: 'absolute',
        borderWidth: 1,
        borderRadius: 50,
        width: 25,
        height: 25,
        zIndex: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',




    },

    CancleOrderBtn: {
        position: 'absolute',
        top: 0,
        right: 5,
        height: 23,
        width: 23,
        backgroundColor: '#db625c',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

        alignItems: 'center',
        justifyContent: 'center'
    }
})

