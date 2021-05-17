import React from "react";
import styled from "styled-components";

const CardBase = styled.div`
  
  width: 290px;
  -moz-box-shadow: 0 0 0 2px #dddddd;
  -webkit-box-shadow: 0 0 0 2px #dddddd;
  box-shadow: 0 0 2px #dddddd;
`;
const CardBorder = styled.div`
  width: 290px;
  -moz-box-shadow: 0 0 0 2px #dddddd;
  -webkit-box-shadow: 0 0 0 2px #dddddd;
  box-shadow: 0 0 2px #dddddd;
  border: 1px solid #dddddd;
`;

const CardTransparent = styled.div`
  width: 290px;
  -moz-box-shadow: 0 0 0 2px #fff;
  -webkit-box-shadow: 0 0 0 2px #fff;
  box0shadow: 0 0 2px #fff;
`;

function Card({ children, bordered, transparent }) {
  if(bordered){
  return <CardBorder>{children}</CardBorder>;
  }else if(transparent){
    return <CardTransparent>{children}</CardTransparent>
  }else return <CardBase>{children}</CardBase>
};

export default Card;
