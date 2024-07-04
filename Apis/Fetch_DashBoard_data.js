
import userDetails from "../SharedVariable/userDetails";
async function fetchData (AuthData) {
    console.log("function is called")
    const userD = await userDetails()
    console.log(userD)
    if (!userD.sucess){
        return userD;
    }
    const payload = {
        UserData : {
            email: userD.Email,
            password: userD.Password
        }
    }
    const ip = process.env.EXPO_PUBLIC_API_IP;
 
  try {
    const response = await fetch(`http://${ip}:8000/GetData`, {
        method: "POST",
        headers :{'Content-Type': 'application/json'},
        body : JSON.stringify(payload)
       
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data)
    return data;
} catch (error) {
    // console.error(`Fetch error for URL: http://${ip}:8000/GetData -`, error);
    throw error;
}
};

export default fetchData




