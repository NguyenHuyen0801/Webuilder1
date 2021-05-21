import React from "react";
import styled from "styled-components";
const RightBase = styled.button`
    width: 150px;
    border: none;
    display: flex;
    padding-left: 130px;
    background-color: white;
`
const Right = ({ children}) => {
    return (
       <RightBase>{children}</RightBase> 
    )
};
export default Right;
