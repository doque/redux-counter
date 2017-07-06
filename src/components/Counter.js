import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100px;
  font: 40px Verdana;
  text-align: center;
  flex-grow: 1;
`;

const Counter = ({ count }) =>
  <Div>
    {count}
  </Div>;

export default Counter;
