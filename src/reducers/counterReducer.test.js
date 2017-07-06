import * as types from "../constants/counterActionTypes";
import counterReducer from "./counterReducer";

describe("Counter Reducer", () => {
  it("contains the correct initial state", () => {
    const state = counterReducer(undefined, { type: "" });
    expect(state).toEqual({
      count: 0
    });
  });

  it("handles INCREMENT correctly", () => {
    const incrementAction = {
      type: types.INCREMENT
    };

    expect(counterReducer(undefined, incrementAction)).toEqual({
      count: 1
    });
  });

  it("handles DECREMENT correctly", () => {
    const decrementAction = {
      type: types.DECREMENT
    };

    expect(counterReducer(undefined, decrementAction)).toEqual({
      count: -1
    });
  });
});
