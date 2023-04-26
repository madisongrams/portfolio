import React from "react";
import { Flex, useColorModeValue, Icon } from "@chakra-ui/react";

import Terminal from "../components/Terminal";
import { GiBlackCat } from "react-icons/gi";

import "../static/custom-cursor.css";


export default function Home() {
  const color = useColorModeValue("purple.600", "purple.100");

  return (
    <Flex>
      <Icon
        position="absolute"
        as={GiBlackCat}
        boxSize={100}
        color={color}
        display="block"
        zIndex={888}
      />
      <Terminal />
    </Flex>
  );
}
