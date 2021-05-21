import React from "react";
import {
  ArrowLeftOutlined,
  LeftOutlined,
  MenuOutlined,
  MoreOutlined,
  SearchOutlined,
  HeartFilled,
  HeartTwoTone,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import styled from "styled-components";
import Text from "./Text";

const Header = ({
  ios,
  title,
  titleAndSub,
  iconButton,
  textButton,
  icon,
  iconText,
  multiIcon,
}) => {
  const HeaderBase = styled.div`
    width: 290px;
    height: 50px;
    display: flex;
  `;
  //LEFT
  const LeftIos = styled.button`
    width: 70px;
    padding-left: 20px;
    padding-top: 15px;
    display: flex;
    border: none;
    border-bottom: 1px solid #aaa;
  `;
  const LeftAndroid = styled(LeftIos)`
    background-color: #3f51b5;
  `;

  //BODY
  const BodyIos = styled.button`
    text-align: center;
    width: 150px;
    display: block;
    border: none;
    border-bottom: 1px solid #aaa;
  `;
  const BodyAndroid = styled(BodyIos)`
    padding-right: 140px;
    background-color: #3f51b5;
  `;

  //RIGHT
  const RightIos = styled.button`
    width: 70px;
    padding-left: 5px;
    border: none;
    border-bottom: 1px solid #aaa;
  `;
  const RightAndroid = styled(RightIos)`
    background-color: #3f51b5;
  `;

  let cssIos = {
    fontSize: "18px",
    color: "#1668FE",
  };
  let cssAndroid = {
    ...cssIos,
    color: "white",
  };
  let cssMultiIconIos = {
    ...cssIos,
    fontSize: "15px",
    margin: "2px",
  };

  let cssMultiIconAndroid = {
    ...cssAndroid,
    fontSize: "15px",
    margin: "2px",
  };
  if (title) {
    if (ios) {
      return (
        <HeaderBase>
          <LeftIos />
          <BodyIos>
            <Text size="16px" weight="500">
              Header
            </Text>
          </BodyIos>
          <RightIos />
        </HeaderBase>
      );
    } else
      return (
        <HeaderBase>
          <LeftAndroid />
          <BodyAndroid>
            <Text size="16px" color="white" weight="500">
              Header
            </Text>
          </BodyAndroid>
          <RightAndroid></RightAndroid>
        </HeaderBase>
      );
  }

  if (titleAndSub) {
    if (ios) {
      return (
        <HeaderBase>
          <LeftIos>
            <LeftOutlined style={cssIos} />
          </LeftIos>
          <BodyIos>
            <Text size="16px" color="black" weight="500">
              Title
            </Text>
            <Text size="10px" color="black" weight="450">
              SubTitle
            </Text>
          </BodyIos>
          <RightIos />
        </HeaderBase>
      );
    } else
      return (
        <HeaderBase>
          <LeftAndroid>
            <ArrowLeftOutlined style={cssAndroid} />
          </LeftAndroid>
          <BodyAndroid>
            <Text size="16px" color="white" weight="500">
              Title
            </Text>
            <Text size="10px" color="white" weight="450">
              SubTitle
            </Text>
          </BodyAndroid>
          <RightAndroid />
        </HeaderBase>
      );
  }
  if (iconButton) {
    if (ios) {
      return (
        <HeaderBase>
          <LeftIos>
            <LeftOutlined style={cssIos} />
          </LeftIos>
          <BodyIos>
            <Text size="16px" color="black" weight="500">
              Header
            </Text>
          </BodyIos>
          <RightIos>
            <MenuOutlined style={cssIos} />
          </RightIos>
        </HeaderBase>
      );
    } else
      return (
        <HeaderBase>
          <LeftAndroid>
            <ArrowLeftOutlined style={cssAndroid} />
          </LeftAndroid>
          <BodyAndroid>
            <Text size="16px" color="white" weight="500">
              Header
            </Text>
          </BodyAndroid>
          <RightAndroid>
            <MenuOutlined style={cssAndroid} />
          </RightAndroid>
        </HeaderBase>
      );
  }
  if (textButton) {
    if (ios) {
      return (
        <HeaderBase>
          <LeftIos>
            <Text size="12px" color="primary" weight="400">
              Back
            </Text>
          </LeftIos>
          <BodyIos>
            <Text size="16px" color="black" weight="500">
              Header
            </Text>
          </BodyIos>
          <RightIos>
            <Text size="12px" color="primary" weight="400">
              Cancel
            </Text>
          </RightIos>
        </HeaderBase>
      );
    } else
      return (
        <HeaderBase>
          <LeftAndroid></LeftAndroid>
          <BodyAndroid>
            <Text size="16px" color="white" weight="500">
              Header
            </Text>
          </BodyAndroid>
          <RightAndroid>
            <Text size="10px" color="white" weight="400">
              CANCEL
            </Text>
          </RightAndroid>
        </HeaderBase>
      );
  }
  if (icon) {
    if (ios) {
      return (
        <HeaderBase>
          <LeftIos>
            <LeftOutlined style={cssIos} />
          </LeftIos>
          <BodyIos>
            <Text size="16px" color="black" weight="500">
              Header
            </Text>
          </BodyIos>
          <RightIos>
            <Text size="12px" color="primary" weight="400">
              Cancel
            </Text>
          </RightIos>
        </HeaderBase>
      );
    } else
      return (
        <HeaderBase>
          <LeftAndroid>
            <ArrowLeftOutlined style={cssAndroid} />
          </LeftAndroid>
          <BodyAndroid>
            <Text size="16px" color="white" weight="500">
              Header
            </Text>
          </BodyAndroid>
          <RightAndroid>
            <Text size="10px" color="white" weight="400">
              CANCEL
            </Text>
          </RightAndroid>
        </HeaderBase>
      );
  }
  if (iconText) {
    if (ios) {
      return (
        <HeaderBase>
          <LeftIos>
            <LeftOutlined style={cssIos} />
            <Text size="12px" color="primary" weight="400">
              Back
            </Text>
          </LeftIos>
          <BodyIos>
            <Text size="16px" color="black" weight="500">
              Header
            </Text>
          </BodyIos>
          <RightIos>
            <Text size="12px" color="primary" weight="400">
              Cancel
            </Text>
          </RightIos>
        </HeaderBase>
      );
    } else
      return (
        <HeaderBase>
          <LeftAndroid>
            <ArrowLeftOutlined style={cssAndroid} />
          </LeftAndroid>
          <BodyAndroid>
            <Text size="16px" color="white" weight="500">
              Header
            </Text>
          </BodyAndroid>
          <RightAndroid>
            <Text size="10px" color="white" weight="400">
              CANCEL
            </Text>
          </RightAndroid>
        </HeaderBase>
      );
  }
  if (multiIcon) {
    if (ios) {
      return (
        <HeaderBase>
          <LeftIos>
            <LeftOutlined style={cssIos} />
          </LeftIos>
          <BodyIos>
            <Text size="16px" color="black" weight="500">
              Header
            </Text>
          </BodyIos>
          <RightIos>
            <SearchOutlined style={cssMultiIconIos} />
            <HeartTwoTone style={cssMultiIconIos} />
            <MoreOutlined style={cssMultiIconIos} />
          </RightIos>
        </HeaderBase>
      );
    } else
      return (
        <HeaderBase>
          <LeftAndroid>
            <ArrowLeftOutlined style={cssAndroid} />
          </LeftAndroid>
          <BodyAndroid>
            <Text size="16px" color="white" weight="500">
              Header
            </Text>
          </BodyAndroid>
          <RightAndroid>
            <SearchOutlined style={cssMultiIconAndroid} />
            <HeartFilled style={cssMultiIconAndroid} />
            <MoreOutlined style={cssMultiIconAndroid} />
          </RightAndroid>
        </HeaderBase>
      );
  }
};

export default Header;
