import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import ConfettiContainer from "../components/ConfettiContainer";
import { Link as RouteLink } from "react-router-dom";

export default function About() {
  const textColor = useColorModeValue("purple.600", "purple.50");
  const linkColor = useColorModeValue("purple.700", "purple.200");

  return (
    <ConfettiContainer title="About Me">
      <Box
        bg={useColorModeValue("purple.50", "purple.800")}
        borderRadius="lg"
        marginTop="10"
        color={useColorModeValue("purple.600", "purple.50")}
        w={{ base: "full", lg: "800px" }}
      >
        <VStack fontFamily="mono" spacing={8} padding="10" fontSize="md">
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
          <Heading size="lg">
            Welcome
          </Heading>
          <Text color={textColor}>
            {`Hello there! I'm Madison Grams, a Senior Software Engineer based in 
            Atlanta, GA, with a strong passion for crafting innovative solutions 
            and tackling complex challenges. With multiple years of experience 
            in web development and a robust background in full-stack technologies, 
            I bring a wealth of expertise to every project I undertake.`}
          </Text>
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
                <Text color={linkColor} _hover={{ color: textColor }} display="inline" as="span">
                  contact me here!
                </Text>
              </Link>
            </span>
          </Box>

          <Text color={textColor}>{`Let's innovate together!`}</Text>
        </VStack>
      </Box>
    </ConfettiContainer>
  );
}
