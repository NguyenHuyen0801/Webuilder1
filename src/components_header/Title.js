import React from "react";

const Title = ({ ios, children }) => {
  let css = {
    fontSize: "19px",
    fontFamily: "'Roboto', sans-serif",
    color: "white",
    backgroundColor: "#3f51b5",
    marginTop: "40px",
    marginBottom: "0px",
    marginLeft: "2px",
  };

  if (ios) {
    css = {
      fontSize: "19px",
      fontFamily: "'Roboto', sans-serif",
      color: "black",
      marginTop: "40px",
      marginBottom: "0px",
      marginLeft: "2px",
    };
  }
  return <p style={css}>{children}</p>;
};

export default Title;
