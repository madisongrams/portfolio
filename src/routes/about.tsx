import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import ConfettiContainer from "../components/ConfettiContainer";

export default function About() {
  return (
    <ConfettiContainer>
      <Heading>About</Heading>
      <Container bgColor={"purple.700"} borderRadius={"5px"} marginTop="10">
        <VStack fontFamily="mono" spacing={8} padding="10" color="purple.100">
          <Text color="purple.200">
            {`As a software engineer, I'm passionate about coding and solving complex
        problems. I have a deep passion for using technology to solve pressing
        global challenges. My experience spans across a variety of full stack
        web development technologies, including ReactJS and Django, to make
        robust, scalable web applications. I'm also well-versed in a range of
        programming languages, including Java, Python, and Scala`}
          </Text>
          <Text color="purple.200">
            {`I graduated
        with highest honors from the Georgia Institute of Technology in December
        2019 with a B.S. in Computer Science, focusing on Artificial
        Intelligence and Systems & Architecture. During my time in college, I
        had the opportunity to work as a teaching assistant for an introductory
        computer architecture course, honing my ability to explain complex
        technical concepts in simple terms.`}
          </Text>
          <Text color="purple.200">
            {` I have most recently been working
        for a company fighting climate change, where I have been able to apply
        my technical skills towards a meaningful cause. Working towards
        decarbonization, I have gained a deep understanding of the importance of
        sustainable technology solutions in creating a better world. My work at
        this company has only fueled my passion to use technology for good.`}
          </Text>
          <Text color="purple.200">
            {`I am
        constantly seeking new challenges and opportunities to make a positive
        impact through my work. If you're looking for a skilled and dedicated
        software engineer to join your team, I'd love to connect and discuss how
        my skills and experience can help you achieve your goals.`}
          </Text>
        </VStack>
      </Container>
    </ConfettiContainer>
  );
}
