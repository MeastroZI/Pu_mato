import fetchData from "./Fetch_DashBoard_data.mjs";

fetchData().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})