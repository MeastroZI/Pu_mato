export default async function fetchOrds ( ) {
    
    const Options = {
        method : "POST" ,
        headers : {
             "Content-Type" : "application/json" ,

        } ,
        body : JSON.stringify({
            UserName : "test" ,
            Password : "test"
        })
    }
   
    try {
        const response = await fetch("http://192.168.4.121:8000/Fetch_Orders" , Options)

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