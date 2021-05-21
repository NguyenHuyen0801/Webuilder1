import React from "react";
import styled from "styled-components";

const Left = ({ children}) => {
    const LeftBase = styled.button`
    width: 140px;
    border: none;
    display: flex;
    padding-left: 1px;
    background-color: white;
`
    return (
       <LeftBase>{children}</LeftBase> 
    )
};
export default Left;