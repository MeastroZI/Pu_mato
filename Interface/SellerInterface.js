import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SellersPage from '../SellerSideScreens/SellersPage';
import CameraInterface from '../SellerSideScreens/CameraInterface';
// import ImageEditingPage from '../SellerSideScreens/ImageEditingPage';
import ItemsDetail from '../SellerSideScreens/ItemsDetail';
import CameraInterfaceForItem from '../SellerSideScreens/CameraInterfaceForItem';
import SellerOrderList from '../SellerSideScreens/SellerOrdersList';
import OrderDetails from '../SellerSideScreens/OrderDetails';
import Login from './Login';


export default function SellerInterface({ navigation }) {
    const Stack = createNativeStackNavigator();
    return (
        // <SellersPage />

        <Stack.Navigator initialRouteName='SellersPage'
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name='SellersPage' component={SellersPage} options={{ headerTitle: null, animation: 'none' }} />

            <Stack.Screen name='Login' component={Login} options={{ headerTitle: null, animation: 'none' }} />

            <Stack.Screen name='cameraInterface' component={CameraInterface} options={{ headerTitle: null, animation: 'none' }} />
            {/* <Stack.Screen name='ImageEditingPage' component={ImageEditingPage} options={{ headerTitle: null, animation: 'none' }} /> */}

            <Stack.Screen name='ItemsDetail' component={ItemsDetail} options={{ headerTitle: null, animation: 'none' }} />
            <Stack.Screen name='CameraInterfaceForItem' component={CameraInterfaceForItem} options={{ headerTitle: null, animation: 'none' }} />
            <Stack.Screen name='SellerOrderList' component={SellerOrderList} options={{ headerTitle: null, animation: 'none' }} />
            <Stack.Screen name='OrderDetails' component={OrderDetails} options={{ headerTitle: null, animation: 'none' }} />



        </Stack.Navigator>

    )
}

