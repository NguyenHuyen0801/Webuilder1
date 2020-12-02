import React from "react";
// import ReactDom from "react-dom";

import Button from "./Button";
import Header from "./components-header/Header";
import Title from "./components-header/Title";
import Subtitle from "./components-header/Subtitle";
import Text from "./components-header/Text";
import IconLeft from "./components-header/IconLeft";
import IconMenu from "./components-header/IconMenu";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header>Header</Header>
      <Header android>Header</Header>

      {/* Title */}
      <Title>Title</Title>
      <Title android>Title</Title>

      {/* Subtitle */}
      <Subtitle>Subtitle</Subtitle>
      <Subtitle android>Subtitle</Subtitle>


      <Text>Back</Text>
      <Text>Cancel</Text>
      <Text android>Cancel</Text> 

      <IconLeft ></IconLeft>
      <IconLeft ios></IconLeft>

      <IconMenu android></IconMenu>

      <Button light>Light</Button>
      <Button lightAndroid>light</Button>

      <Button info>Info</Button>

      <Button primary>Primary</Button>
      <Button primaryAndroid>Primary</Button>
      {/* <Button success>Success</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
      <Button dark>Dark</Button> */}
    </div>
  );
}
