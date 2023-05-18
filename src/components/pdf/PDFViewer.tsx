import { useCallback, useState } from "react";
import { Document, Page } from "react-pdf";

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
  const [renderedPageNumber, setRenderedPageNumber] = useState(-1);

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

  const isLoading = renderedPageNumber !== pageNumber;

  return (
    <Container centerContent>
      <Document file={"/resume.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
        {isLoading && renderedPageNumber > 0 && (
          <Page
            key={renderedPageNumber}
            className="prevPage"
            pageNumber={renderedPageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        )}
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          renderTextLayer={false}
          onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
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
