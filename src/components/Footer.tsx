import {
  ButtonGroup,
  Container,
  Icon,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiBlackCat } from "react-icons/gi";

export default function Footer() {
  const color = useColorModeValue("purple.600", "purple.100");

  return (
    <Container
      as="footer"
      role="contentinfo"
      bg="purple.800"
      py={{ base: "12", md: "5" }}
      bottom={0}
      minWidth="100%"
      centerContent
    >
      <Stack justify="space-between" width="80%" height="5rem">
        <Stack justify="space-between" direction="row" align="center">
          <Icon as={GiBlackCat} boxSize={14} color={color} />
          <ButtonGroup variant="ghost">
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
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Madison Grams. All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
}
