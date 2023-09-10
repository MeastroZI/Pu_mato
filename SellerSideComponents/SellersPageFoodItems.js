import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image } from 'react-native';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { EvilIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';



export default function SellersPageFoodItems({ ItemInfo }) {
    const [fontsLoaded] = useFonts({
        Roboto_500Medium,
    });
    const { URL, Name, price } = ItemInfo;
    return (
        <View style={styles.FoodItems}>
            <Image source={URL} style={{
                height: '50%', width: '100%', borderRadius: 10,

            }}>

            </Image>
            <Text style={{ fontSize: 20, width: '100%', textAlign: 'left', margin: 10, fontWeight: '500' }}>
                {Name}
            </Text>

            <Text style={{
                fontWeight: "800",
                color: "#fe4e02", width: '100%', textAlign: 'left', fontSize: 20
            }}>
                <FontAwesome5 name="rupee-sign" size={20} color="#fe4e02" />
                &nbsp;
                {price}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    FoodItems: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#e8e8e8',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 15,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 16 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,
    }
})
