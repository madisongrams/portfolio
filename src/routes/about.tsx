import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <Box>
      <Heading>About</Heading>
      <VStack fontFamily="mono" spacing={8} marginTop="10">
        <Text>
          {`As a software engineer, I'm passionate about coding and solving complex
        problems. I have a deep passion for using technology to solve pressing
        global challenges. My experience spans across a variety of full stack
        web development technologies, including ReactJS and Django, to make
        robust, scalable web applications. I'm also well-versed in a range of
        programming languages, including Java, Python, and Scala`}
        </Text>
        <Text>
          {`I graduated
        with highest honors from the Georgia Institute of Technology in December
        2019 with a B.S. in Computer Science, focusing on Artificial
        Intelligence and Systems & Architecture. During my time in college, I
        had the opportunity to work as a teaching assistant for an introductory
        computer architecture course, honing my ability to explain complex
        technical concepts in simple terms.`}
        </Text>
        <Text>
          {` I have most recently been working
        for a company fighting climate change, where I have been able to apply
        my technical skills towards a meaningful cause. Working towards
        decarbonization, I have gained a deep understanding of the importance of
        sustainable technology solutions in creating a better world. My work at
        this company has only fueled my passion to use technology for good.`}
        </Text>
        <Text>
          {`I am
        constantly seeking new challenges and opportunities to make a positive
        impact through my work. If you're looking for a skilled and dedicated
        software engineer to join your team, I'd love to connect and discuss how
        my skills and experience can help you achieve your goals.`}
        </Text>
      </VStack>
    </Box>
  );
}
