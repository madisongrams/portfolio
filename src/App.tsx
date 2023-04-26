import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  ChakraProvider,
  Box,
  ScaleFade,
  Container,
  Image,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import NavBar from "./components/navigation/NavBar";
import appTheme from "./theme";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

import "./static/cat-running.css";

export default function App() {
  const bgColor = useColorModeValue("purple.100", "purple.900");

  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <ChakraProvider theme={appTheme}>
      <AnimatePresence>
        {loaded ? (
          <Box
            textAlign="center"
            fontSize="xl"
            width="full"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <NavBar />
            <Container
              as="main"
              marginTop="10"
              centerContent
              paddingBottom="20"
              position="relative"
              minHeight="100vh"
            >
              <ScaleFade key={location.pathname} initialScale={0.9} in={true}>
                <Outlet />
              </ScaleFade>
            </Container>
            <Footer />
          </Box>
        ) : (
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
            <Heading size="lg"> Loading...</Heading>
          </Container>
        )}
      </AnimatePresence>
    </ChakraProvider>
  );
}
