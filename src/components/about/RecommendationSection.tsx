import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

import ContainerBox from "../ContainerBox";
import Blockquote from "../Blockquote";

export default function RecommendationSection() {
  const textColor = useColorModeValue("purple.600", "purple.50");

  return (
    <ContainerBox>
      <Heading size="lg">Endorsements from Colleagues</Heading>
      <Text color={textColor}>
        {`My commitment to excellence and collaboration has earned me accolades 
        from colleagues and managers alike. Here's what they have to say:`}
      </Text>
      <Blockquote
        quote={`[Madison] consistently demonstrated exceptional technical skills, 
        a rapid learning ability, and a commitment to producing high-quality software.`}
        source={"Joseph Smith, Director of Engineering @ Outer Labs"}
      />
      <Blockquote
        quote={`Madison is a dedicated, hard-working employee... [they] 
        provided valuable structure to our system architecture.`}
        source={"Daniel Chopson, Chief Technology officer @ cove.tool"}
      />

      <Blockquote
        quote={`Madison consistently stood out as an exceptional engineer 
        on our team, demonstrating an unwavering commitment to tackling the 
        most challenging tasks and problems.`}
        source="A Former Colleage"
      />
    </ContainerBox>
  );
}
