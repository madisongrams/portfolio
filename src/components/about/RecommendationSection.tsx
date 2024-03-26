import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

import ContainerBox from "../ContainerBox";

export default function RecommendationSection() {
  const textColor = useColorModeValue("purple.600", "purple.50");

  return (
    <ContainerBox>
      <Heading size="lg">A Track Record of Excellence</Heading>
      <Text color={textColor}>
        {`Throughout my professional journey, I've had the privilege of leading 
        impactful projects and teams. From developing data-oriented analysis software 
        for real estate portfolio management to enhancing drawing and visualization 
        capabilities in React apps, I thrive on delivering high-quality solutions 
        that push boundaries and drive efficiency.`}
      </Text>
      <Heading size="lg">Endorsements from Colleagues</Heading>
      <Text color={textColor}>
        {`My commitment to excellence and collaboration has earned me accolades 
        from colleagues and managers alike. Here's what they have to say:`}
      </Text>
      <Text color={textColor}>
        {`Joseph Smith, Director of Engineering @ Outer Labs: "[Madison] 
        consistently demonstrated exceptional technical skills, a rapid learning ability, 
        and a commitment to producing high-quality software."`}
      </Text>
      <Text color={textColor}>
        {`Daniel Chopson, Chief Technology officer @ cove.tool: "Madison is a dedicated, 
        hard-working employee... [they] provided valuable structure to our system architecture."`}
      </Text>
      <Text color={textColor}>
        {`A Former Colleague: "Madison consistently stood out as an exceptional engineer 
        on our team, demonstrating an unwavering commitment to tackling the most challenging 
        tasks and problems."`}
      </Text>
    </ContainerBox>
  );
}
