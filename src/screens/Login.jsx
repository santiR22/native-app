import { Box, Center, VStack } from "native-base";
import React from "react";
import { Body } from "../components/LoginForm/Body";
import { Footer } from "../components/LoginForm/Footer";
import { Header } from "../components/LoginForm/Header";

export const Login = () => {
  return (
    <Center w="100%" h="100%" bgColor="yellow.200">
      <Box safeArea p="2" py="8" w="90%" maxW="400">
        <Header />
        <VStack space={3} mt="5">
          <Body />
          <Footer />
        </VStack>
      </Box>
    </Center>
  );
};
