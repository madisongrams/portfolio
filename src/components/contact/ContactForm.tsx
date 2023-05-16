import { SyntheticEvent, useRef } from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

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
import { sendForm } from "@emailjs/browser";

export default function ContactForm() {
  const focusBorderColor = useColorModeValue("purple.500", "purple.300");
  const form = useRef(null);

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    sendForm(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID || "",
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID || "",
      form.current || "",
      process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Box
      bg={useColorModeValue("purple.50", "purple.800")}
      borderRadius="lg"
      p={8}
      color={useColorModeValue("purple.600", "purple.50")}
      shadow="base"
    >
      <form ref={form}>
        <VStack spacing={5} onSubmit={sendEmail}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <BsPerson />
              </InputLeftElement>
              <Input
                focusBorderColor={focusBorderColor}
                type="text"
                name="user_name"
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
                name="user_email"
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

          <Button colorScheme="purple" variant="outline" type="submit">
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
