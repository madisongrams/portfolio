import { ReactNode } from "react";

import { Box, VStack, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

export default function ContainerBox({ children }: Props) {
  return (
    <Box
      bg={useColorModeValue("purple.50", "purple.800")}
      borderRadius="lg"
      marginTop="10"
      color={useColorModeValue("purple.600", "purple.50")}
      w={{ base: "full", lg: "800px" }}
    >
      <VStack fontFamily="mono" spacing={8} padding="10" fontSize="md">
        {children}
      </VStack>
    </Box>
  );
}
