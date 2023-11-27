import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { EvilIcons, Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { memo } from 'react/cjs/react.production.min';


const Fooditems = memo(function FoodItems({ Name, discription, price, Place, URL }) {
    return (
        <View style={styles.Items}>
           
            <Image style={styles.Image} source={{uri:URL}}>
            </Image>

            <View style={styles.textContainer}>
                <Text style={styles.ItemName}>
                    {Name}
                </Text>
                <Text style={styles.discription}>
                    {discription}
                </Text>
                <View style={styles.PricePlace}>
                    <Text style={{ fontWeight: "300", fontSize: 15 }}>
                        <EvilIcons name="location" size={20} color="black" />

                        {Place}
                    </Text>
                    <Text style={{ fontWeight: "300", fontSize: 15 }}>
                        <FontAwesome name="rupee" color="black" />
                        {price}
                    </Text>
                </View>


            </View>
        </View >
    )
})

const styles = StyleSheet.create({
    Items: {
        width: "90%",
        height: 270,
        backgroundColor: "#c4b8b8",
        // borderStyle: 'solid',
        // borderWidth: 2,
        // borderColor: "black",
        borderRadius: 10,
        marginVertical: 7,
        overflow: "hidden",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",


        shadowColor: 'black',
        shadowOffset: { width: 5, height: 16 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,






    },
    Image: {
        height: "65%",
        width: "100%"
    },
    textContainer: {
        width: '100%',
        flexDirection: "column",

        gap: 5,
        top: 5




    },
    ItemName: {
        width: "100%",
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: '500',
        textAlignVertical: 'center',
        paddingHorizontal: 10,

    },
    PricePlace: {
        width: "100%",
        textAlignVertical: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",












    },
    discription: {
        fontSize: 14,
        letterSpacing: 1,
        fontWeight: '400',
        textAlignVertical: 'center',
        paddingHorizontal: 10,
    }

})

export default Fooditems