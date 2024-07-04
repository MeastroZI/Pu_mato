

export default function Fetch_Shope_Data(AuthData) {
  const ip = process.env.EXPO_PUBLIC_API_IP;

  const userD = userDetails()
  if (!userD.sucess) {
    return userD;
  }
  const payload = {
    UserData: {
      email: userD.Email,
      password: userD.Password
    }
  }
  console.log(ip)
  if (AuthData) {
    return (
      fetch(`http://${ip}:8000/GetShope`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then((res) => { return res.json() }).
        then((data) => {
          console.log(data)
          return data
        }).catch((err) => {
          throw err;
        })

    )

  }
  console.error("AuthData is not provided ")
}
