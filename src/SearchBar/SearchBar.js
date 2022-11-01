import React, { Component } from 'react';
import { SearchComponent } from './SearchComponent';
import Button from "../Component/Button.Style";
import styled from "styled-components";
import { BiSearch } from 'react-icons/bi';
import { BiSliderAlt } from 'react-icons/bi';
import { BiLocationPlus } from 'react-icons/bi';
import { BiExport } from 'react-icons/bi';



const SearchArea = styled.div `
display:flex;
justify-content: space-between;
align-items:center;
position :relative;
background:#EDEDED;
border-radius:25px;
margin: 30px 0;
`;

const SearchInput = styled.div `
display:flex;
align-items:center;

 .SearchIcon {
position:absolute;
left:20px;
 }

 .FilterIcon {
  position:absolute;
  left:480px;
   }
` ;

  




export default class SearchBar extends Component {
  render() {
    return (
      <SearchArea>
        <SearchInput>  <BiSearch className ="SearchIcon"/> <SearchComponent placeholder={"Search anything..."}/>     <BiSliderAlt className ="FilterIcon" />    </SearchInput> 

        <div> 
        <Button
          name={"primary"}
          backgroundColor={"transparent"}
          borderColor={"#E9E9EAed"}
          bwsize= {"120px"}
          bhsize={"35px"}>
          <BiExport/>
          Data Range
        </Button>

        <Button
          name={"primary"}
          backgroundColor={"transparent"}
          borderColor={"#E9E9EAed"}
          bwsize= {"120px"}
          bhsize={"35px"}
        >
         <BiLocationPlus/>
         Address
        </Button>

        <Button
          name={"primary"}
          backgroundColor={"transparent"}
          borderColor={"#E9E9EAed"}
          bwsize= {"120px"}
          bhsize={"35px"}
        >
         <BiLocationPlus/>
         Saved Filter 
        </Button>

        <Button
          name={"primary"}
          backgroundColor={"transparent"}
          borderColor={"#E9E9EAed"}
          bwsize= {"120px"}
          bhsize={"35px"}
        >
         <BiLocationPlus/>
      More Filter
        </Button>


        </div>
        
      </SearchArea>
    )
  }
}
