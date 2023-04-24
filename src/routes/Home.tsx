import { Box, Text, VStack, Code } from "@chakra-ui/react";
import { Logo } from "../Logo";

export default function Home() {
  return (
    <Box>
      <VStack spacing={8}>
        <Logo h="40vmin" pointerEvents="none" />
        <Text>
          Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
        </Text>
      </VStack>
    </Box>
  );
}
