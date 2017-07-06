import styled from "styled-components";
import { lighten, darken } from "polished";

const up = "green";
const down = "red";

const Button = styled.button`
  font-size: 20px;
  background: ${props => (props.up ? lighten(0.2, up) : lighten(0.2, down))};
  color: floralwhite;
  border: 3px solid ${props =>
      props.up ? darken(0.2, up) : darken(0.2, down)};
  border-radius: 6px;
  flex-grow: 1;
`;

export default Button;
