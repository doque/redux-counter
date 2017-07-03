import * as types from "../constants/counterActionTypes";

export const incremented = () => {
  return {
    type: types.INCREMENT
  };
};

export const decremented = () => {
  return {
    type: types.DECREMENT
  };
};
