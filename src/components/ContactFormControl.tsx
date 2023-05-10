import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import ContactFormIcons from "./ContactFormIcons";

export default function ContactFormControl() {
  return (
    <Box
      bg={useColorModeValue("purple.50", "purple.800")}
      borderRadius="lg"
      p={8}
      color={useColorModeValue("purple.600", "whiteAlpha.900")}
      shadow="base"
    >
      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>

          <InputGroup>
            <InputLeftElement>
              <BsPerson />
            </InputLeftElement>
            <Input type="text" name="name" placeholder="Your Name" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>

          <InputGroup>
            <InputLeftElement>
              <MdOutlineEmail />
            </InputLeftElement>
            <Input type="email" name="email" placeholder="Your Email" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>

          <Textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            resize="none"
          />
        </FormControl>

        <Button colorScheme="purple" color="white">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}
