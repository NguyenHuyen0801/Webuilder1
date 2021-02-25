import React, { useState } from "react";
import Spinner from "./components/spinner";
import Badger from "./components/badge";
import Radio from "./components/radiobutton";

import Text from "./components_header/Text";

import Button from "./components_header/Button";

import IconLeft from "./components_header/LeftIcon";

import MenuLeft from "./components_header/MenuLeft";

// import Header from "./components_header/Header";

import SubTitle from "./components_header/SubTitle";
import Title from "./components_header/Title";

import Card from "./components_card/card";
import CardItem from "./components_card/cardItem";

import "./styles/App.css";

function App() {
  const [isAndroid, setIsAndroid] = useState(true);

  const data = [
    { title: "Text1", value: 1 },
    { title: "Text2", value: 2 },
  ];

  return (
    <div className="App">
      <button
        className={!isAndroid ? "btnI" : "btnA"}
        onClick={() => setIsAndroid(false)}
      >
        IOS
      </button>
      <button
        className={isAndroid ? "btnI" : "btnA"}
        onClick={() => setIsAndroid(true)}
      >
        ANDROID
      </button>

      {/* <Header ios={!isAndroid}>Header</Header> */}

      <Title ios={!isAndroid}>Title</Title>
      <SubTitle ios={!isAndroid}>SubTitle</SubTitle>

      <Text ios={!isAndroid} color="waring" size="30px" weight="550">
        Content
      </Text>

      <MenuLeft ios={!isAndroid}></MenuLeft> 


      <IconLeft ios={!isAndroid}></IconLeft> 

      {/* <Card>
        <CardItem ios={!isAndroid} bordered sheader>
          <Text>Header</Text>
        </CardItem>
        <CardItem ios={!isAndroid}>
          <Text>Body</Text>
        </CardItem>
        <CardItem ios={!isAndroid} bordered footer>
          <Text>Footer</Text>
        </CardItem>
      </Card> */}

      <Button ios={!isAndroid} color="success">
        <Text color="white" size="14px" weight="500">
          Primary
        </Text>
      </Button>

      <Button ios={!isAndroid} bordered color="primary">
        <Text color="primary" size="14px" weight="500">
          Dark
        </Text>
      </Button>

      <Button ios={!isAndroid} transparent>
        <Text color="primary" size="14px" weight="500">
        Dark
        </Text>
      </Button>

      <Button ios={!isAndroid} rounded color="primary">
        <Text color="white" size="14px" weight="500">
        Dark
        </Text>
      </Button>

      <Spinner ios={!isAndroid} color="blue" />
      <Badger color="primary" count={5} />
      <Radio ios={!isAndroid} data={data} color="green" />
    </div>
  );
}

export default App;
