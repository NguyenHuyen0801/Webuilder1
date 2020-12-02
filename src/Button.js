import React from "react";

const Button = ({
  children,
  primary,
  info,
  light,
  success,
  warning,
  danger,
  dark
}) => {
  let css = {
    border: "none",
    color: "white",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    fontWeight: "500",
    padding: "13px 15px",
    boxShadow: "0px 2px #dddddd",
  };

  if (light) {
    css = {
      ...css,
      color: "#000000",
      backgroundColor: "#f1f1f1",
      fontSize: "14px",
      borderRadius: "5px",
    };
  }
  if (info) {
    css = {
      ...css,
      backgroundColor: "#529ff3",
      borderRadius: "5px",
    };
  }
  if (primary) {
    css = {
      ...css,
      backgroundColor: "#0a60ff",
      borderRadius: "5px",
    };
  }
  if (success) {
    css = {
      ...css,
      backgroundColor: "#4dad4a",
      borderRadius: "5px",
    };
  }
  if (warning) {
    css = {
      ...css,
      backgroundColor: "#eb9e3e",
      borderRadius: "5px",
    };
  }
  if (danger) {
    css = {
      ...css,
      backgroundColor: "#ce3c3e",
      borderRadius: "5px",
    };
  }
  if (dark) {
    css = {
      ...css,
      backgroundColor: "#000000",
      borderRadius: "5px",
    };
  }
return <button style={css}>{children}</button>;
};

export default Button;
