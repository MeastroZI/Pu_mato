import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Screens/Dashboard';
import Payment from './Screens/Payment';
import ShopGallary from './Screens/ShopGallary';
import { Entypo } from '@expo/vector-icons';
import ShopePage from './Screens/ShopePage';


export default function App() {
  const [NabarHide, SetNavbarHide] = useState(false)
  const navigationRef = useRef();

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

      navigationRef.current?.navigate("FoodGallary");
    }
    else if (name == "Shop") {

      navigationRef.current?.navigate("FoodGallary");
    }
    else {


      navigationRef.current?.navigate("Dashboard");
    }

  }

  return (
    <>
      <NavigationContainer ref={navigationRef}>

        <Stack.Navigator initialRouteName='Dashboard'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerTitle: null, animation: 'none' }} />
          <Stack.Screen name='Payment' component={Payment} options={{ headerTitle: null, animation: 'none' }} />
          <Stack.Screen name='FoodGallary' component={ShopGallary} options={{ headerTitle: null, animation: 'none' }} />
          <Stack.Screen name='ShopePage' component={ShopePage} options={{ headerTitle: null, animation: 'none' }} />

        </Stack.Navigator>
      </NavigationContainer>

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
