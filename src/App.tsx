import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "./components/LoadingScreen";
import Main from "./components/Main";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>{loaded ? <Main /> : <LoadingScreen />}</AnimatePresence>
  );
}
