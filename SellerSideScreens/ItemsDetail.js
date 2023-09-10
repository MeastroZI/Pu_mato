import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function ItemsDetail() {
    const navigate = useNavigation();
    const route = useRoute();

    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: 'red' }}>

        </View>
    )
}
