import userDetails from "../SharedVariable/userDetails";
import getImageBin from "./utils/getImagebin";

export default async function setProfileImg(data){
    const ip = process.env.EXPO_PUBLIC_API_IP;
    console.log("sendoing the req for setting profule image")
    const userD = await userDetails();
    if (!userD.sucess){
        console.log("return userds")
        
        return userD;
    }
    console.log(userD)
    console.log("here am is data is " )
    console.log(data)
    const base64 = await getImageBin(data.URL)
    const payload = {
        image : base64 ,
        UserData : {
            email: userD.Email,
            password: userD.Password
        }
    }
    
    const Options = {
        method : "POST" ,
        headers : {
             "Content-Type" : "application/json" ,

        } ,
        body : JSON.stringify(payload)
    }
    console.log("saas")
    try {
        const respose = await fetch(`http://${ip}:8000/ShopePhoto` , Options)
        if(!respose.ok){
            throw new Error('something is wrong when sending teh food item')
            console.log(respose)
        }
        else {
            console.log(respose)
        }
    }
    catch(error){
        console.log("error while sendin the food itemd")
        console.log(error)
    }
   
}


