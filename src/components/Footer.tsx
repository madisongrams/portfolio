import {
  ButtonGroup,
  Container,
  Icon,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiBlackCat } from "react-icons/gi";

export default function Footer() {
  const color = useColorModeValue("purple.800", "purple.100");

  const bgColor = useColorModeValue("purple.300", "purple.800");

  return (
    <Container
      as="footer"
      role="contentinfo"
      bg={bgColor}
      py={{ base: "12", md: "5" }}
      bottom={0}
      minWidth="100%"
      centerContent
      position="absolute"
      color={color}
      sx={{
        clear: "both",
      }}
    >
      <Stack justify="space-between" width="80%" height="5rem">
        <Stack justify="space-between" direction="row" align="center">
          <Icon as={GiBlackCat} boxSize={14} />
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
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Madison Grams. All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
}
