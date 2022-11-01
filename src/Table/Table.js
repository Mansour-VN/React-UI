import React, { Component } from "react";
import TableRow from "./TableRow";
import styled from "styled-components";
import CheckBox from "../Component/Checkbox";

const TheadRow = styled.tr`
// border: 1px solid black;
height:48px;
background-color:#CDCDCD;
border-radius: 100px;
width:100vw;
`
// const Thead = styled.thead`
// border: 1px solid black;
// height:48px;
// // background-color:#CCCCCC;
// border-radius: 16px;
// `
// const HeadData = styled.th`
// text-align: center;
// background-color:#CCCCCC;
// `

const ThF = styled.th`
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
`
const ThL = styled.th`
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
`

export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <TheadRow>
            <ThF>
              <CheckBox disabled="disabled"/>
            </ThF>
            <th>ID No.</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Delivery status</th>
            <th>
              <i class="fa-solid fa-sort"></i>Created date
            </th>
            <th>
              <i class="fa-solid fa-sort"></i>Deadline
            </th>
            <th>
              <i class="fa-solid fa-sort-down"></i>Price
            </th>
          <ThL colSpan="2">Action</ThL>
            
          </TheadRow>
        </thead>
        <tbody>
         <TableRow/>
         <TableRow/>
        </tbody>
      </table>
    );
  }
}
