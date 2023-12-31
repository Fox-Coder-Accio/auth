import React,{useEffect, useState} from "react";
import axios from "axios";


const Dashboard = ({token}) => {

    const [joke, setJoke] = useState("")


    // useEffect(() => {
    //     // if token is there in local storage then set it to state
    // },[])


    function getZuku(){
          axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
              headers:{
                  Authorization: `Bearer ${token}`
              }
          })
          .then(response => setJoke(response.data.data.message))
        .catch(error => console.log(error.response.data.message))
    }



    return(
        <div>
              <h1> Dashboard </h1>
              <button onClick={getZuku}> Get Joke</button>
              {
                joke && <p>{joke}</p>
              }

        </div>
    )
}

export default Dashboard;