import React from "react"
import { 
  Outlet,
  Link
} from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import NavBar from "./components/navigation/NavBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
    <NavBar />
      <Box>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
        </VStack>
      </Box>
      <Box>
      <Outlet />
      </Box>
    </Box>    
  </ChakraProvider>
)
