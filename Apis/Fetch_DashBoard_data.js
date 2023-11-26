 function fetchData () {
 
  return fetch("http://192.168.1.11:8000/GetData", {
    method: "GET",
  })
    .then((response) => {
      // Check if the request was successful (status in the range 200-299)
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
     
      return data;
    })
    .catch((error) => {
      console.error("Fetch error:", error); // Handle errors
      throw error; // Propagate the error for further handling if needed
    });
};

export default fetchData




