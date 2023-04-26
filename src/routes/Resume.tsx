import { Box, Heading } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import PDFViewer from "../components/PDFViewer";

// import ResumePDF from "../static/resume.pdf";

type bla = {
  numPages: number;
};

export default function Resume() {
  return (
    <Box>
      <Heading> Resume</Heading>
      <PDFViewer />
    </Box>
  );
}
