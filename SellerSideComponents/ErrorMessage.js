import React, { useRef } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image, Animated } from 'react-native';

export default function ErrorMessage({ Message }) {



    const fadeAnim = new Animated.Value(1);
    Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
    }).start();


    return (
        Message != "" && (
            <Animated.View style={[styles.ErrorMessageContainer, { opacity: fadeAnim }]}>
                <View style={styles.MessageBox}>
                    <Text style={{ fontSize: 18, fontFamily: 'sans-serif', fontWeight: '600', color: 'white' }}>
                        Error: {Message}
                    </Text>
                </View>
            </Animated.View>
        )
    );

}

const styles = StyleSheet.create({
    ErrorMessageContainer: {
        position: 'absolute',
        // height: 20,
        width: "100%",
        // backgroundColor: 'red',
        bottom: 100,
        left: 0,
        alignItems: 'center',

    },
    MessageBox: {
        height: 30,
        width: '70%',
        backgroundColor: '#672020',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',


    }
})
