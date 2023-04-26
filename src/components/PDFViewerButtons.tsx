import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

// import ResumePDF from "../static/resume.pdf";

type bla = {
  pageNumber: number;
  numPages: number;
  changePage: (arg0: number) => void;
};

export default function PDFViewButtons({
  pageNumber,
  numPages,
  changePage,
}: bla) {
  const previousPage = useCallback(() => changePage(-1), [changePage]);
  const nextPage = useCallback(() => changePage(1), [changePage]);

  return (
    <Flex maxWidth={"100%"} marginTop={"1em"} alignSelf="center">
      <Button isDisabled={(pageNumber || 0) <= 1} onClick={previousPage}>
        Previous
      </Button>
      <span>{`Page ${pageNumber || (numPages ? 1 : "--")} of ${
        numPages || "--"
      }`}</span>
      <Button
        disabled={(pageNumber || 0) >= (numPages || 0)}
        onClick={nextPage}
        type="button"
      >
        Next
      </Button>
    </Flex>
  );
}