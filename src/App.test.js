import React from "react";
import { mount } from "enzyme";

import { App } from "./App";
import Plus from "./components/Plus";
import Counter from "./components/Counter";

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App count={0} />);
  });

  it("handles a click on Plus", () => {
    const spy = jest.fn();
    wrapper.setProps({
      increment: spy
    });
    wrapper.find(Plus).simulate("click");
    expect(spy).toBeCalled();
  });

  it("handles a click on Minus", () => {
    // to be implemented
    expect(true).toBe(false);
  });
});
