import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';

export default function FoodShope({ Name, Logo }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:Logo}} />
            <Text style={styles.txt}>{Name}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: '98%',
        backgroundColor: 'black',
        borderRadius: 10,
        overflow: 'hidden',

        marginVertical: 5,

    },
    image: {

        height: "100%",
        width: "100%",
        opacity: 0.5

    },
    txt: {
        position: "absolute",
        fontSize: 40,
        fontWeight: '900',
        width: '100%',
        letterSpacing: 8,
        color: 'white',
        textShadowColor: 'black', // Shadow color
        textShadowOffset: { width: 2, height: 2 }, // Offset (x, y)
        textShadowRadius: 5,





    }
})
