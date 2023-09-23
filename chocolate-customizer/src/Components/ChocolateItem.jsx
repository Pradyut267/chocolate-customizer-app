import React from 'react';
import { Box, Text, IconButton ,Grid} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useDispatch,useSelector } from 'react-redux';
import { removeChocolate } from '../redux/actions';
import { handleGetChocolate } from '../redux/actions';
import {useEffect} from "react";
import Choco from './Choco';
const ChocolateItem = ({chocolate}) => {

console.log(chocolate);
  return (
    
    <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
      {chocolate.map((chocolate)=>{
        return(
            
          <Choco key={chocolate.id} chocolate={chocolate} />
      
         
        )
      })}
      
    </Grid>
    
  );
};

export default ChocolateItem;


