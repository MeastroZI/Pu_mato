import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { EvilIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

export default function ShopeItems({ itemInfo }) {

    return (
        <View style={styles.itemsContainer}>
            <Image style={styles.image} source={itemInfo.URL} />
            <View style={styles.TxtContainer}>
                <Text style={{ fontSize: 23, fontWeight: '600', marginVertical: 5 }}>{itemInfo.Name}</Text>
                <Text style={{ fontSize: 15, fontWeight: '300', color: 'grey' }}>
                    {/* <FontAwesome5 name="rupee-sign" size={15} color="black" /> */}
                    <FontAwesome name="rupee" size={15} color="grey" />
                    &nbsp;
                    {itemInfo.price}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: '300', color: 'grey' }}>
                    {itemInfo.discription}
                </Text>

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
    image: {
        height: '100%',
        width: 100,
        borderRadius: 10,


    },
    TxtContainer: {
        height: "100%",
        width: '100%',
        paddingHorizontal: 20,

        alignItems: 'flex-start',
        // justifyContent: "center",
        // gap: 10


    },
    Name: {

    }
})
