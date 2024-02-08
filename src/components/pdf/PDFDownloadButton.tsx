import { DownloadIcon } from "@chakra-ui/icons";
import { Box, IconButton, useColorModeValue } from "@chakra-ui/react";

export default function PDFDownloadButton() {
  return (
    <Box
      className="download-button"
      position="absolute"
      top="5%"
      right="0%"
      transform="translateX(-50%)"
      transition="opacity ease-in-out 0.2s"
      borderRadius="10px"
      opacity={0}
      fontSize={"sm"}
    >
      <IconButton
        colorScheme="purple"
        aria-label="Download"
        icon={<DownloadIcon />}
        color={useColorModeValue("purple.100", "purple.800")}
        as="a"
        download
        href="/resume.pdf"
      />
    </Box>
  );
}
