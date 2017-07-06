import styled from "styled-components";

const Button = styled.button`
  font-size: 20px;
  background: ${props => (props.up ? "mediumseagreen" : "crimson")};
  border: 1px solid red;
  border-radius: 2px;
  flex-grow: 1;
`;

export default Button;
