
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
  gray: "#A6A6A6"
};

const ColorButtonAndroid = {
  primary: "#0a60ff",
  light: "#f4f4f4",
  info: "#62b1f6",
  success: "#5cb85c",
  warning: "#f0ad4e",
  danger: "#d9534f",
  dark: "#000000",
  white: "#ffffff",
  gray: "#A6A6A6"
};

const TextBase = styled.div`
  font-size: "Roboto", sans-serif;
  font-weight: ${(props) => props.weight || "550"};
  font-size: ${(props) => props.size || "19px"};
  color: ${(props) => props.color || "black"};
`;

function Text({ ios, children, color, weight, size }) {
  if (ios) {
    return (
      <TextBase
        style={{ color: ColorButtonIos[color]}}
        weight={weight}
        size={size}
      >
        <div>{children}</div>
      </TextBase>
    );
  } else
    return (
      <TextBase
        style={{ color: ColorButtonAndroid[color] }}
        weight={weight}
        size={size}
      >
        <div>{children}</div>
      </TextBase>
    );
}
export default Text;
