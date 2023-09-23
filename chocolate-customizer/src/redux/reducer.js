// // src/redux/reducer.js
import {
  ADD_CHOCOLATE,
  REMOVE_CHOCOLATE,
  GET_CHOCOLATE,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";

const initialState = {
  chocolates: [],
  custom: [],
};

const chocolateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHOCOLATE:
      // Check if adding the chocolate exceeds 8 items

      return {
        ...state,
        chocolates: [...state.chocolates, action.payload],
      };

    case ADD_CHOCOLATE:
      return {
        ...state,

        custom: action.payload,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        custom: action.payload,
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        custom: action.payload,
      };
    case REMOVE_CHOCOLATE:
      return {
        ...state,
        custom: action.payload,
      };
    default:
      return state;
  }
};

export default chocolateReducer;
