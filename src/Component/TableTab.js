import React, {Component} from 'react';
import styled from 'styled-components'


const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked ~ span {
    color: blue;
    border-bottom: blue 4px solid;
    padding: 9px 20px ;
  }


  &:checked ~ span:after {
    background: orangered;
  }
`
const Span = styled.span`
  font-weight: bold;
  padding: 9px 20px;
  transition: 0.3s;
  &:hover{
    cursor: pointer;
  }
  :after {
    content: "85";
    color: whitesmoke;
    background: lightgray;
    padding: 0px 5px;
    border-radius: 5px;
    margin-left: 5px;
  }
`

class TableTab extends Component {
    render() {
        return (
            <div>

                <label>
                    <Input type="checkbox"/>
                    <Span id="text">{this.props.children}</Span>
                </label>
            </div>
        );
    }
}

export default TableTab;