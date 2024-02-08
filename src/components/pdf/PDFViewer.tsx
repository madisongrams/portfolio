import { useCallback, useState } from "react";
import { Document, Page } from "react-pdf";

import { Container } from "@chakra-ui/react";

import PDFPageControl from "./PDFPageControl";
import PDFDownloadButton from "./PDFDownloadButton";

import "../../static/pdf-viewer.css";

type PDFDocumentProps = {
  numPages: number;
};

type PDFFile = string | File | null;

export default function PDFViewer() {
  const [file,] = useState<PDFFile>("/resume.pdf");
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [renderedPageNumber, setRenderedPageNumber] = useState<number | null>(
    null
  );

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
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {isLoading && renderedPageNumber ? (
          <Page
            key={renderedPageNumber}
            className="prevPage"
            pageNumber={renderedPageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ) : null}
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          renderTextLayer={false}
          onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
          renderAnnotationLayer={false}
          className={`${isLoading ? "loadingPage" : ""}`}
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
