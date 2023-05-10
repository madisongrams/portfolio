import { VStack } from "@chakra-ui/react";
import ContactFormIcons from "../components/contact/ContactFormIcons";
import ContactFormControl from "../components/contact/ContactFormControl";
import ConfettiContainer from "../components/ConfettiContainer";

export default function Contact() {
  return (
    <ConfettiContainer title="Get in Touch">
      <VStack
        spacing={{ base: 4, md: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <ContactFormIcons />
        <ContactFormControl />
      </VStack>
    </ConfettiContainer>
  );
}
