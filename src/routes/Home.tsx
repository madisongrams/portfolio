import React from "react";
import { VStack, Flex, useColorModeValue, Icon } from "@chakra-ui/react";

import "../static/custom-cursor.css";
import Terminal from "../components/Terminal";
import { GiBlackCat } from "react-icons/gi";

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
