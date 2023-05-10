import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactFormControl() {
  const focusBorderColor = useColorModeValue("purple.500", "purple.300");

  return (
    <Box
      bg={useColorModeValue("purple.50", "purple.800")}
      borderRadius="lg"
      p={8}
      color={useColorModeValue("purple.600", "purple.50")}
      shadow="base"
    >
      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>

          <InputGroup>
            <InputLeftElement>
              <BsPerson />
            </InputLeftElement>
            <Input
              focusBorderColor={focusBorderColor}
              type="text"
              name="name"
              placeholder="Your Name"
              _placeholder={{ color: "inherit", opacity: 0.6 }}
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>

          <InputGroup>
            <InputLeftElement>
              <MdOutlineEmail />
            </InputLeftElement>
            <Input
              focusBorderColor={focusBorderColor}
              type="email"
              name="email"
              placeholder="Your Email"
              _placeholder={{ color: "inherit", opacity: 0.6 }}
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>

          <Textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            resize="none"
            focusBorderColor={focusBorderColor}
            _placeholder={{ color: "inherit", opacity: 0.6 }}
          />
        </FormControl>

        <Button colorScheme="purple" variant="outline">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}
