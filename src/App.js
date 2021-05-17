import React, { useState } from "react";
import Spinner from "./components/spinner";
import Badger from "./components/badge";
import Radio from "./components/radiobutton";
import Text from "./components_header/Text";
import Button from "./Button";
import Icon from "./components_header/Icon";
import Title from "./components_header/Title";
import Subtitle from "./components_header/SubTitle";
import MenuLeft from "./components_header/MenuLeft";

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

      {/* TEXT */}
      {/* <Text ios={!isAndroid} color="primary">
        Header
      </Text> */}

      {/* ICON HEADER */}
      <MenuLeft ios={!isAndroid}></MenuLeft>
      <Icon ios={!isAndroid} arrowRight></Icon>
      <Icon ios={!isAndroid} arrowLeft></Icon>
      <Title ios={!isAndroid}>Title</Title>
      <Subtitle ios= {!isAndroid}>Subtitle</Subtitle>
      

      {/* CARD */}
      {/* <Card bordered >
        <CardItem bordered header>
          <Text ios={!isAndroid} color="primary" size="15px" weight="650">
            Social Applications
          </Text>
        </CardItem>

        <CardItem >
          <Icon googlePlus  />
          <Text color="dark" size="15px" weight="500">
           Google Plus
          </Text>
          <Icon ios={!isAndroid} arrowRightListGoogle  />
        </CardItem>

        <CardItem >
          <Icon facebook />
          <Text color="dark" size="15px" weight="500" >
           facebook
          </Text>
          <Icon ios={!isAndroid} arrowRightListFb />
        </CardItem>

        <CardItem >
          <Icon twitter />
          <Text color="dark" size="15px" weight="500" >
           Twitter
          </Text>
          <Icon ios={!isAndroid} arrowRightListTwitter />
        </CardItem>
        
        <CardItem >
          <Icon reddit />
          <Text color="dark" size="15px" weight="500" >
           Reddit
          </Text>
          <Icon ios={!isAndroid} arrowRightListReddit />
        </CardItem>

        <CardItem >
          <Icon linkedIn />
          <Text color="dark" size="15px" weight="500" >
           LinkedIn
          </Text>
          <Icon ios={!isAndroid} arrowRightListLinkIn />
        </CardItem>

        <CardItem >
          <Icon youTube />
          <Text color="dark" size="15px" weight="500" >
           YouTube
          </Text>
          <Icon ios={!isAndroid} arrowRightListYouTube />
        </CardItem> */}

        {/* <CardItem button footer>
          <Text color="primary" size="15px" weight="650">
            Footer
          </Text>
        </CardItem> */}
      {/* </Card> */}

      {/* BUTTON */}
      {/* <Button ios={!isAndroid} color="dark"> 
      <Text ios={!isAndroid} weight="500" size="14px" color="white">
        Dark
      </Text>
      </Button>

      <Button ios={!isAndroid} bordered color="dark"> 
      <Text ios={!isAndroid} weight="500" size="14px" color="dark">
      Dark
      </Text>
      </Button>

      <Button ios={!isAndroid} transparent > 
      <Text ios={!isAndroid} weight="500" size="14px" color="dark">
      Dark
      </Text>
      </Button>

      <Button ios={!isAndroid} rounded color="dark" > 
      <Text ios={!isAndroid} weight="500" size="14px" color="white">
      Dark
      </Text>
      </Button>

      <Button ios={!isAndroid} full color="dark">
        <Text color="white" size="14px" weight="500">
        Dark
        </Text>
      </Button>

      <Button ios={!isAndroid} block color="dark">
        <Text color="white" size="14px" weight="500">
        Dark
        </Text>
      </Button>
      <Button ios={!isAndroid} bordered color="gray"> 
      <Text ios={!isAndroid} weight="500" size="14px" color="gray">
      Dark
      </Text>
      </Button> */}

      {/* <Button ios={!isAndroid} full color="gray">
        <Text color="white" size="14px" weight="500">
        Dark
        </Text>
      </Button>
      <Button ios={!isAndroid} color="gray"> 
      <Text ios={!isAndroid} weight="500" size="14px" color="white">
        Primary
      </Text>
      </Button>

      <Button ios={!isAndroid} iconLeft color="light">
        <Icon ios={!isAndroid} arrowLeft />
        <Text ios={!isAndroid} weight="550" size="15px" color="black">
          Back
        </Text>
      </Button>

      <Button ios={!isAndroid} iconRight color="light">
        <Text ios={!isAndroid} weight="550" size="15px" color="black">
          Next
        </Text>
        <Icon ios={!isAndroid} arrowRight />
      </Button> */}

      {/* SPINNER */}
      <Spinner ios={!isAndroid} color="blue" />

      {/* BADGE */}
      <Badger color="primary" count={5} />

      {/* REAIO */}
      <Radio ios={!isAndroid} data={data} color="green" />
    </div>
  );
}

export default App;
