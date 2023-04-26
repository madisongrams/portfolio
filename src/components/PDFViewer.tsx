import { Box, Heading } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import PDFViewButtons from "./PDFViewerButtons";

// import ResumePDF from "../static/resume.pdf";

type bla = {
  numPages: number;
};

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages: _numPages }: bla) {
    setNumPages(_numPages);
  }
  const changePage = useCallback(
    (offset: number) =>
      setPageNumber((prevPageNumber: number) => (prevPageNumber || 1) + offset),
    []
  );

  return (
    <Box>
      <Document file={"/resume.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
        <PDFViewButtons
          pageNumber={pageNumber}
          numPages={numPages}
          changePage={changePage}
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </Box>
  );
}
