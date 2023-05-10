import { Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import ContactFormIcons from "./ContactFormIcons";
import ContactFormControl from "./ContactFormControl";

export default function ContactForm() {
  return (
    <VStack spacing={{ base: 4, md: 8 }}>
      <Heading
        fontSize={{
          base: "4xl",
          md: "5xl",
        }}
        color={useColorModeValue("purple.800", "purple.100")}
      >
        Get in Touch
      </Heading>

      <VStack
        spacing={{ base: 4, md: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <ContactFormIcons />
        <ContactFormControl />
      </VStack>
    </VStack>
  );
}
