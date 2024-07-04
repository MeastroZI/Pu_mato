import React from 'react'
import { useState, useEffect, useRef } from 'react';
import SellerInterface from './Interface/SellerInterface'
import BuyerInterface from './Interface/BuyerInterface'
import Login from './Interface/Login'
import SignUp from './Interface/SignUp'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SellersPage from './SellerSideScreens/SellersPage';
import CameraInterface from './SellerSideScreens/CameraInterface';
import ItemsDetail from './SellerSideScreens/ItemsDetail';
import CameraInterfaceForItem from './SellerSideScreens/CameraInterfaceForItem';
import SellerOrderList from './SellerSideScreens/SellerOrdersList';
import OrderDetails from './SellerSideScreens/OrderDetails';
import Dashboard from './Screens/Dashboard';
import Orders from './Screens/Orders';
import Payment from './Screens/Payment';
import ShopGallary from './Screens/ShopGallary';
import ShopePage from './Screens/ShopePage';



export default function Index() {
  const navigationRef = useRef();
  const Stack = createNativeStackNavigator();
  const Email = AsyncStorage.getItem('@Email');
  const Password = AsyncStorage.getItem('@Password');

  const initialRouteName = (Email!=null && Password!=null )? 'BuyerSideComponents':'Login'
  return (
    <NavigationContainer ref={navigationRef}>

      <Stack.Navigator initialRouteName='Login'
        screenOptions={{
          headerShown: false
        }}
      >
      <Stack.Screen name='Login' component={Login} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='SellerSideComponents' component={SellerInterface} options={{ headerTitle: null, animation: 'none' }} />

        {/* <Stack.Screen name='SellersPage' component={SellersPage} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='cameraInterface' component={CameraInterface} options={{ headerTitle: null, animation: 'none' }} /> */}
        {/* <Stack.Screen name='ImageEditingPage' component={ImageEditingPage} options={{ headerTitle: null, animation: 'none' }} /> */}

        {/* <Stack.Screen name='ItemsDetail' component={ItemsDetail} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='CameraInterfaceForItem' component={CameraInterfaceForItem} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='SellerOrderList' component={SellerOrderList} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='OrderDetails' component={OrderDetails} options={{ headerTitle: null, animation: 'none' }} /> */}







        <Stack.Screen name='BuyerSideComponents' component={BuyerInterface} options={{ headerTitle: null, animation: 'none' }} />
        {/* <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='Orders' component={Orders} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='Payment' component={Payment} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='FoodGallary' component={ShopGallary} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='ShopePage' component={ShopePage} options={{ headerTitle: null, animation: 'none' }} /> */}




        <Stack.Screen name='SignUp' component={SignUp} options={{ headerTitle: null, animation: 'none' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
