import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import Text from "../components_header/Text";

const CardBase = styled.div`
  padding: 10px;
  color: black;
`;

const CardBorderedHeader = styled.div`
  color: black;
  padding: 10px;
  border-top: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
`;
const CardBorderedFooter = styled.div`
  padding: 10px;
  border-top: none;
  border-bottom: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;

`;
const CardItem = ({ ios, children, bordered, header, footer, button }) => {
  if (bordered && header) {
    return <CardBorderedHeader>{children}</CardBorderedHeader>;
  }
  if (bordered && footer) {
    return <CardBorderedFooter>{children}</CardBorderedFooter>;
  } else return <CardBase>{children}</CardBase>;
};
export default CardItem;
