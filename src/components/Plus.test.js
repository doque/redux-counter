import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Plus from "./Plus";

describe("Plus", () => {
  it("renders correctly and looks amazing", () => {
    const tree = renderer.create(<Plus large />).toJSON();
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
