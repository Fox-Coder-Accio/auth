import axios from "axios";
import React, {useState} from "react";



const Login = ({setToken}) => {
  const [userInput, setUserInput] = useState({ email: "", password: ""})

  let {email, password} = userInput


    function updateInput(e){
        let x = e.target.name
        setUserInput({...userInput,   [x]: e.target.value})
    }


    async function implementSubmit(e){
           e.preventDefault()


       if(!email || !password){
              alert("Please fill all the fields")
              return
       }   

    else{
        
     try{
      const response =  await axios.post("https://instagram-express-app.vercel.app/api/auth/login", {email,password}
           )
           console.log(response.data)
           setToken(response.data.data.token)
           // add it to local stroage
      
      setUserInput({email: "", password: ""})
      alert("User  Signed Successfully")
     }
     
    catch(error){
            console.log(error.response.data.message)
    }

    }
  }
    return(
        <div style={{border: "5px solid green"}}>
            <h1>Login</h1>
            <form onSubmit={implementSubmit}>

                
                
                <input type="email" placeholder="email" name="email"
                    onChange={updateInput}
                    value={email}
                />
                <input type="password" placeholder="password" name="password"
                    onChange={updateInput}
                    value={password}
                />
               
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;




