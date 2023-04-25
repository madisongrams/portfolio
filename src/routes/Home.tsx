import React from "react";
import { Text, VStack, Heading, Flex } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <Flex>
      <VStack spacing={8} align="stretch">
        <Heading size={{ base: "2xl", md: "3xl" }}>
          <TypeAnimation
            sequence={["Welcome.", 1000]}
            wrapper="span"
            cursor={true}
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </Heading>
        {/* <Logo h="40vmin" pointerEvents="none" /> */}
        <Text align="left">
          {"My name is Madison & I'm a software engineer based in Atlanta, GA."}
        </Text>
      </VStack>
    </Flex>
  );
}
