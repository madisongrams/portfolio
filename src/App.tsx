import { Outlet, useLocation } from "react-router-dom";

import { ChakraProvider, Box, ScaleFade } from "@chakra-ui/react";

import NavBar from "./components/navigation/NavBar";
import appTheme from "./theme";

export default function App() {
  const location = useLocation();

  return (
    <ChakraProvider theme={appTheme}>
      <Box textAlign="center" fontSize="xl">
        <NavBar />
        <Box>
          <ScaleFade key={location.pathname} initialScale={0.9} in={true}>
            <Outlet />
          </ScaleFade>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
