import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { Container, Image, Heading } from "@chakra-ui/react";

import "../static/cat-running.css";

export default function LoadingScreen() {
  return (
    <Container
      centerContent
      height="100vh"
      justifyContent="center"
      as={motion.div}
      transition="0.5s linear"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
    >
      <Image
        src="cat_loading.gif"
        alt="Cat Run"
        boxSize="36"
        className="cat-running-gif"
      />
      <Heading size="lg">
        Loading
        <TypeAnimation
          sequence={[
            250,
            ".",
            250,
            "..",
            250,
            "...",
            250,
            "..",
            250,
            ".",
            250,
            "",
            250,
          ]}
          wrapper="span"
          cursor={false}
          repeat={Number.POSITIVE_INFINITY}
          style={{ whiteSpace: "pre-line" }}
        />
      </Heading>
    </Container>
  );
}
