import React from "react";

const Text = ({ android, children }) => {
  let css = {
    fontSize: "18px",
    fontFamily: "'Roboto', sans-serif",
    color: "#0a60ff",
  };

  if (android) {
    css = { ...css, color: "#ffffff", textTransform: "uppercase" };
  }
  return <p style={css}>{children}</p>;
};

export default Text;
