import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import "@fontsource/major-mono-display";

const appTheme = extendTheme({
  config: {
    initialColorMode: "system",
  },
  fonts: {
    body: "Major Mono Display",
    heading: "Major Mono Display",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "purple.900" : "purple.100",
      },
    }),
  },
});

export default appTheme;
