import { Box, Heading } from "@chakra-ui/react";
import PDFViewer from "../components/pdf/PDFViewer";

export default function Resume() {
  return (
    <Box>
      <Heading> Resume</Heading>
      <PDFViewer />
    </Box>
  );
}
