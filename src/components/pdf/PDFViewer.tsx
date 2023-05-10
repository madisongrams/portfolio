import { useCallback, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

import { Container } from "@chakra-ui/react";

import PDFPageControl from "./PDFPageControl";
import PDFDownloadButton from "./PDFDownloadButton";

import "../../static/pdf-viewer.css";

type PDFDocumentProps = {
  numPages: number;
};

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages: _numPages }: PDFDocumentProps) {
    setNumPages(_numPages);
  }
  const changePage = useCallback(
    (offset: number) =>
      setPageNumber((prevPageNumber: number) => {
        const prevPage = prevPageNumber || 1;
        const nextPage = prevPage + offset;
        if (nextPage <= numPages && nextPage >= 1) {
          return nextPage;
        }
        return prevPage;
      }),
    [numPages]
  );

  return (
    <Container centerContent>
      <Document file={"/resume.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />

        <PDFPageControl
          pageNumber={pageNumber}
          numPages={numPages}
          changePage={changePage}
        />
        <PDFDownloadButton />
      </Document>
    </Container>
  );
}
