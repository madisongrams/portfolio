import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

import ContainerBox from "../ContainerBox";

export default function TechnologySection() {
  const textColor = useColorModeValue("purple.600", "purple.50");

  return (
    <ContainerBox>
      <Heading size="lg">Passion for Technology, Drive for Impact</Heading>
      <Text color={textColor}>
        {`My journey in software engineering began with a deep-seated passion 
            for coding and problem-solving. Graduating with highest honors from 
            the Georgia Institute of Technology with a B.S. in Computer Science, 
            I focused on Artificial Intelligence and Systems & Architecture, 
            laying the groundwork for my career dedicated to leveraging technology 
            for meaningful change.`}
      </Text>
      <Heading size="lg">Building Sustainable Solutions</Heading>
      <Text color={textColor}>
        {`One of the most rewarding experiences in my career has been working 
            for a company dedicated to combating climate change. Here, I applied 
            my technical skills to drive decarbonization efforts, gaining invaluable 
            insights into the pivotal role of sustainable technology solutions in shaping a 
            better world.`}
      </Text>
    </ContainerBox>
  );
}
