import {API} from "App-Api"
import React, { useState,useMemo } from "react";
import {Redirect, useNavigate} from "kotii-router"
import { useAuth } from "kotii-auth";
import { Chain as Validator } from "risii";
import { LoginModel } from "Models";



const Login = () => {
    //  const {user,login} = useAuth()
     const navigate = useNavigate()
     const [isLoginError,setLoginError] = useState(false)
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [errors, setFieldsErrors] = useState({error: false, valid: false});
     

   const skema = useMemo(() => 
    getLoginSchema(
        null,
        { username: setUsername, password: setPassword },
        setFieldsErrors,
        () => setFieldsErrors({ error: false, valid: true })
    ),
  [] // empty array → only run once
);
     

  
     
    const logUserIn = async(data)=>{
      console.log("Valid login data",data)
     try {
       const testUser = {
      action:"loginUser",
      payload:{
        
          name: "Ntsako Surprise",
          surname: "Mashele",
          email: "testmail@gmail.com",
          sessionType: "express"
        
      }
     }
      let response = await API.core.post("/loginUser",testUser)
      let normalizedUser = LoginModel.response(response.payload.actor)
      console.log("THE RESPONSE FROM SERVER",normalizedUser)
      login(normalizedUser)
      // console.log("THE RESPONSE FROM THE SERVER",response)
     } catch (error) {
      console.log("THE RESPONSE ERROR",error)
     }
      
      
       
    //  const testUser = {
    //   action:"loginUser",
    //   payload:{
        
    //       name: "Ntsako Surprise",
    //       surname: "Mashele",
    //       email: "testmail@gmail.com",
    //       sessionType: "express"
        
    //   }
    //  }
    // console.log("useAuth",useAuth)
   
      // fetch(`${CONFIG.APP_URL}/loginUser`, config)
      //   .then(response =>{

      //     console.log("THE RAW FETCH RESPONSE", response)
          
      //       return response.json().then(user => ({ user, response }))
      //   }
      //   ).then(({ user:serverUser, response }) => {
      //     console.log("THe text from the server",serverUser, response)
      //     if(!serverUser?.actionStatus) return setLoginError(true)
      //     if(isLoginError) setLoginError(false)
      //     login(serverUser.actor)
      //   })

   
    }
    // if(user) return <Redirect to="/admin" />
    return <div>
      <p>I'm the Login</p>
      
      {isLoginError ? <p>There Was an error logging in</p> : null}
        <form
      // onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "280px"
      }}
    >
      <div>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => {
                console.log("USER NAME CHANGE", e)
                skema.chain.validate({username: e.target.value})
            }}
            placeholder="Enter username"
           
          />
         {errors && errors?.username && (<strong>
          {errors?.username.message}
         </strong>)}
        </label>
      </div>

      <div>
        <label>
          Password
          <input
            // type="password"
            value={password}
            onChange={(e) => skema.chain.validate({password: e.target.value})}
            placeholder="Enter password"
            
          />
          {errors && errors?.password && (<strong>
          {errors?.password.message}
         </strong>)}
        </label>
      </div>

        {/* <button type="submit" >Login</button> */}
        <button onClick={(e)=>{
          e.preventDefault()
          skema.chain.handleSubmit(logUserIn, true)
         
          }
          }>Login</button>
      </form>
      </div>




};
const loginMessages = {
  username: {
    required: 'Phone number is a required field',
  },
  password: {
    exactly: 'Password should be exaclty 4 characters',
    number: 'Password shoulbe be a number',
    required: 'Password is a required field',
  },
};

const getLoginSchema = (
  actionAfters= {},
  actionBefores= {},
  setTransporter,
  doAfterAll,
) => {
  let chain = new Validator();
  chain.setErrorTransporter(setTransporter);
  chain.setActionAfterAll(doAfterAll);

  return {
    schema: chain.schema({
      
      password: chain
        .required()
        .exactly(4)
        .number()
        .actionBefore(actionBefores?.password)
        .messages(loginMessages?.password)
        .isLastField()
        .shouldMask()
        .end(),
      username: chain
        .required()
        .actionBefore(actionBefores?.username)
        .messages(loginMessages.username)
        .end(),
     
    }),
    chain: chain,
  };
};


export default Login;




