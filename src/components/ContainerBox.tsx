import { ReactNode, Ref, useRef } from "react";

import { Box, VStack, useColorModeValue } from "@chakra-ui/react";
import { useInView } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function ContainerBox({ children }: Props) {
  const ref: Ref<HTMLDivElement> | undefined = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
      <Box
        transform={isInView ? "none" : "translateY(100px)"}
        opacity={isInView ? 1 : 0}
        bg={useColorModeValue("purple.50", "purple.800")}
        borderRadius="lg"
        marginTop="10"
        color={useColorModeValue("purple.600", "purple.50")}
        w={{ base: "full", lg: "800px" }}
        transition="all 0.5s ease-in-out"
      >
        <VStack fontFamily="mono" spacing={8} padding="10" fontSize="md">
          {children}
        </VStack>
      </Box>
    </div>
  );
}
