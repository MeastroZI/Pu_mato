import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'

export default async function userDetails() {

    let Email = await AsyncStorage.getItem('@Email')
    let UserName = await AsyncStorage.getItem('@UserName')
    let Password = await AsyncStorage.getItem('@Password')
    let accountType = await AsyncStorage.getItem('@AccountType')
    // await AsyncStorage.setItem('@UserName', "somethingchange")
    console.log("Under the userdetrai")
    console.log(UserName)
    console.log(Password)
    console.log(Email)
    console.log(accountType)
    console.log(null && null)
    if (Email &&  Password ){
        return {sucess : true , Email : Email , Password : Password , UserName : UserName , AccountType : accountType}
    }
    else {
        return {sucess : false}
    }
}
