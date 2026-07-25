
import styled from "kotii-styled";
import { Link } from "kotii-router";
import * as mediaQueries from "../styles/styled_config.js"
import { Chain as Validator } from "risii";
import { LoginModel } from "Models";
import React, { useState,useMemo } from "react";
import { Interactive,VisibleWrapper } from "kotii";
import { API } from "App-Api";

const PageTitle = styled("h1")(() => {
  return {
   
  fontSize: "40px",
  position: "relative",
  color: "#4f4141",
  display: "flex",
  alignSelf: "center"
  };
});

const AskLine = styled("div")(() => {
  return {

  position: "relative",
  color: "#4f4141",
  display: "flex",
  alignSelf: "center",
  flexDirection: "row",
  gap: 5,
  marginTop: 15

  };
});


const StyledLink = styled(Link)({
  display: "flex",
  flexDirection: "row",
  color: "green",
  cursor: "pointer",
  position: "relative"
});


const Form = styled(("form"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "100%",
  alignItems:"center",
  marginTop: "20px",
  gap: 10
})

const FormInput = styled(("input"))({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "50px",
  border: "none",
  width: "50%",
  borderRadius: "8px",
  backgroundColor: "wheat",
  paddingLeft: "2%",
  [`${mediaQueries.size.tabletPortrait}`]:{
    width: "80%"
 },
 [`${mediaQueries.size.mediumPhone}`]:{
  width: "90%"
},
})

const ForgotPasword = styled((Link))({
  display: "flex",
  backgroundColor: "transparent",
  flexDirection: "column",
  border: "none",
  paddingLeft: "2%",
  fontSize: "15px",
  cursor: "pointer",
  borderBottom: "solid 2px red",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  height: 40,
  marginLeft: "35%",
  textDecoration: "none",
  color: "black"
  
})

const StyledButton = styled("button")({
  border: "none",
  width: "150px",
  backgroundColor: "inherit",
  cursor: "pointer",
  position: "relative",
  alignSelf:"center",
  marginBottom: "50px",

});

const ButtonFrontCard = styled("small")({
  backgroundColor: "#00BFA5",
  width: "100%",
  height: "50px",
  display: "flex",
  position: "relative",
  zIndex: 5,
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight: "bolder",
  lineHeight: "3px",
  fontSize: "15px"
});
const ButtonBackCard = styled("small")({
  backgroundColor: "#F7C02B",
  width: "100%",
  height: "50px",
  display: "flex",
  position: "absolute",
});

const StoreReturn = styled(("button"))({
  display: "flex",
  backgroundColor: "transparent",
  flexDirection: "column",
  border: "none",
  paddingLeft: "2%",
  fontSize: "15px",
  cursor: "pointer",
  borderBottom: "solid 2px red",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  height: 40,
 
  
})

const SignUpLoginContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: 50,
  gap: 15
});

const AppForm = ()=>{

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
          console.log("THE RESPONSE IN FORM", response)
          if(response.error){
             console.log("THE LOGIN RESPONSE", response.payload.message)
          }else{
            let normalizedUser = LoginModel.response(response.payload.actor)
             console.log("THE RESPONSE FROM SERVER",normalizedUser)
             login(normalizedUser)
          }

          // console.log("THE RESPONSE FROM THE SERVER",response)
         } catch (error) {
          console.log("THE RESPONSE ERROR",error)
         }
          
          
           
       
       
        }
         
    

    return ( 
        <Interactive>
            <Form>

                 <FormInput placeholder="Username"  
                type="text"
                value={username}
                onChange={(e) => {
                    console.log("USER NAME CHANGE", e)
                    skema.chain.validate({username: e.target.value})
                }} 
            />
             {errors && errors?.username && (<strong>
          {errors?.username?.message}
         </strong>)}

            
           
           
            <FormInput placeholder="password" value={password} onChange={(e) => skema.chain.validate({password: e.target.value})} />
              {errors && errors?.password && (<strong>
          {errors?.password?.message}
         </strong>)}
            {/* <ForgotPasword href="/forgot-password" >Forget password?</ForgotPasword> */}

            <SignUpLoginContainer>
                <StyledButton onClick={(e)=>{
                   e.preventDefault()
                  skema.chain.handleSubmit(logUserIn, true)
                }}>
                    <ButtonBackCard />
                    <ButtonFrontCard>Sign In</ButtonFrontCard>
                </StyledButton>
                {/* <StoreReturn>
                Return to store
                </StoreReturn> */}

            </SignUpLoginContainer>
            

        </Form>
        </Interactive>
        
    )
}

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
  console.log("GET LOGIN SCHEMA RUNS", actionAfters, actionBefores, setTransporter, doAfterAll)
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

export default AppForm