import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, Image , Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { EvilIcons, Ionicons, FontAwesome } from '@expo/vector-icons';




export default function OrderDetails({navigation}) {
  const [ProgressStatus , setProgressStatus] = useState({Packed: false , Departed : false , Payment : false , Complete: false})
  const route = useRoute();
  // const navigation = useNavigation();
  const OrderInfo = route.params.itemDetail
  console.log(OrderInfo)
  HandlingPressingOnStatus = (params) => {
    if (params == "Packing") {
      console.log('hell')
      Alert.alert(
        "Irreversable Operation",
        "Do you want to allow this app to access your location?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK", onPress: () => setProgressStatus({ ...ProgressStatus, Packed: true }) }
        ],
        { cancelable: false }
      );
  
    }
    else if (params == "Departing") {
      Alert.alert(
        "Irreversable Operation",
        "Do you want to allow this app to access your location?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK", onPress: () => setProgressStatus({ ...ProgressStatus, Departed: true }) }
        ],
        { cancelable: false }
      );
    }
    else if (params == "Payment") {
      Alert.alert(
        "Irreversable Operation",
        "Do you want to allow this app to access your location?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK", onPress: () => setProgressStatus({ ...ProgressStatus, Payment: true }) }
        ],
        { cancelable: false }
      );
    }

    else if (params == "Complete"){
      Alert.alert(
        "Irreversable Operation",
        "Completing process means the payment is done after this this order is no longer be open pls do this only when the payment is receive",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK", onPress: () => setProgressStatus({ ...ProgressStatus, Complete: true }) }
        ],
        { cancelable: false }
      );
    }
  }
  return (
    <SafeAreaView style={styles.SafeAreaCont}>

      <View>
      <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                    style={styles.backBtn}>

                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
        <Image source={OrderInfo.URL} style={{ width: '100%', height: 200, borderRadius: 10 }}></Image>
        <View style={{ padding: 20, backgroundColor: '#f9f9f9', borderRadius: 10, margin: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{OrderInfo.Name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 ,}}>
            <Text style={{ fontWeight: 'bold', flex: 1,    fontSize:20}}>Address:</Text>
            <Text style={{ flex: 2   , fontSize:20}}>{OrderInfo.address}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={{ fontWeight: 'bold', flex: 1   , fontSize:20}}>Quantity:</Text>
            <Text style={{ flex: 2   , fontSize:20}}>{2}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={{ fontWeight: 'bold', flex: 1   , fontSize:20}}>Amount:</Text>
            <Text style={{ flex: 2   , fontSize:20}}>{OrderInfo.price}</Text>
          </View>

          <View style={styles.ProgressSetter}>

            <View>
            <TouchableOpacity  Name="Packing"  style={{backgroundColor : ProgressStatus.Packed?"green":"grey", height : 50 , width : 50 , alignItems : 'center' , justifyContent : 'center' ,borderRadius:10}} onPress={()=>{
              HandlingPressingOnStatus("Packing")
            }}>
              <FontAwesome name="shopping-bag" size={30} color= "white"  />
            </TouchableOpacity>
              <Text style={{fontSize:13 ,fontWeight : 'bold'}}> Packing</Text>

            </View>
            
            <View>
            <TouchableOpacity Name="Departing" style={{backgroundColor : ProgressStatus.Departed?"green":"grey", height : 50 , width : 50 , alignItems : 'center' , justifyContent : 'center' ,borderRadius:10}} onPress={()=>{
              HandlingPressingOnStatus("Departing")

            }}>

              <FontAwesome name="motorcycle" size={30} color= "white" />
            </TouchableOpacity>
              <Text style={{fontSize:13 ,fontWeight : 'bold'}}>Departed</Text>
              
            </View>


            
            <View>

            <TouchableOpacity Name="Payment" style={{backgroundColor : ProgressStatus.Payment?"green":"grey", height : 50 , width : 50 , alignItems : 'center' , justifyContent : 'center' ,borderRadius:10}} onPress={()=>{
              HandlingPressingOnStatus("Payment")
            }}>
              <FontAwesome name="money" size={30} color= "white" />
            </TouchableOpacity>
              <Text style={{fontSize:13 ,fontWeight : 'bold'}}>Payment</Text>
            </View>

          </View>
        </View>
      </View>
        <TouchableOpacity style={{position : 'absolute' ,  height : 50 , width : '100%' , bottom : 0 , backgroundColor : 'green' ,alignItems : 'center' , justifyContent : 'center' }} onPress={()=>{HandlingPressingOnStatus("Complete")}}>
            <Text style ={{fontSize : 25 , letterSpacing : 5 , fontWeight : 'bold' , color : 'white'}}>Complete</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaCont: {
    width: "100%",
    height: "100%",

    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },
  ProgressSetter : {
    width : '100%' ,
    height : 80 ,
    backgroundColor : '#dbdbdb',
    flexDirection : 'row',
    marginVertical : 30,
    borderRadius : 10 ,
    alignItems : 'center' ,
    justifyContent : 'space-around',

  },
  backBtn: {
    height: 45,
    width: 50,
    borderRadius: 10,
    backgroundColor: "white",
    position: 'absolute',
    top: 25,
    left: 20,
    alignItems: 'center',
    justifyContent: "center",
    zIndex : 2,

},
})