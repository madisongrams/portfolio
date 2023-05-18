import {
  Container,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SocialIcons from "./SocialIcons";
import LogoIcon from "../../static/LogoIcon";

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
      color={color}
      sx={{
        clear: "both",
      }}
    >
      <Stack justify="space-between" width="80%" height="5rem">
        <Stack justify="space-between" direction="row" align="center">
          <Icon as={LogoIcon} boxSize={14} />
          <SocialIcons />
        </Stack>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Madison Grams. All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
}
