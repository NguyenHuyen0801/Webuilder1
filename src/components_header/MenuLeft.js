import React from "react";
// import { List } from "react-bootstrap-icons";
import "antd/dist/antd.css";
import { MenuOutlined } from "@ant-design/icons";

const IconMenu = ({ ios }) => {
  let cssIos = {
    color: "#3182fc",
    fontSize: "19px",
    margin: "25px"
  };

  let css = { ...cssIos, color: "#ffffff", backgroundColor:"#0a60ff", margin: "25px" };
  
  if (ios) {
    return <MenuOutlined style={cssIos}></MenuOutlined>
  } else {
    return <MenuOutlined style={css}></MenuOutlined>
  }
};

export default IconMenu;
