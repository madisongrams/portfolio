import { Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import ConfettiContainer from "../components/ConfettiContainer";
import ContainerBox from "../components/ContainerBox";

export default function Work() {
  const textColor = useColorModeValue("purple.600", "purple.50");
  return (
    <ConfettiContainer title="Work">
      <ContainerBox>
        <Heading size="lg" fontWeight="bold">
          Drawing.Tool
        </Heading>
        <Text color={textColor}>
          {`drawing.tool is a state-of-the-art 3D modeling software designed
            for architects and designers. With its intuitive interface, advanced
            features, and seamless collaboration tools, it streamlines the design
            process and empowers users to create stunning architectural masterpieces with ease.`}
        </Text>
        <Image src="drawwithimage6.gif" />
        <Image src="primitive_mass.gif" />

        <Text as="i">
          Technology: React, TypeScript, JavaScript, Node.js, three.js, Python,
          Django
        </Text>
      </ContainerBox>
      <ContainerBox>
        <Heading size="lg" fontWeight="bold">
          Detailed Occupancy Schedules
        </Heading>
        <Text color={textColor}>
          {`Full-year occupied and unoccupied hours for lighting, appliances, and occupant density for accurate energy use calculations.`}
        </Text>
        <Image src="occupancy-schedules.gif" />
        <Text as="i">
          Technology: React, TypeScript, JavaScript, Node.js, Python, Django,
          C++
        </Text>
      </ContainerBox>
    </ConfettiContainer>
  );
}
