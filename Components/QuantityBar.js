import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform, ScrollView, Button, TouchableOpacity, TextInput } from
    'react-native';
import { EvilIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function QuantityBar({ SetQuantityProp, QuantityProp, sizeRatio = 1, BorderRadius = 20, Editable = true }) {
    // const [Quantity, SetQuantityProp] = useState(1);

    const handleChangeInQuantity = (Oper) => {
        if (Oper == "add") {
            SetQuantityProp(QuantityProp + 1)
        }
        else {
            QuantityProp > 1 ? SetQuantityProp(QuantityProp - 1) : "";
        }
    }

    const handleInputQuantity = (num) => {
        num >= 1 ? SetQuantityProp(num * 1) : SetQuantityProp(1)

    }

    return (
        <View style={[styles.QuantityBar, { height: 50 * sizeRatio, width: 120 * sizeRatio, borderRadius: BorderRadius }]}>

            <TouchableOpacity style={styles.BTN} onPress={() => handleChangeInQuantity("minus")}>
                <Ionicons name="remove-sharp" size={26} color="black" />
            </TouchableOpacity>

            <TextInput
                style={styles.NumInp}
                value={`${QuantityProp}`}
                onChangeText={(text) => { SetQuantityProp(text) }}
                onEndEditing={(e) => { handleInputQuantity(e.nativeEvent.text) }}
                keyboardType="numeric"
                editable={Editable}
            />

            <TouchableOpacity style={styles.BTN} onPress={() => handleChangeInQuantity("add")}>
                <Ionicons name="md-add-sharp" size={26} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    QuantityBar: {

        // right: 15,

        flexDirection: "row",
        backgroundColor: "white",

        alignItems: "center",
        justifyContent: "space-around",


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
})
