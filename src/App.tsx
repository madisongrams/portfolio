import { Outlet, useLocation } from "react-router-dom";

import { ChakraProvider, Box, ScaleFade, Container } from "@chakra-ui/react";

import NavBar from "./components/navigation/NavBar";
import appTheme from "./theme";

export default function App() {
  const location = useLocation();

  return (
    <ChakraProvider theme={appTheme}>
      <Box textAlign="center" fontSize="xl">
        <NavBar />
        <Container as="main" marginTop="10" centerContent>
          <ScaleFade key={location.pathname} initialScale={0.9} in={true}>
            <Outlet />
          </ScaleFade>
        </Container>
      </Box>
    </ChakraProvider>
  );
}
