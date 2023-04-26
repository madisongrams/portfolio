import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { Box, ScaleFade, Container } from "@chakra-ui/react";

import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";

export default function Main() {
  const location = useLocation();

  return (
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
  );
}
