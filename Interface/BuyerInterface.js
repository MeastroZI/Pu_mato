import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
import Payment from '../Screens/Payment';
import ShopGallary from '../Screens/ShopGallary';
import { Entypo } from '@expo/vector-icons';
import ShopePage from '../Screens/ShopePage';
import Orders from '../Screens/Orders';
import Login from './Login';



export default function BuyerInterface({navigation}) {
  const [NabarHide, SetNavbarHide] = useState(false)

  useEffect(() => {
    
    const HideNavbar = Keyboard.addListener('keyboardDidShow', () => {
      SetNavbarHide(true);
    });
    const ShowNavbar = Keyboard.addListener('keyboardDidHide', () => {
      SetNavbarHide(false);
    });

    return () => {
      HideNavbar.remove();
      ShowNavbar.remove();
    };
  }, []);
  const Stack = createNativeStackNavigator();


  const HandleNavbarPress = (name) => {

    if (name == "Order") {

      navigation.navigate("Orders");
    }
    else if (name == "Shop") {

      navigation.navigate("FoodGallary");
    }
    else {


      navigation.navigate("Dashboard");
    }

  }

  return (
    <>

      <Stack.Navigator initialRouteName='Dashboard'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='Login' component={Login} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='Orders' component={Orders} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='Payment' component={Payment} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='FoodGallary' component={ShopGallary} options={{ headerTitle: null, animation: 'none' }} />
        <Stack.Screen name='ShopePage' component={ShopePage} options={{ headerTitle: null, animation: 'none' }} />

      </Stack.Navigator>


      <View style={{ ...styles.Navbar, display: NabarHide ? 'none' : 'flex' }} >
        <TouchableOpacity onPress={() => HandleNavbarPress("Home")} style={styles.iconContainer}>
          <Entypo name="home" size={28} color="white" />

        </TouchableOpacity>
        <TouchableOpacity onPress={() => HandleNavbarPress("Shop")} style={styles.iconContainer}>

          <Entypo name="shop" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => HandleNavbarPress("Order")} style={styles.iconContainer}>

          <Entypo name="shopping-cart" size={28} color="white" />
        </TouchableOpacity>
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Navbar: {
    height: 50,

    width: "100%",
    backgroundColor: "black",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    bottom: 0,
  },
  HideNavbar: {
    display: "none"
  },
  iconContainer: {
    height: "100%",
    width: '20%',
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: "center"
  },


});
