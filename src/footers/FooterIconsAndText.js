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
import Text from "../components_header/Text";

const FooterBaseIOS = styled.div`
  display: flex;
`;
const ButtonIos = styled.button`
    width: 72.5px;
    height: 50px;
    padding-left: 10px;
    padding-top: 5px;
    border: none;
    border-top: 1px solid #aaa;
    background-color: #F6F6F6;
`;

const FooterBaseAndroid = styled.div`
  display: flex;
`;
const ButtonAndroid = styled.button`
  width: 72.5px;
  height: 50px;
  padding-left: 10px;
  padding-top: 5px;
  border: none;
  background-color: #3f51b5;
`;

const FooterIconsText = ({ ios }) => {
  let cssIos = {
    fontSize: "19px",
    marginBottom: "0px",
  };

  let cssAndroid = {
    fontSize: "19px",
    color: "white",
  };

  if (ios)
    return (
      <FooterBaseIOS>
        <ButtonIos>
          <AppstoreOutlined style={cssIos} />
          <Text size="12px" weight="400">
            Apps
          </Text>
        </ButtonIos>

        <ButtonIos>
          <CameraOutlined style={cssIos} />
          <Text size="12px" weight="400">
            Camera
          </Text>
        </ButtonIos>
        <ButtonIos>
          <CompassOutlined style={cssIos} />
          <Text size="12px" weight="400">
            Compass
          </Text>
        </ButtonIos>
        <ButtonIos>
          <UserOutlined style={cssIos} />
          <Text size="12px" weight="400">
            Contact
          </Text>
        </ButtonIos>
      </FooterBaseIOS>
    );
  else
    return (
      <FooterBaseAndroid>
        <ButtonAndroid>
          <AppstoreFilled style={cssAndroid} />
          <Text size="12px" weight="400" color="white">
            Apps
          </Text>
        </ButtonAndroid>
        <ButtonAndroid>
          <CameraFilled style={cssAndroid} />
          <Text size="12px" weight="400" color="white">
            Camera
          </Text>
        </ButtonAndroid>
        <ButtonAndroid>
          <CompassFilled style={cssAndroid} />
          <Text size="12px" weight="400" color="white">
            Compass
          </Text>
        </ButtonAndroid>
        <ButtonAndroid>
          <UserOutlined style={cssAndroid} />
          <Text size="12px" weight="400" color="white">
            Contact
          </Text>
        </ButtonAndroid>
      </FooterBaseAndroid>
    );
};

export default FooterIconsText;
