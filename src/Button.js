import React from "react";
import styled from "styled-components";

const ColorButtonIos = {
  primary: "#0a60ff",
  light: "#f1f1f1",
  info: "#529ff3",
  success: "#4dad4a",
  warning: "#eb9e3e",
  danger: "#d1494b",
  dark: "#000000",
  white: "#ffffff",
  gray: "#A6A6A6",
};

const ColorButtonAndroid = {
  primary: "#3f51b5",
  light: "#f4f4f4",
  info: "#62b1f6",
  success: "#5cb85c",
  warning: "#f0ad4e",
  danger: "#d9534f",
  dark: "#000000",
  white: "#ffffff",
  gray: "#A6A6A6",
};

//IOS
const ButtonIos = styled.button`
  display: flex;
  margin: 10px;
  padding: 12px 14px;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 2px #dddddd;
  border: none;
`;
const ButtonIosTransparent = styled(ButtonIos)`
  background-color: white;
  box-shadow: 0px 2px #fff;
`;
const OutlineButtonIos = styled.button`
  display: flex;
  margin: 10px;
  padding: 12px 14px;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  border-width: 1px;
  background-color: white;
  border-radius: 5px;
`;
const ButtonIosRounded = styled.button`
  display: flex;
  margin: 10px;
  padding: 12px 14px;
  border-radius: 25px;
  font-family: "Roboto", sans-serif;
  border: none;
  box-shadow: 0px 2px #fff;
`;
const BlockButtonIOS = styled(ButtonIos)`
  padding: 10px 118px;
  box-shadow: 0px 2px #fff;
`;
const FullButtonIos = styled(ButtonIos)`
  border-radius: 0px;
  padding: 10px 120px;
  box-shadow: 0px 2px #fff;
`;
const IconButtonIos = styled(ButtonIos)`
  display: flex;
  padding: 8px 12px;
  align-item: center;
  box-shadow: 0px 2px #fff;
`;

//Android
const ButtonAndroid = styled.button`
  display: flex;
  margin: 10px;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  padding: 12px 14px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 2px #dddddd;
`;

const ButtonAndroidTransparent = styled(ButtonAndroid)`
  background-color: white;
  box-shadow: 0px 2px #fff;
`;

const OutlineButtonAndroid = styled.button`
  display: flex;
  margin: 10px;
  border-width: 1px;
  font-family: "Roboto", sans-serif;
  padding: 12px 14px;
  border-radius: 2px;
  background-color: white;
  text-transform: uppercase;
`;
const ButtonAndroidRounded = styled.button`
  background-color: white;
  box-shadow: 0px 2px #fff;
  display: flex;
  margin: 10px;
  border: none;
  border-radius: 25px;
  text-transform: uppercase;
  padding: 12px 14px;
  font-family: "Roboto", sans-serif;
`;

const BlockButtonAndroid = styled(ButtonAndroid)`
  padding: 10px 110px;
  box-shadow: 0px 2px #fff;
`;
const FullButtonAndroid = styled(ButtonAndroid)`
  border-radius: 0px;
  padding: 10px 120px;
  box-shadow: 0px 2px #fff;
`;
const IconButtonAndroid = styled(ButtonAndroid)`
  display: flex;
  padding: 8px 12px;
  align-item: center;
  box-shadow: 0px 2px #fff;
`;


function Button({
  ios,
  color,
  bordered,
  children,
  transparent,
  rounded,
  block,
  full,
  iconLeft,
  iconRight,
  iconHome,
}) {
  //Button Full
  if (full) {
    if (ios) {
      return (
        <FullButtonIos style={{ backgroundColor: ColorButtonIos[color] }}>
          {children}
        </FullButtonIos>
      );
    } else
      return (
        <FullButtonAndroid
          style={{ backgroundColor: ColorButtonAndroid[color] }}
        >
          {children}
        </FullButtonAndroid>
      );
  }

  //Button Block
  if (block) {
    if (ios) {
      return (
        <BlockButtonIOS style={{ backgroundColor: ColorButtonIos[color] }}>
          {children}
        </BlockButtonIOS>
      );
    } else
      return (
        <BlockButtonAndroid
          style={{ backgroundColor: ColorButtonAndroid[color] }}>
          {children}
        </BlockButtonAndroid>
      );
  }

  //Button Rounded
  if (rounded) {
    if (ios) {
      return (
        <ButtonIosRounded style={{ backgroundColor: ColorButtonIos[color] }}>
          {children}
        </ButtonIosRounded>
      );
    } else
      return (
        <ButtonAndroidRounded
          style={{ backgroundColor: ColorButtonAndroid[color] }}>
          {children}
        </ButtonAndroidRounded>
      );
  }

  //Button Transparent
  if (transparent) {
    if (ios) {
      return <ButtonIosTransparent>{children}</ButtonIosTransparent>;
    } else
      return <ButtonAndroidTransparent>{children}</ButtonAndroidTransparent>;
  }

  //Button Outline
  if (bordered) {
    if (ios) {
      return (
        <OutlineButtonIos style={{ borderColor: ColorButtonIos[color] }}>
          {children}
        </OutlineButtonIos>
      );
    } else
      return (
        <OutlineButtonAndroid style={{ borderColor: ColorButtonAndroid[color] }}>
          {children}
        </OutlineButtonAndroid>
      );
  }

  //Button Icon Left
  if (iconLeft) {
    if (ios) {
      return (
        <IconButtonIos style={{ backgroundColor: ColorButtonIos[color] }}>
          {children}
        </IconButtonIos>
      );
    } else {
      return (
        <IconButtonAndroid style={{ backgroundColor: ColorButtonIos[color] }}>
          {children}
        </IconButtonAndroid>
      );
    }
  }

  //Button Icon Right
  if (iconRight) {
    if (ios) {
      return (
        <IconButtonIos style={{ backgroundColor: ColorButtonIos[color] }}>
          {children}
        </IconButtonIos>
      );
    } else {
      return (
        <IconButtonAndroid style={{ backgroundColor: ColorButtonIos[color] }}>
          {children}
        </IconButtonAndroid>
      );
    }
  }

  //Button Icon Home
  if (iconHome) {
    if (ios) {
      return (
        <IconButtonIos style={{ backgroundColor: ColorButtonIos[color] }}>
          {children}
        </IconButtonIos>
      );
    } else
      return (
        <IconButtonAndroid style={{ backgroundColor: ColorButtonIos[color] }}>
          {children}
        </IconButtonAndroid>
      );
  }

  //Button Theme
  if (ios) {
    return (
      <ButtonIos style={{ backgroundColor: ColorButtonIos[color] }}>
        {children}
      </ButtonIos>
    );
  } else {
    return (
      <ButtonAndroid style={{ backgroundColor: ColorButtonAndroid[color] }}>
        {children}
      </ButtonAndroid>
    );
  }
}
export default Button;
