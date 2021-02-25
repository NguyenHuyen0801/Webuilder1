import React from "react";
// import { List } from "react-bootstrap-icons";
import "antd/dist/antd.css";
import { UnorderedListOutlined } from "@ant-design/icons";

const IconMenu = ({ ios }) => {
  let cssIos = {
    color: "#3182fc",
    fontSize: "19px",
    margin: "40px"
  };

  let css = { ...cssIos, color: "#ffffff", backgroundColor:"#0a60ff", margin: "40px" };
  if (ios) {
    return <UnorderedListOutlined style={cssIos}></UnorderedListOutlined>;
  } else {
    return <UnorderedListOutlined style={css}></UnorderedListOutlined>;
  }
};

export default IconMenu;
