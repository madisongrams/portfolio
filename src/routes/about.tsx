import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import ConfettiContainer from "../components/ConfettiContainer";

export default function About() {
  const textColor = useColorModeValue("purple.600", "purple.50");
  return (
    <ConfettiContainer title="About Me">
      <Box
        bg={useColorModeValue("purple.50", "purple.800")}
        borderRadius="lg"
        marginTop="10"
        color={useColorModeValue("purple.600", "purple.50")}
      >
        <VStack fontFamily="mono" spacing={8} padding="10" fontSize="md">
          <Text color={textColor}>
            {`As a software engineer, I'm passionate about coding and solving complex
        problems. I have a deep passion for using technology to solve pressing
        global challenges. My experience spans across a variety of full stack
        web development technologies, including ReactJS and Django, to make
        robust, scalable web applications. I'm also well-versed in a range of
        programming languages, including Java, Python, and Scala`}
          </Text>
          <Text color={textColor}>
            {`I graduated
        with highest honors from the Georgia Institute of Technology in December
        2019 with a B.S. in Computer Science, focusing on Artificial
        Intelligence and Systems & Architecture. During my time in college, I
        had the opportunity to work as a teaching assistant for an introductory
        computer architecture course, honing my ability to explain complex
        technical concepts in simple terms.`}
          </Text>
          <Text color={textColor}>
            {`I have most recently been working
        for a company fighting climate change, where I have been able to apply
        my technical skills towards a meaningful cause. Working towards
        decarbonization, I have gained a deep understanding of the importance of
        sustainable technology solutions in creating a better world. My work at
        this company has only fueled my passion to use technology for good.`}
          </Text>
          <Text color={textColor}>
            {`I am
        constantly seeking new challenges and opportunities to make a positive
        impact through my work. If you're looking for a skilled and dedicated
        software engineer to join your team, I'd love to connect and discuss how
        my skills and experience can help you achieve your goals.`}
          </Text>
        </VStack>
      </Box>
    </ConfettiContainer>
  );
}
