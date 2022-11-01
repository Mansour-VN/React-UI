import React, {Component} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 15px;    
  height: 15px;
  &:checked{
  border-radius: 10px;
    
  }
  
`

class CheckBox extends Component {
    render() {
        return (
             <>
             <Input type="checkbox" disabled={this.props.disabled}/>
             </>

        );
    }
}

export default CheckBox;