import {
  ADD_CHOCOLATE,
  GET_CHOCOLATE,
  REMOVE_CHOCOLATE,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";
import axios from "axios";
export const addChocolate = (chocolate) => ({
  type: ADD_CHOCOLATE,
  payload: chocolate,
});

const increaseQuantitys = (itemId) => {
  return (dispatch, getState) => {
    const state = getState();
    const updatedCustom = state.custom.map((item) => {
      if (item.id === itemId) {
        const updatedQuantity = item.quantity + 1;
        console.log(updatedQuantity);
        // Update the quantity in the database
        axios.put(`http://localhost:3004/Item/${itemId}`, {
          ...item,
          quantity: updatedQuantity,
        });
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    dispatch({ type: INCREASE_QUANTITY, payload: updatedCustom });
  };
};

const decreaseQuantitys = (itemId) => {
  return (dispatch, getState) => {
    const state = getState();
    const updatedCustom = state.custom.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        const updatedQuantity = item.quantity - 1;
        // Update the quantity in the database
        axios.put(`http://localhost:3004/Item/${itemId}`, {
          ...item,
          quantity: updatedQuantity,
        });
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    dispatch({ type: DECREASE_QUANTITY, payload: updatedCustom });
  };
};
// export const removeChocolate = (chocolateId) => ({
//   type: REMOVE_CHOCOLATE,
//   payload: chocolateId,
// });

const handleGetChocolate = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3004/products`).then((res) => {
      // console.log(res);
      dispatch({
        type: GET_CHOCOLATE,
        payload: res.data,
      });
    });
  };
};


const handlePostCustomChocolate = (input) => {
  return (dispatch) => {
    // Check if the custom item count is not more than 8
    axios.get("http://localhost:3004/Item").then((res) => {
      if (res.data.length < 8) {
        // Check if the input item already exists in the database
        const existingItem = res.data.find(
          (item) => item.title === input.title
        );

        if (!existingItem) {
          // If the item doesn't exist, add the chocolate with a quantity of 1
          const itemWithQuantity = { ...input, quantity: 1 };

          axios
            .post("http://localhost:3004/Item", itemWithQuantity)
            .then((res) => {
              axios.get("http://localhost:3004/Item").then((res) => {
                dispatch({
                  type: ADD_CHOCOLATE,
                  payload: res.data,
                });
              });
            });
        } else {
          // If the item already exists, you can handle it as needed, e.g., show an error message
          console.log("This custom item already exists.");
        }
      } else {
        // If the count is 8 or more, show an error message or handle it as needed
        console.log("You can't add more than 8 custom items.");
      }
    });
  };
};
const removeChocolate = (itemId) => {
  return (dispatch) => {
    // Add code to remove the item from the custom list using axios
    axios.delete(`http://localhost:3004/Item/${itemId}`).then(() => {
      // After deletion, dispatch an action to update the custom items
      axios.get("http://localhost:3004/Item").then((res) => {
        dispatch({
          type: REMOVE_CHOCOLATE,
          payload: res.data,
        });
      });
    });
  };
};
export {
  handleGetChocolate,
  handlePostCustomChocolate,
  removeChocolate,
  increaseQuantitys,
  decreaseQuantitys,
};
