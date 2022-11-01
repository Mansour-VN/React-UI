import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked ~ span {
    font-weight: bolder;
    color: blue;
  }
  &:not(:checked) ~ span {
    color: gray;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: content;
`;
const MainDiv = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height:50px;
margin: 10px 0;
`

const Select = styled.select`
width:70px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;}

`



class Pagination extends Component {
  render() {
    return (
      <MainDiv>
       <span>showing 21-30 of 38 results</span>
        <Div>
          <label>
            <Input type="checkbox" />
            <span>
              <i className="fa-solid fa-angle-left"></i>
            </span>
          </label>
          <label>
            <Input type="checkbox" />
            <span>1</span>
          </label>
          <label>
            <Input type="checkbox" />
            <span>2</span>
          </label>
          <label>
            <Input type="checkbox" />
            <span>3</span>
          </label>
          <label>
            <Input type="checkbox" />
            <span>4</span>
          </label>
          <label>
            <Input type="checkbox" />
            <span>5</span>
          </label>
          <label>
            <Input type="checkbox" />
            <span>6</span>
          </label>
          <label>
            <Input type="checkbox" />
            <span>7</span>
          </label>
          <label>
            <Input type="checkbox" />
            <span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </label>
        </Div>
        <div>
          <Select id="Page">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Select>
        </div>
      </MainDiv>
    );
  }
}

export default Pagination;
