import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import ContainerBox from "../ContainerBox";

export default function IntroSection() {
  const textColor = useColorModeValue("purple.600", "purple.50");

  return (
    <ContainerBox>
      <Box
        borderRadius="50%"
        position="relative"
        transition="all .5s ease-in-out"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          opacity: "0%",
          background: useColorModeValue("purple.200", "purple.800"),
          transition: "all .5s ease-in-out",
        }}
        sx={{
          "&:hover img": {
            filter: "grayscale(70%)",
          },
        }}
        _hover={{
          _after: {
            opacity: "60%",
          },
          sx: {
            "& img": {
              filter: "grayscale(100%)",
            },
          },
        }}
      >
        <Image
          src="Madison-3.jpg"
          borderRadius="50%"
          transition="all .5s ease-in-out"
        />
      </Box>
      <Heading size="lg">Welcome</Heading>
      <Text color={textColor}>
        {`Hello there! I'm Madison Grams, a Senior Software Engineer based in 
            Atlanta, GA, with a strong passion for crafting innovative solutions 
            and tackling complex challenges. With multiple years of experience 
            in web development and a robust background in full-stack technologies, 
            I bring a wealth of expertise to every project I undertake.`}
      </Text>
    </ContainerBox>
  );
}
