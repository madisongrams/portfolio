import React from "react";
import { Box, Text, VStack, Code, Heading, Flex } from "@chakra-ui/react";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <Flex>
      <VStack spacing={8} align="stretch">
        <Heading>Welcome.</Heading>
        {/* <Logo h="40vmin" pointerEvents="none" /> */}
        <Text>
          {"My name is Madison & I'm a software engineer based in Atlanta, GA."}
        </Text>
      </VStack>
    </Flex>
  );
}
