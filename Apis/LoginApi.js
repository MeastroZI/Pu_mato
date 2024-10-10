// {
//     Email : "*********" ,
//     Passoword : "******"
// }

export default async function LoginApi(Data){
    const ip = process.env.EXPO_PUBLIC_API_IP;
    const Options = {
        method : "POST" ,
        headers : {
             "Content-Type" : "application/json" ,

        },
        body : JSON.stringify({UserData : Data})
    }
    console.log("sending the req")
    try{
        const response = await fetch(`http://${ip}:8000/Login` , Options)
        console.log(response)
        if (!response.ok){
            throw new Error (response.Error)
        }
        else {
            const resData = await response.json()
            
            return resData.sucess;
        }
    }
    catch(err){
        return false
        console.log(err)
    }
}