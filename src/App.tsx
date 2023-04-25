import { Outlet, useLocation } from "react-router-dom";

import { ChakraProvider, Box, ScaleFade, Container } from "@chakra-ui/react";

import NavBar from "./components/navigation/NavBar";
import appTheme from "./theme";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  return (
    <ChakraProvider theme={appTheme}>
      <Box textAlign="center" fontSize="xl" width="full">
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
    </ChakraProvider>
  );
}
