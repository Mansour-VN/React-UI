import styled from "styled-components";

const DivFont = styled.div`
  color: ${props => props.color};
  background: ${props => props.background};
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  padding: 2px 10px;
`
export default DivFont;