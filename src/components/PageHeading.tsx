import { Heading, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageHeading({ children }: Props) {
  return (
    <Heading
      fontSize={{
        base: "4xl",
        md: "5xl",
      }}
      color={useColorModeValue("purple.800", "purple.100")}
    >
      {children}
    </Heading>
  );
}
