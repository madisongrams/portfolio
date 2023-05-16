import { VStack } from "@chakra-ui/react";
import ContactFormIcons from "../components/contact/ContactFormIcons";
import ContactForm from "../components/contact/ContactForm";
import ConfettiContainer from "../components/ConfettiContainer";

export default function Contact() {
  return (
    <ConfettiContainer title="Get in Touch">
      <VStack
        spacing={{ base: 4, md: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <ContactFormIcons />
        <ContactForm />
      </VStack>
    </ConfettiContainer>
  );
}
