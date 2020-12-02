import React from "react";

const Header = ({ android, children }) => {
  let css = {
    fontSize: "19px",
    fontWeight: "500",
    fontFamily: "'Roboto', sans-serif",
    color: "black",
  };
  if (android) {
    css = {
      fontSize: "19px",
      fontWeight: "500",
      fontFamily: "'Roboto', sans-serif",
      color: "white",
      // backgroundColor: "#3f51b5"
    };
  }
  return <p style={css}>{children}</p>;
};

export default Header;
