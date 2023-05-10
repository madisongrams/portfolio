import { Box } from "@chakra-ui/react";
import PDFViewer from "../components/pdf/PDFViewer";
import PageHeading from "../components/PageHeading";

export default function Resume() {
  return (
    <Box>
      <PageHeading> Resume</PageHeading>
      <PDFViewer />
    </Box>
  );
}
