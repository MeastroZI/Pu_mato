import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import FoodItems from '../Components/FoodItems';


export default function Dashboard() {
  return (
    <View style={styles.Container}>
      <View style={styles.FoodItemsCont}>
        <FoodItems Name="Dabeli" discription="South indian" price={1000} Place={"Pit"}></FoodItems>
        <FoodItems Name="Dabeli" discription="Worlds worstsddddddddd dabeli" price={1000} Place={"Piet"} ></FoodItems>

      </View>

      <View style={styles.Navbar}></View>

    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    height: "100%",
    width: "100%",

    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  Navbar: {
    height: 60,
    width: "100%",
    backgroundColor: "black",


    position: "absolute",
    bottom: 0,

  },
  FoodItemsCont: {
    width: "100%",
    height: "100%",
    backgroundColor: "#d0c7db",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 35

  }
})
