import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import "@fontsource/major-mono-display";


const getBackgroundColor = (colorMode?: string) => {
  console.log(colorMode);
  return colorMode === "dark" ? "purple.900" : "purple.100";
};

const appTheme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    body: "monospace",
    heading: "Major Mono Display",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: getBackgroundColor(props.colorMode),
      },
      main: {
        bg: getBackgroundColor(props.colorMode),
      },
      heading: {
        color: props.colorMode === "dark" ? "purple.600" : "purple.100",
      },
      p: {
        color: props.colorMode === "dark" ? "purple.600" : "purple.100",
      },
    }),
  },
});

export default appTheme;
