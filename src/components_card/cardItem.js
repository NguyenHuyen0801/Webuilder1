import React from "react";
import styled from "styled-components";

const CardBase = styled.div`
  width: 290px;
  display: flex;
  padding: 10px;
`;
const CardButton = styled.button`
  padding: 10px;
  display: flex;
  background-color: #fff;
  border: none;
  width: 290px;
  text-align: left;
`;

const CardBorderedHeader = styled.div`
  display: flex;
  color: black;
  padding: 10px;
  border-bottom: 1px solid #dddddd;
`;

const CardBorderedFooter = styled.div`
  display: flex;
  border-top: 1px solid #dddddd;
  padding: 10px;
`;

const CardItem = ({
  ios,
  children,
  bordered,
  header,
  footer,
  button,
  body,
}) => {

  if (bordered && header) {
    return <CardBorderedHeader>{children}</CardBorderedHeader>;
  }
  if (bordered && footer) {
    return <CardBorderedFooter>{children}</CardBorderedFooter>;
  }
  if (button && header) {
    return (
      <CardButton onClick={() => alert("This is Card Header")}>
        {children}
      </CardButton>
    );
  }
  if (button && body) {
    return (
      <CardButton onClick={() => alert("This is Card Body")}>
        {children}
      </CardButton>
    );
  }
  if (button && footer) {
    return (
      <CardButton onClick={() => alert("This is Card Footer")}>
        {children}
      </CardButton>
    );
  } else return <CardBase>{children}</CardBase>
};
export default CardItem;
