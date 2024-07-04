// {
//     Email : "*********" ,
//     Passoword : "******"
// }

export default async function sendMail(Email , Password , name){
    const ip = process.env.EXPO_PUBLIC_API_IP;
    const Options = {
        method : "POST",
        headers : {
             "Content-Type" : "application/json",
        },
        body : JSON.stringify(
            {
                email : Email,
                password : Password,
                userName : name
            }
        )
    }
    try{
        const token = await fetch(`http://${ip}:8000/SendMail` , Options)
        return token
    }
    catch(err){
        console.log(err)
    }
}