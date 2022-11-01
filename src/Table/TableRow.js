import React, { Component } from "react";
import styled from "styled-components";
import CheckBox from "../Component/Checkbox";
import Button from "../Component/Button.Style";

const Tr = styled.tr`
height:40px
transition: all 0.3s;
&:hover{
    background:#EDEDED;
    border-radius:10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
&:last-child{
    border-top-right-radius:30px;
    
}
`
const TdF = styled.th`
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
`
const TdL = styled.th`
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
`

export default class TableRow extends Component {
  render() {
    return (
      <>
        <Tr>
          <TdF>
            <CheckBox />
          </TdF>
          <td>998-587</td>
          <td>Brand New Bike, Local buyer only</td>
          <td>Oludayo Ayomide</td>
          <td>
            <Button
              name={"primary"}
              backgroundColor={"#FCCACA"}
              color={"red"}
              fontSize={"12px"}
              borderColor={"#E9E9EAed"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Rejected
            </Button>
          </td>
          <td>
            <Button
              name={"primary"}
              backgroundColor={"#fff"}
              color={"#0275d8"}
              fontSize={"12px"}
              borderColor={"#fff"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Recieved
            </Button>
          </td>
          <td>Mar 13,2021 08:05 AM</td>
          <td>Jan 1, 2021</td>
          <td>$17.84</td>
          <td>
            {" "}
            <Button
              name={"primary"}
              backgroundColor={"Transparent"}
              color={"#364cd9"}
              fontSize={"12px"}
              borderColor={"#ccc"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Manage
            </Button>
          </td>
          <TdL>
            {" "}
            <Button
              name={"primary"}
              backgroundColor={"Transparent"}
              color={"#364cd9"}
              fontSize={"12px"}
              borderColor={"#ccc"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Actions
            </Button>
          </TdL>
        </Tr>
{/*  Tr 2  */}

<Tr>
          <TdF>
            <CheckBox />
          </TdF>
          <td>998-587</td>
          <td>Brand New Bike, Local buyer only</td>
          <td>Oludayo Ayomide</td>
          <td>
            <Button
              name={"primary"}
              backgroundColor={"#D2FBF0"}
              color={"#36a084"}
              fontSize={"12px"}
              borderColor={"#E9E9EAed"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Completed
            </Button>
          </td>
          <td>
            <Button
              name={"primary"}
              backgroundColor={"#fff"}
              color={"#0275d8"}
              fontSize={"12px"}
              borderColor={"#fff"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Resolved
            </Button>
          </td>
          <td>Mar 13,2021 08:05 AM</td>
          <td>Jan 1, 2021</td>
          <td>$17.84</td>
          <td>
            {" "}
            <Button
              name={"primary"}
              backgroundColor={"Transparent"}
              color={"#364cd9"}
              fontSize={"12px"}
              borderColor={"#ccc"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Manage
            </Button>
          </td>
          <TdF>
            {" "}
            <Button
              name={"primary"}
              backgroundColor={"Transparent"}
              color={"#364cd9"}
              fontSize={"12px"}
              borderColor={"#ccc"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Actions
            </Button>
          </TdF>
        </Tr>
{/*  Tr 2  */}

<Tr>
          <TdF>
            <CheckBox />
          </TdF>
          <td>998-587</td>
          <td>Brand New Bike, Local buyer only</td>
          <td>Oludayo Ayomide</td>
          <td>
            <Button
              name={"primary"}
              backgroundColor={"#FFE2CC"}
              color={"df9053"}
              fontSize={"12px"}
              borderColor={"#E9E9EAed"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Pending
            </Button>
          </td>
          <td>
            <Button
              name={"primary"}
              backgroundColor={"#fff"}
              color={"#ccc"}
              fontSize={"12px"}
              borderColor={"#fff"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              .Draft
            </Button>
          </td>
          <td>Mar 13,2021 08:05 AM</td>
          <td>Jan 1, 2021</td>
          <td>$17.84</td>
          <td>
            {" "}
            <Button
              name={"primary"}
              backgroundColor={"Transparent"}
              color={"#364cd9"}
              fontSize={"12px"}
              borderColor={"#ccc"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Manage
            </Button>
          </td>
          <TdL>
            {" "}
            <Button
              name={"primary"}
              backgroundColor={"Transparent"}
              color={"#364cd9"}
              fontSize={"12px"}
              borderColor={"#ccc"}
              bwsize={"80px"}
              bhsize={"35px"}
            >
              Actions
            </Button>
          </TdL>
        </Tr>
      </>
    );
  }
}
