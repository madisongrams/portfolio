import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
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
import { MdEmail } from "react-icons/md";

const EMAIL = "madisongrams.dev@gmail.com";

export default function ContactFormIcons() {
  const { hasCopied, onCopy } = useClipboard(EMAIL);

  return (
    <HStack
      align="center"
      justify="space-around"
      direction={{ base: "row", md: "column" }}
    >
      <Tooltip
        label={hasCopied ? "Email Copied!" : "Copy Email"}
        closeOnClick={false}
        hasArrow
      >
        <IconButton
          aria-label="email"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          colorScheme="purple"
          icon={<MdEmail />}
          onClick={onCopy}
          isRound
        />
      </Tooltip>

      <Link href="#">
        <IconButton
          aria-label="github"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<FaGithub />}
          colorScheme="purple"
          isRound
        />
      </Link>

      {/* <Link href="#">
            <IconButton
              aria-label="twitter"
              variant="ghost"
              size="lg"
              icon={<BsTwitter size="28px" />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Link> */}

      <Link href="#">
        <IconButton
          aria-label="linkedin"
          variant="ghost"
          size="lg"
          icon={<FaLinkedin size="28px" />}
          colorScheme="purple"
          isRound
        />
      </Link>
    </HStack>
  );
}
