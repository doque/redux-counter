import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { App } from "./App";
import Plus from "./components/Plus";
import Counter from "./components/Counter";

describe("App Component", () => {
  let wrapper;
  // this resets our component to a clean state before each test
  // ensuring that tests are not interefering with each other
  beforeEach(() => {
    wrapper = mount(<App count={0} />);
  });

  it("handles a click on Plus", () => {
    const spy = jest.fn();
    wrapper.setProps({
      increment: spy
    });
    wrapper.find(Plus).simulate("click");
    wrapper.setProps({ count: 20 });
    expect(spy).toBeCalled();
  });

  it("renders all sub components correctly", () => {
    const tree = renderer.create(<App count={31} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
