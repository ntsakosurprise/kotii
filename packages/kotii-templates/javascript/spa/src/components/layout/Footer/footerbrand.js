import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import styled from "styled-components";
import { Brand } from "../shared/";

const AuthorText = styled("a")({
  display: "flex",
  flexDirection: "column",
  gap: 5,
  textDecoration: "none",
});

const MakerByText = styled("p")({
  display: "flex",
  fontSize: "25px",
  marginLeft: "10px",
  color: "white",
  gap: 5,
  flexDirection: "row",
});
const MakerAuthText = styled("small")({
  display: "block",
  fontSize: "30px",
  color: "white",
});

const FooterWrapper = styled("div")({
  width: "100%",
  display: "flex",
  backgroundColor: "#00B29A",
  flexDirection: "row",
  justifyItems: "center",
  alignItems: "center",
  minHeight: "80px",
  //   paddingLeft: "2%",
  paddingTop: "25px",
});

const FooterBrandWrapper = styled("div")({
  width: "53%",
  display: "flex",
  justifyContent: "space-between",
  gap: 50,
  marginLeft: "2%",
});

const Link = styled("a")({
  textDecoration: "none",
  display: "flex",
  backgroundColor: "inherit",
});

const Text = styled("small")({
  color: "white",
  display: "flex",
});
const FooterBrand = () => {
  return (
    <FooterWrapper>
      <FooterBrandWrapper>
        <AuthorText>
          <MakerByText>
            <Text>Made By</Text>
            <Link href="https://twitter.com/ntsakosurprise" target={"_blank"}>
              <AiFillTwitterCircle />
            </Link>
            <Link href="https://github.com/ntsakosurprise" target={"_blank"}>
              <AiFillGithub />
            </Link>
          </MakerByText>
          <MakerAuthText>
            <small style={{ color: "black", fontWeight: "bolder" }}>@</small>
            NtsakoSurprise
          </MakerAuthText>
        </AuthorText>
        <Brand
          logo={"kotiiAlt"}
          logoSize={80}
          brandLogoSize={80}
          brandLogoTextStyles={{ fontSize: "35px", marginTop: "15px" }}
        />
      </FooterBrandWrapper>
    </FooterWrapper>
  );
};

export default FooterBrand;
