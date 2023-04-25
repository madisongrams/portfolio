import React from "react";
import { VStack, Heading, Flex, Box, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

import "../static/custom-cursor.css";

export default function Terminal() {
  return (
    <Flex
      position="relative"
      flexDirection="row"
      bg="blackAlpha.500"
      paddingBottom="10"
      paddingLeft="5"
      height={"8rem"}
      textAlign={"left"}
      width="50rem"
      alignItems="flex-end"
      borderRadius={10}
      borderWidth="1px"
      borderColor={"purple.100"}
      boxShadow="dark-lg"
      marginTop={"4.3rem"}
    >
      <Box justifySelf="start" marginRight={3} height="4rem">
        <Heading size={{ base: "2xl", md: "sm" }} fontFamily="mono">
          {"~/src>"}
        </Heading>
      </Box>

      <Box width="40rem" height="4rem">
        <Heading size={{ base: "2xl", md: "sm" }}>
          <TypeAnimation
            sequence={[
              500,
              "Welcome. \n My name is Madison. \n I'm a software engineer based in Atlanta, GA.",
              1000,
            ]}
            wrapper="span"
            cursor={false}
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            style={{ whiteSpace: "pre-line" }}
            className="typing"
          />
        </Heading>
      </Box>
    </Flex>
  );
}
