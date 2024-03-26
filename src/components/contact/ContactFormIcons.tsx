import {
  HStack,
  IconButton,
  Link,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK } from "../../constants";

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
          transition="all .5s ease-in-out"
        />
      </Tooltip>
      <Tooltip
        label={"Github"}
        closeOnClick={false}
        hasArrow
      >
      <Link href={GITHUB_LINK} isExternal>
        <IconButton
          aria-label="github"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<FaGithub />}
          colorScheme="purple"
          isRound
          transition="all .5s ease-in-out"
        />
      </Link>
      </Tooltip>
      <Tooltip
        label={"LinkedIn"}
        closeOnClick={false}
        hasArrow
      >
      <Link href={LINKEDIN_LINK} isExternal>
        <IconButton
          aria-label="linkedin"
          variant="ghost"
          size="lg"
          icon={<FaLinkedin size="28px" />}
          colorScheme="purple"
          isRound
          transition="all .5s ease-in-out"
        />
      </Link>
      </Tooltip>
    </HStack>
  );
}
