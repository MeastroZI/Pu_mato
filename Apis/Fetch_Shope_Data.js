

export default function Fetch_Shope_Data(AuthData) {
    if(AuthData){
        return (
          fetch("http://192.168.1.11:8000/GetShope " , {
              method : "POST" , 
              headers : {
                'Content-Type':'application/json' 
              },
              body : JSON.stringify(AuthData)
          }).then((res)=> {return res.json()}).
          then((data)=>{
            console.log(data)
            return data
          }).catch((err)=>{
            throw err ;
          })
        
        )

    }
    console.error("AuthData is not provided ")
}
