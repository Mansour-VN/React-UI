import React, { Component } from "react";
import styled from "styled-components";
import Button from "../Component/Button.Style";
import { BiExport } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { BiPrinter } from "react-icons/bi";

 
const MyNav = styled.div`
display:flex;
justify-content: space-between;
`;

const Title = styled.div`
font-size:32px;  
font-weight:800;
padding-left:15px;
background: #fff;
`;
 const SpanB = styled.span`
 color: blue ;
 `
 const Span = styled.span`
 color: gray ;
 letter-spacing=2px;
 &:hover{
  cursor:pointer;
 }
 `
const MainDiv= styled.div`
display:flex;
flex-direction:column;
gap: 10px;
`
const ListDiv = styled.div`
display:flex;
justify-content: flex-start;
align-items:center;
gap:15px;
i{
color:gray;
}
`
export default class Headnav extends Component {
  render() {
  
    return (
      <MainDiv>
        <ListDiv>
        <i class="fa-solid fa-house"></i>
         <Span>Home page</Span>
         <Span>/</Span>
         <Span>...</Span>
         <Span>/</Span>
         <Span>Dashboard</Span>
         <Span>/</Span>
         <Span>Products</Span>
         <Span>/</Span>
         <SpanB>Orders</SpanB>
        </ListDiv>

        <MyNav>
          <Title>Orders</Title>
          <div>

          <Button
            name={"primary"}
            backgroundColor={"transparent"}
            borderColor={"#E9E9EAed"}
            bwsize={"90px"}
            bhsize={"35px"}
          >
            <BiExport />
            Export
          </Button>
          <Button
            name={"primary"}
            backgroundColor={"transparent"}
            borderColor={"#E9E9EAed"}
            bwsize={"90px"}
            bhsize={"35px"}
          >
            <BiPrinter />
            Print
          </Button>
          <Button
            className={" btn btn-primary"}
            name={"primary"}
            borderColor={""}
            bwsize={"120px"}
            bhsize={"35px"}
          >
            <BiPlus />
            Create
          </Button>
          </div>
        </MyNav>
      </MainDiv>
    );
  }
}
