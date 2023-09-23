





import { Box, Text, VStack, Heading, Button } from '@chakra-ui/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeChocolate, increaseQuantitys, decreaseQuantitys } from '../redux/actions';

function Custom() {
  // Get the custom items from the Redux store
  const customItems = useSelector((state) => state.custom);
  const dispatch = useDispatch();
   
  // Calculate the total price and total items
  const totalItems = customItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = customItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);

  // Function to remove an item from the custom list
  const removeItem = (itemId) => {
    dispatch(removeChocolate(itemId));
  };

  // Function to increase the quantity of an item
  const increaseQuantity = (itemId) => {
    dispatch(increaseQuantitys(itemId));
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (itemId) => {
    dispatch(decreaseQuantitys(itemId));
  };

  return (
    <Box>
      <Heading size="md">Custom Items</Heading>
      <VStack align="start" spacing={2}>
        {customItems.map((item, index) => (
          <Box key={index} display="flex" justifyContent="space-between">
            <Text p={2}>
              {item.title} - ${item.price} x {item.quantity}
            </Text>
            <div>
              <Button size="sm" onClick={() => decreaseQuantity(item.id)} pl={2}>
                -
              </Button>
              <Button size="sm" onClick={() => increaseQuantity(item.id)} m={2}>
                +
              </Button>
              <Button size="sm" colorScheme="red" onClick={() => removeItem(item.id)} m={2}>
                Remove
              </Button>
            </div>
          </Box>
        ))}
        <Text>Total Items: {totalItems}</Text>
        <Text>Total Price: ${totalPrice.toFixed(2)}</Text>
      </VStack>
    </Box>
  );
}

export default Custom;

