import React, { useState } from "react";
import Spinner from "./components/spinner";
import Badger from "./components/badge";
import Radio from "./components/radiobutton";

import Header from "./components_header/Header";
import Text from "./components_header/Text";
import Button from "./Button";
import Icon from "./components_header/Icon";

import Card from "./components_card/card";
import CardItem from "./components_card/cardItem";
import Left from "./components_card/Left";
import Right from "./components_card/Right";

import FooterIcons from "./footers/FooterIcons";
import FooterIconsText from "./footers/FooterIconsAndText";

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

      {/* HEADER */}
      {/* <Header title ios={!isAndroid} />
      <Header titleAndSub ios={!isAndroid} /> */}
      <Header iconButton ios={!isAndroid} />
      {/* <Header textButton ios={!isAndroid} />
      <Header icon ios={!isAndroid} />
      <Header iconText ios={!isAndroid} />
      <Header multiIcon ios={!isAndroid} />  */}

      {/* CARD */}
      <Card bordered>
        <CardItem bordered header>
          <Text ios={!isAndroid} color="primary" size="15px" weight="650">
            Social Applications
          </Text>
        </CardItem>

        <CardItem>
          <Left>
            <Icon googlePlus />
            <Text color="dark" size="15px" weight="500">
              Google Plus
            </Text>
          </Left>
          <Right>
            <Icon ios={!isAndroid} />
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Icon facebook />
            <Text color="dark" size="15px" weight="500">
              facebook
            </Text>
          </Left>
          <Right>
            <Icon ios={!isAndroid} />
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Icon twitter />
            <Text color="dark" size="15px" weight="500">
              Twitter
            </Text>
          </Left>
          <Right>
            <Icon ios={!isAndroid} />
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Icon reddit />
            <Text color="dark" size="15px" weight="500">
              Reddit
            </Text>
          </Left>
          <Right>
            <Icon ios={!isAndroid} />
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Icon linkedIn />
            <Text color="dark" size="15px" weight="500">
              LinkedIn
            </Text>
          </Left>
          <Right>
            <Icon ios={!isAndroid} />
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Icon youTube />
            <Text color="dark" size="15px" weight="500">
              YouTube
            </Text>
          </Left>
          <Right>
            <Icon ios={!isAndroid} />
          </Right>
        </CardItem>

        {/* <CardItem button footer>
          <Text color="primary" size="15px" weight="650">
            Footer
          </Text>
        </CardItem> */}
      </Card>

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
      </Button>

      <Button ios={!isAndroid} full color="gray">
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
      </Button> */}

      {/* <Button ios={!isAndroid} iconRight color="light">
        <Text ios={!isAndroid} weight="550" size="15px" color="black">
          Next
        </Text>
        <Icon ios={!isAndroid} arrowRight />
      </Button> */}

      {/* SPINNER */}
      <Spinner ios={!isAndroid} color="red" />

      {/* BADGE */}
      {/* <Badger color="primary" count={5} /> */}

      {/* REAIO */}
      {/* <Radio ios={!isAndroid} data={data} color="green" /> */}

      {/* FOOTER */}
      {/* <FooterIcons ios={!isAndroid} /> */}
      <FooterIconsText ios={!isAndroid} />
    </div>
  );
}

export default App;
