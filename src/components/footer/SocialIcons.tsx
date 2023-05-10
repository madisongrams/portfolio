import { FaGithub, FaLinkedin } from "react-icons/fa";

import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { GITHUB_LINK, LINKEDIN_LINK } from "../../constants";

export default function SocialIcons() {
  return (
    <ButtonGroup variant="ghost" colorScheme="purple">
      <IconButton
        as="a"
        href={LINKEDIN_LINK}
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="1.25rem" />}
      />
      <IconButton
        as="a"
        href={GITHUB_LINK}
        aria-label="GitHub"
        icon={<FaGithub fontSize="1.25rem" />}
      />
    </ButtonGroup>
  );
}
