import React from "react";
import { Badge } from "antd";
import "antd/dist/antd.css";
import "../styles/App.css";

const colorBadge = {
  primary: "#0a60ff",
  light: "#f1f1f1",
  info: "#529ff3",
  success: "#4dad4a",
  warning: "#eb9e3e",
  danger: "#d1494b",
  dark: "#000000",
  white: "#ffffff",
};

function Badger({ color, count }) {
  return (
    <Badge count={count} style={{ backgroundColor: colorBadge[color] }} className="badge">
      <a href="/" className="head-example centerB">
        {""}
      </a>
    </Badge>
  );
}

export default Badger;
