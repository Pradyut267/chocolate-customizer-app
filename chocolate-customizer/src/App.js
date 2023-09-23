import React from "react";
import { Box, VStack, Heading, Text, Button, Grid } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import ChocolateItem from "./Components/ChocolateItem";
import { handleGetChocolate } from "../src/redux/actions";
import { useEffect } from "react";
import Custom from "./Components/Custom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetChocolate());
  }, []);
  const chocolates = useSelector((state) => state.chocolates);

  return (
    <Box p="4">
      <Heading size="xl">Custom Chocolate Pack</Heading>
      <Custom />

      {chocolates.map((chocolate) => {
        return <ChocolateItem key={chocolate.id} chocolate={chocolate} />;
      })}
    </Box>
  );
}

export default App;
