import React from "react";
import {
  CameraOutlined,
  AppstoreOutlined,
  UserOutlined,
  CompassOutlined,
  CompassFilled,
  CameraFilled,
  AppstoreFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import styled from "styled-components";

const FooterBaseIOS = styled.div`
  flex: 1;
  width: 290px;
  height: 50px;
  background-color: #F6F6F6;
`;

const FooterBaseAndroid = styled.div`
  flex: 1;
  width: 290px;
  height: 50px;
  background-color: #3f51b5;
`;

const FooterIcons = ({ ios }) => {
  let cssIos = {
    flex: "1",
    margin: "17px 15px 15px 33px",
    fontSize: "19px",
  };

  let cssAndroid = {
    flex: "1",
    margin: "17px 15px 15px 33px",
    fontSize: "19px",
    color: "white",
  };

  if (ios)
    return (
      <FooterBaseIOS>
        <AppstoreOutlined style={cssIos} />
        <CameraOutlined style={cssIos} />
        <CompassOutlined style={cssIos} />
        <UserOutlined style={cssIos} />
      </FooterBaseIOS>
    );
  else
    return (
      <FooterBaseAndroid>
        <AppstoreFilled style={cssAndroid} />
        <CameraFilled style={cssAndroid} />
        <CompassFilled style={cssAndroid} />
        <UserOutlined style={cssAndroid} />
      </FooterBaseAndroid>
    );
};

export default FooterIcons;
