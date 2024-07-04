// {
//     Email : "*********" ,
//     Passoword : "******"
// }

export default async function Authenticate(Data){
    const ip = process.env.EXPO_PUBLIC_API_IP;
    const Options = {
        method : "POST",
        headers : {
             "Content-Type" : "application/json",
        },
        body : JSON.stringify(
            Data
        )
    }
    try{
        const response = await fetch(`http://${ip}:8000/SignUp` , Options)

        const resJson = await response.json()

        return resJson;

    }
    catch(err){
        console.log(err)
    }
}