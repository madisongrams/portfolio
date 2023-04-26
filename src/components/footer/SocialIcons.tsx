import { FaGithub, FaLinkedin } from "react-icons/fa";

import { ButtonGroup, IconButton } from "@chakra-ui/react";

export default function SocialIcons() {
  return (
    <ButtonGroup variant="ghost" colorScheme="purple">
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/madison-grams-a389b6100/"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="1.25rem" />}
      />
      <IconButton
        as="a"
        href="https://github.com/madisongrams"
        aria-label="GitHub"
        icon={<FaGithub fontSize="1.25rem" />}
      />
      {/* <IconButton
    as="a"
    href="#"
    aria-label="Twitter"
    icon={<FaTwitter fontSize="1.25rem" />}
  /> */}
    </ButtonGroup>
  );
}
