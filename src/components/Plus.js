import React from "react";
import Button from "./styled/Button";

const Plus = ({ increment }) =>
  <Button up onClick={increment}>
    +
  </Button>;

export default Plus;
