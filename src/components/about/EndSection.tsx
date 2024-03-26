import { Box, Heading, Text, useColorModeValue, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import ContainerBox from "../ContainerBox";

export default function EndSection() {
  const textColor = useColorModeValue("purple.600", "purple.50");
  const linkColor = useColorModeValue("purple.700", "purple.200");

  return (
    <ContainerBox>
      <Heading size="lg">{`Let's Connect!`}</Heading>
      <Box display="flex" gap="0px" whiteSpace="normal">
        <span>
          <Text color={textColor} display="inline" as="span">
            {`If you're seeking a skilled and dedicated software engineer to drive your projects 
        forward, I'd love to connect and discuss how my skills and experience can help you achieve 
        your goals. Feel free to reach out via email at madisongrams.dev@gmail.com or `}
          </Text>
          <Link
            as={RouteLink}
            to={"../contact"}
            href={"../contact"}
            relative="path"
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: textColor,
            }}
            fontWeight={"bold"}
            display="inline"
          >
            <Text
              color={linkColor}
              _hover={{ color: textColor }}
              display="inline"
              as="span"
            >
              contact me here!
            </Text>
          </Link>
        </span>
      </Box>

      <Text color={textColor}>{`Let's innovate together!`}</Text>
    </ContainerBox>
  );
}
