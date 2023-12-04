 async function fetchData (AuthData) {
    const UserData = {
        UserName : "test" ,
        Password : "test"
    }
 
  try {
    const response = await fetch("http://192.168.1.11:8000/GetData", {
        method: "POST",
        headers :{'Content-Type': 'application/json'},
        body : JSON.stringify(UserData)
       
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
} catch (error) {
    console.error(`Fetch error for URL: http://192.168.1.11:8000/GetData -`, error);
    throw error;
}
};

export default fetchData




