
import React from 'react';
import { Box, Text, IconButton, Image, Stack, Heading, Divider, ButtonGroup, Button, Grid } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { handlePostCustomChocolate } from '../redux/actions';

function Choco({ chocolate }) {
  const dispatch = useDispatch();
  
  // Define a function to handle adding the chocolate to the custom item
  const addItem = () => {
    dispatch(handlePostCustomChocolate(chocolate));
  };
  
  console.log(chocolate);
  
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={chocolate.img}
          alt='Chocolate'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{chocolate.title}</Heading>
          <Text>{chocolate.title}</Text>
          <Text color='blue.600' fontSize='2xl'>
            ${chocolate.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='ghost' colorScheme='blue' onClick={addItem}>
            Add to CustomItem
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Choco;
