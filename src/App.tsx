import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { ChakraProvider } from "@chakra-ui/react";

import LoadingScreen from "./components/LoadingScreen";
import Main from "./components/Main";
import appTheme from "./theme";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <ChakraProvider theme={appTheme}>
      <AnimatePresence>{loaded ? <Main /> : <LoadingScreen />}</AnimatePresence>
    </ChakraProvider>
  );
}
