import React from "react";
import { TypeAnimation } from "react-type-animation";

import { Heading, Flex, Box, useColorModeValue } from "@chakra-ui/react";

import "../static/custom-cursor.css";

export default function Terminal() {
  const bgColor = useColorModeValue("whiteAlpha.500", "blackAlpha.500");
  const boxShadow = useColorModeValue("lg", "dark-lg");
  const borderColor = useColorModeValue("purple.600", "purple.200");
  const textColor = useColorModeValue("purple.600", "purple.100");

  return (
    <Flex
      position="relative"
      flexDirection="row"
      bg={bgColor}
      paddingBottom="10"
      paddingLeft="5"
      height={{ base: "9rem", md: "8rem" }}
      textAlign={"left"}
      width={{ base: "20rem", sm: "25rem", md: "50rem" }}
      alignItems="flex-end"
      borderRadius={10}
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow={boxShadow}
      marginTop={"4.3rem"}
    >
      <Box
        justifySelf="start"
        marginRight={3}
        height={{ base: "5rem", md: "4rem" }}
      >
        <Heading
          size={{ base: "xs", md: "sm" }}
          fontFamily="mono"
          color={textColor}
        >
          {"~/src>"}
        </Heading>
      </Box>

      <Box
        width={{ base: "15rem", sm: "20rem", md: "40rem" }}
        height={{ base: "5rem", md: "4rem" }}
      >
        <Heading size={{ base: "xs", md: "sm" }} color={textColor}>
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
