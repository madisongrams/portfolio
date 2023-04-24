import { Outlet, useLocation } from "react-router-dom";
import { ChakraProvider, Box, theme, ScaleFade } from "@chakra-ui/react";
import NavBar from "./components/navigation/NavBar";

export default function App() {
  const location = useLocation();

  return (
    <ChakraProvider theme={theme}>
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
