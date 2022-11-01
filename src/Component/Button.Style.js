import styled from 'styled-components';

const Button = styled.button `
    width:${(props) => props.bwsize};
    height:${(props) => props.bhsize};
    color:${(props) => props.color};
    margin :5px;
    background-repeat: no-repeat;
    border: 1px solid ${(props) => props.borderColor};
    background-color: ${(props) => props.backgroundColor};
    font-weight: 600;
    font-size:${(props) => props.fontSize}; ;
    
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
    outline: none;

i {
    margin:10px

}

`;

export default Button

