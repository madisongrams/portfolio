import { Box, Heading } from "@chakra-ui/react";
import PDFViewer from "../components/PDFViewer";

export default function Resume() {
  return (
    <Box>
      <Heading> Resume</Heading>
      <PDFViewer />
    </Box>
  );
}
