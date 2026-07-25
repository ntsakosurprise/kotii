import React from "react";
import styled from "kotii-styled";
import { Interactive } from "kotii";

const StyledButton = styled("button")({
  border: "none",
  width: "150px",
  backgroundColor: "inherit",
  marginTop: "30px",
  cursor: "pointer",
  position: "relative",
});

const ButtonFrontCard = styled("button")({
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
});
const ButtonBackCard = styled("small")({
  backgroundColor: "#F7C02B",
  width: "100%",
  height: "50px",
  display: "flex",
  position: "absolute",
});
const ContactUs = () => {
  console.log("THE ABOUT PAGE");
  return <>
   <Interactive>
              <ButtonFrontCard onClick={(e)=>{
                e.preventDefault()
                console.log("IM THE BUTTON THAT HAS BEE CLICKED")
  
              }}>My Button 
              </ButtonFrontCard> 
            </Interactive>
            <Interactive>
                    <button onClick={()=>{
                      console.log("MY NAME IS MY NAME")
                    }}>CONTACT US BUTTON</button>
                  </Interactive>
            <p>I AM THE CONTACT US PAGE</p>;
  </>
};

export default ContactUs;
