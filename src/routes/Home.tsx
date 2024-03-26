import React from "react";
import {
  Flex,
  useColorModeValue,
  Icon,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { Link as RouteLink } from "react-router-dom";
import { GiHollowCat } from "react-icons/gi";

import Terminal from "../components/Terminal";
import ConfettiContainer from "../components/ConfettiContainer";

import "../static/custom-cursor.css";

export default function Home() {
  const color = useColorModeValue("purple.600", "purple.200");

  return (
    <ConfettiContainer title="">
      <Flex paddingBottom="5em">
        <Icon
          position="absolute"
          as={GiHollowCat}
          boxSize={100}
          color={color}
          display="block"
          zIndex={888}
        />
        <Terminal />
      </Flex>
      <Button
        size="lg"
        colorScheme="purple"
        rightIcon={<ChevronRightIcon />}
        transition="all 0.5s ease-in-out"
        sx={{ ".chakra-button__icon": { transition: "all 0.2s ease-in-out" } }}
        _hover={{ ".chakra-button__icon": { paddingLeft: "0.5em" } }}
        as={RouteLink}
        to="about"
      >
        Get to Know Me!
      </Button>
    </ConfettiContainer>
  );
}
