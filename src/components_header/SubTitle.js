import React from "react";

const Subtitle = ({ ios, children }) => {
  let css = {
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    color: "white",
    backgroundColor: "#3f51b5",
    marginLeft: "2px",
  };

  if (ios) {
    css = {
      fontSize: "14px",
      fontFamily: "'Roboto', sans-serif",
      color: "black",
      marginLeft: "2px",
    };
  }
  return <p style={css}>{children}</p>;
};

export default Subtitle;
