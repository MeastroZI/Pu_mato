import userDetails from "../SharedVariable/userDetails";
export default async function MakeOrders (Id , Quantity) {
    const ip = process.env.EXPO_PUBLIC_API_IP;
    const userD = userDetails()
    if (!userD.sucess){
        return userD;
    }
    const payload = {
        UserData : {
            email: userD.Email,
            password: userD.Password
        },
        ItemId : Id , 
        Quantity : Quantity
    }
    const Options = {
        method : "POST" ,
        headers : {
             "Content-Type" : "application/json" ,

        } ,
        body : JSON.stringify(payload)
    }
   
    try {
        const response = await fetch(`http://${ip}:8000/MakeOrders` , Options)

        if(!response.ok) {
            throw new Error (`Bhi error aya he :(   ERROR : ${response.Error}`)
        }
        else { 
             console.log(response)
            const data = await response.json() ;
            return data ;
        }

    }
    catch (error) {
        console.error(`Bhi error aya he  ${error}`)
    }
    
}