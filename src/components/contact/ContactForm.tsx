import { SyntheticEvent, useCallback, useRef, useState } from "react";

import { Box, Button, useColorModeValue, VStack } from "@chakra-ui/react";
import { sendForm } from "@emailjs/browser";
import ContactFormInputs from "./contactFormInputs";
import ControlledInput from "./controlledInput";

export default function ContactForm() {
  const [submittingMessage, setSubmittingMessage] = useState(false);
  const form = useRef(null);

  const sendEmail = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    setSubmittingMessage(true);

    sendForm(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID || "",
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID || "",
      form.current || "",
      process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
    ).then(
      (result) => setSubmittingMessage(false),
      (error) => setSubmittingMessage(false)
    );
  }, []);

  return (
    <Box
      bg={useColorModeValue("purple.50", "purple.800")}
      borderRadius="lg"
      p={8}
      color={useColorModeValue("purple.600", "purple.50")}
      shadow="base"
    >
      <form ref={form} onSubmit={sendEmail}>
        <VStack spacing={5}>
          {ContactFormInputs.map((inputProps) => (
            <ControlledInput
              inputProps={inputProps}
              key={inputProps.label}
              submittingMessage={submittingMessage}
            />
          ))}

          <Button
            isLoading={submittingMessage}
            colorScheme="purple"
            variant="outline"
            type="submit"
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
