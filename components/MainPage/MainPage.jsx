import styled from "@emotion/styled";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Main>
        <TitleDiv>
          <h1>Rick & Morty</h1>
        </TitleDiv>

        <div>
          <CharacterCard>
            <img src="./demo.jpg" alt="demoimg" height={200} width={300} />
            <div>
              <h3>Rick & Morty</h3>
              <InfoDiv>
                <TitleTexts>Id:</TitleTexts>
                <DetailsTexts>361</DetailsTexts>
              </InfoDiv>
              <InfoDiv>
                <TitleTexts>Status:</TitleTexts>
                <DetailsTexts>Dead</DetailsTexts>
              </InfoDiv>
              <InfoDiv>
                <TitleTexts>Species:</TitleTexts>
                <DetailsTexts>Humanoid</DetailsTexts>
              </InfoDiv>
              <InfoDiv>
                <TitleTexts>Gender:</TitleTexts>
                <DetailsTexts>Male</DetailsTexts>
              </InfoDiv>
            </div>
          </CharacterCard>
        </div>
      </Main>
    </>
  );
};

export default MainPage;

const Main = styled("div")({});

const TitleDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#bcc5ce",
});
const CharacterCard = styled("div")({
  boxShadow: "1px 3px 5px grey",
  margin: "2vh",
  borderRadius: "1vh",
  width: "30%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2vh",
});
const InfoDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: '1vh'
});
const TitleTexts = styled("p")({
  padding: 0,
  margin: 0,
  fontWeight: "bold",
});
const DetailsTexts = styled("p")({
  padding: 0,
  margin: 0,
  marginLeft: '1vw'
});
