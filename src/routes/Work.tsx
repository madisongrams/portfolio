import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import ConfettiContainer from "../components/ConfettiContainer";

export default function Work() {
  const textColor = useColorModeValue("purple.600", "purple.50");
  return (
    <ConfettiContainer title="Work">
      <Box
        bg={useColorModeValue("purple.50", "purple.800")}
        borderRadius="lg"
        marginTop="10"
        color={useColorModeValue("purple.600", "purple.50")}
        w="800px"
      >
        <VStack fontFamily="mono" spacing={8} padding="10" fontSize="md">
          <Heading size="lg" fontWeight="bold">
            drawing.tool
          </Heading>
          <Text color={textColor}>
            {`Drawing.Tool is a state-of-the-art 3D modeling software designed
            for architects and designers. With its intuitive interface, advanced
            features, and seamless collaboration tools, it streamlines the design
            process and empowers users to create stunning architectural masterpieces with ease.`}
          </Text>
          <Image src="drawwithimage6.gif" />
          <Image src="primitive_mass.gif" />

          <Text as="i">
            Technology: React, TypeScript, JavaScript, Node.js, three.js,
            Python, Django
          </Text>
        </VStack>
      </Box>
    </ConfettiContainer>
  );
}
