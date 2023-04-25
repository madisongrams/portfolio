import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

const appTheme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "purple.900" : "purple.100",
      },
    }),
  },
});

export default appTheme;
